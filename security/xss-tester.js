import { xssPayloads, domXssPayloads } from './payloads.js';

const BASE_URL = process.env.BASE_URL || 'http://localhost:8080';

// Test URL parameters for reflected XSS
export async function testReflectedXss(routes) {
  const findings = [];

  for (const route of routes) {
    for (const payload of xssPayloads.slice(0, 5)) { // Test first 5 payloads
      const encodedPayload = encodeURIComponent(payload);
      const testUrl = `${BASE_URL}${route}?test=${encodedPayload}`;

      try {
        const response = await fetch(testUrl, {
          headers: { 'Accept': 'text/html' },
        });
        const body = await response.text();

        // Check if payload is reflected unencoded
        if (body.includes(payload) && !body.includes(encodedPayload)) {
          findings.push({
            type: 'reflected-xss',
            severity: 'high',
            location: testUrl,
            payload,
            description: 'XSS payload reflected in response without encoding',
          });
        }
      } catch (error) {
        // Server not running or route not accessible
      }
    }
  }

  return findings;
}

// Test DOM-based XSS via hash and query params
export async function testDomXss(routes) {
  const findings = [];

  for (const route of routes) {
    for (const payload of domXssPayloads) {
      const testUrl = `${BASE_URL}${route}${payload}`;

      try {
        const response = await fetch(testUrl.split('#')[0], {
          headers: { 'Accept': 'text/html' },
        });

        if (response.ok) {
          // DOM XSS requires browser execution - flag as potential
          findings.push({
            type: 'potential-dom-xss',
            severity: 'medium',
            location: testUrl,
            payload,
            description: 'Route accepts potentially dangerous URL fragment/query - requires manual verification',
          });
        }
      } catch (error) {
        // Server not running
      }
    }
  }

  // Dedupe by route
  const seen = new Set();
  return findings.filter(f => {
    const key = f.location.split('?')[0].split('#')[0];
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

// Test form inputs for stored XSS potential
export async function testStoredXss(inputs) {
  const findings = [];

  // For frontend-only apps, flag inputs that could store XSS if backend existed
  for (const input of inputs) {
    if (input.type === 'input' || input.type === 'form-field' || input.type === 'textarea') {
      findings.push({
        type: 'potential-stored-xss',
        severity: 'low',
        location: input.file,
        field: input.name,
        description: `Input field "${input.name}" - verify server-side sanitization if data is stored`,
      });
    }
  }

  // Dedupe
  const seen = new Set();
  return findings.filter(f => {
    const key = `${f.location}:${f.field}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

// Run all XSS tests
export async function runXssTests(routes, inputs) {
  console.log('  Testing for XSS vulnerabilities...');

  const [reflected, dom, stored] = await Promise.all([
    testReflectedXss(routes),
    testDomXss(routes),
    testStoredXss(inputs),
  ]);

  return [...reflected, ...dom, ...stored];
}
