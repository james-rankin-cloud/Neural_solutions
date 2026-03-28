import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

// Run npm audit and parse results
export async function runDependencyAudit() {
  console.log('  Running dependency audit...');
  const findings = [];

  try {
    // Run npm audit with JSON output
    const result = execSync('npm audit --json', {
      cwd: projectRoot,
      encoding: 'utf-8',
      stdio: ['pipe', 'pipe', 'pipe'],
    });

    const audit = JSON.parse(result);

    if (audit.vulnerabilities) {
      for (const [name, vuln] of Object.entries(audit.vulnerabilities)) {
        const severity = vuln.severity || 'unknown';
        const via = Array.isArray(vuln.via) ? vuln.via : [vuln.via];

        // Get the first vulnerability description
        const firstVia = via.find(v => typeof v === 'object') || {};

        findings.push({
          type: 'dependency-vulnerability',
          severity: mapSeverity(severity),
          package: name,
          version: vuln.range || 'unknown',
          description: firstVia.title || `Vulnerability in ${name}`,
          recommendation: vuln.fixAvailable
            ? `Run: npm audit fix or update ${name}`
            : 'No automatic fix available - check for updates manually',
          url: firstVia.url || '',
        });
      }
    }
  } catch (error) {
    // npm audit exits with non-zero when vulnerabilities found
    if (error.stdout) {
      try {
        const audit = JSON.parse(error.stdout);

        if (audit.vulnerabilities) {
          for (const [name, vuln] of Object.entries(audit.vulnerabilities)) {
            const severity = vuln.severity || 'unknown';
            const via = Array.isArray(vuln.via) ? vuln.via : [vuln.via];
            const firstVia = via.find(v => typeof v === 'object') || {};

            findings.push({
              type: 'dependency-vulnerability',
              severity: mapSeverity(severity),
              package: name,
              version: vuln.range || 'unknown',
              description: firstVia.title || `Vulnerability in ${name}`,
              recommendation: vuln.fixAvailable
                ? `Run: npm audit fix or update ${name}`
                : 'No automatic fix available - check for updates manually',
              url: firstVia.url || '',
            });
          }
        }

        // Add summary
        if (audit.metadata) {
          const { vulnerabilities } = audit.metadata;
          if (vulnerabilities) {
            const total = Object.values(vulnerabilities).reduce((a, b) => a + b, 0);
            if (total > 0) {
              console.log(`    Found ${total} vulnerable packages`);
            }
          }
        }
      } catch (parseError) {
        findings.push({
          type: 'audit-error',
          severity: 'info',
          description: 'Could not parse npm audit output',
        });
      }
    } else {
      findings.push({
        type: 'audit-error',
        severity: 'info',
        description: 'npm audit failed to run',
      });
    }
  }

  return findings;
}

function mapSeverity(npmSeverity) {
  const map = {
    critical: 'critical',
    high: 'high',
    moderate: 'medium',
    low: 'low',
    info: 'info',
  };
  return map[npmSeverity] || 'medium';
}
