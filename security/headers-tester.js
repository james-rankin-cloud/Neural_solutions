const BASE_URL = process.env.BASE_URL || 'http://localhost:8080';

// Required security headers and their expected values
const securityHeaders = [
  {
    name: 'Content-Security-Policy',
    required: true,
    severity: 'high',
    description: 'CSP prevents XSS and data injection attacks',
    recommendation: "Add Content-Security-Policy header. Start with: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'",
  },
  {
    name: 'X-Content-Type-Options',
    required: true,
    severity: 'medium',
    expectedValue: 'nosniff',
    description: 'Prevents MIME type sniffing',
    recommendation: "Add header: X-Content-Type-Options: nosniff",
  },
  {
    name: 'X-Frame-Options',
    required: true,
    severity: 'medium',
    expectedValues: ['DENY', 'SAMEORIGIN'],
    description: 'Prevents clickjacking attacks',
    recommendation: "Add header: X-Frame-Options: DENY or SAMEORIGIN",
  },
  {
    name: 'Strict-Transport-Security',
    required: false, // Only for HTTPS
    severity: 'medium',
    description: 'Enforces HTTPS connections',
    recommendation: "Add header: Strict-Transport-Security: max-age=31536000; includeSubDomains",
  },
  {
    name: 'Referrer-Policy',
    required: true,
    severity: 'low',
    expectedValues: ['no-referrer', 'strict-origin-when-cross-origin', 'same-origin'],
    description: 'Controls referrer information sent with requests',
    recommendation: "Add header: Referrer-Policy: strict-origin-when-cross-origin",
  },
  {
    name: 'Permissions-Policy',
    required: false,
    severity: 'low',
    description: 'Controls browser features and APIs',
    recommendation: "Add header: Permissions-Policy: geolocation=(), camera=(), microphone=()",
  },
  {
    name: 'X-XSS-Protection',
    required: false,
    severity: 'low',
    description: 'Legacy XSS filter (deprecated but still useful for older browsers)',
    recommendation: "Add header: X-XSS-Protection: 1; mode=block",
  },
];

// Test CORS configuration
async function testCors(url) {
  const findings = [];

  try {
    // Test with arbitrary origin
    const response = await fetch(url, {
      method: 'OPTIONS',
      headers: {
        'Origin': 'https://evil.com',
        'Access-Control-Request-Method': 'GET',
      },
    });

    const allowOrigin = response.headers.get('Access-Control-Allow-Origin');
    const allowCredentials = response.headers.get('Access-Control-Allow-Credentials');

    if (allowOrigin === '*') {
      findings.push({
        type: 'cors-misconfiguration',
        severity: 'medium',
        location: url,
        description: 'CORS allows all origins (*)',
        recommendation: 'Restrict Access-Control-Allow-Origin to specific trusted domains',
      });
    }

    if (allowOrigin === 'https://evil.com') {
      findings.push({
        type: 'cors-misconfiguration',
        severity: 'high',
        location: url,
        description: 'CORS reflects arbitrary origin - potential credential theft',
        recommendation: 'Do not reflect arbitrary origins. Whitelist specific domains.',
      });
    }

    if (allowCredentials === 'true' && allowOrigin === '*') {
      findings.push({
        type: 'cors-misconfiguration',
        severity: 'high',
        location: url,
        description: 'CORS allows credentials with wildcard origin',
        recommendation: 'Never use Allow-Credentials with wildcard origin',
      });
    }
  } catch (error) {
    // Server not running or CORS not configured
  }

  return findings;
}

// Test security headers on a URL
async function testHeaders(url) {
  const findings = [];

  try {
    const response = await fetch(url);
    const headers = response.headers;

    for (const header of securityHeaders) {
      const value = headers.get(header.name);

      if (!value && header.required) {
        findings.push({
          type: 'missing-security-header',
          severity: header.severity,
          location: url,
          header: header.name,
          description: `Missing ${header.name}: ${header.description}`,
          recommendation: header.recommendation,
        });
      } else if (value && header.expectedValue && value !== header.expectedValue) {
        findings.push({
          type: 'weak-security-header',
          severity: 'low',
          location: url,
          header: header.name,
          currentValue: value,
          description: `${header.name} has unexpected value`,
          recommendation: `Expected: ${header.expectedValue}, Got: ${value}`,
        });
      } else if (value && header.expectedValues && !header.expectedValues.includes(value)) {
        findings.push({
          type: 'weak-security-header',
          severity: 'low',
          location: url,
          header: header.name,
          currentValue: value,
          description: `${header.name} has unexpected value`,
          recommendation: `Expected one of: ${header.expectedValues.join(', ')}, Got: ${value}`,
        });
      }
    }
  } catch (error) {
    findings.push({
      type: 'connection-error',
      severity: 'info',
      location: url,
      description: `Could not connect to ${url} - ensure dev server is running`,
    });
  }

  return findings;
}

// Run all header tests
export async function runHeaderTests(routes) {
  console.log('  Testing security headers...');
  const findings = [];

  // Test main route
  const mainUrl = BASE_URL;
  const headerFindings = await testHeaders(mainUrl);
  findings.push(...headerFindings);

  // Test CORS
  const corsFindings = await testCors(mainUrl);
  findings.push(...corsFindings);

  return findings;
}
