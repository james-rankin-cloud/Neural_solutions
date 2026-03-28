#!/usr/bin/env node

import path from 'path';
import { fileURLToPath } from 'url';
import {
  discoverRoutes,
  discoverInputs,
  discoverApiEndpoints,
  scanDangerousPatterns,
} from './discovery.js';
import { runXssTests } from './xss-tester.js';
import { runHeaderTests } from './headers-tester.js';
import { runDependencyAudit } from './dep-audit.js';
import {
  generateJsonReport,
  generateMarkdownReport,
  printTerminalSummary,
} from './reporter.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function main() {
  console.log('\n🔒 Neural Solutions Security Scanner\n');
  console.log('='.repeat(50));

  const allFindings = [];

  // Phase 1: Discovery
  console.log('\n📍 Phase 1: Discovery');
  console.log('  Scanning codebase...');

  const routes = await discoverRoutes();
  console.log(`  Found ${routes.length} routes: ${routes.join(', ')}`);

  const inputs = await discoverInputs();
  console.log(`  Found ${inputs.length} input fields`);

  const endpoints = await discoverApiEndpoints();
  console.log(`  Found ${endpoints.length} API endpoints`);

  // Phase 2: Static Analysis
  console.log('\n🔍 Phase 2: Static Analysis');
  console.log('  Scanning for dangerous patterns...');

  const dangerousPatterns = await scanDangerousPatterns();
  if (dangerousPatterns.length > 0) {
    console.log(`  Found ${dangerousPatterns.length} potential issues`);
    allFindings.push(...dangerousPatterns);
  } else {
    console.log('  No dangerous patterns found');
  }

  // Phase 3: Dependency Audit
  console.log('\n📦 Phase 3: Dependency Audit');

  const depFindings = await runDependencyAudit();
  allFindings.push(...depFindings);

  // Phase 4: Active Testing (requires dev server)
  console.log('\n🌐 Phase 4: Active Testing');
  console.log('  Note: Start dev server (npm run dev) for full testing');

  // Test security headers
  const headerFindings = await runHeaderTests(routes);
  allFindings.push(...headerFindings);

  // Test XSS
  const xssFindings = await runXssTests(routes, inputs);
  allFindings.push(...xssFindings);

  // Phase 5: API Security (skip if no endpoints)
  if (endpoints.length > 0) {
    console.log('\n🔌 Phase 5: API Security');
    console.log(`  Checking ${endpoints.length} endpoints...`);
    // API tests would go here - skipped for frontend-only app
  } else {
    console.log('\n🔌 Phase 5: API Security');
    console.log('  No API endpoints found - skipping');
  }

  // Generate Reports
  console.log('\n📊 Generating Reports...');

  const jsonPath = path.join(__dirname, 'report.json');
  const mdPath = path.join(__dirname, 'report.md');

  generateJsonReport(allFindings, jsonPath);
  generateMarkdownReport(allFindings, mdPath);

  // Print Summary
  printTerminalSummary(allFindings);

  // Exit with error code if critical/high issues found
  const criticalOrHigh = allFindings.filter(
    f => f.severity === 'critical' || f.severity === 'high'
  ).length;

  if (criticalOrHigh > 0) {
    process.exit(1);
  }
}

main().catch(error => {
  console.error('Security scan failed:', error);
  process.exit(1);
});
