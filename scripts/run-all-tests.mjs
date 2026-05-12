#!/usr/bin/env node

import { spawn } from 'child_process';
import { platform } from 'os';

// ANSI color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

const isWindows = platform() === 'win32';

// Test suites configuration
const testSuites = [
  {
    name: 'Linting',
    command: 'npm',
    args: ['run', 'lint'],
    description: 'Running ESLint checks',
    required: true,
  },
  {
    name: 'Unit Tests',
    command: 'npm',
    args: ['test'],
    description: 'Running Vitest unit tests',
    required: true,
  },
  {
    name: 'Schema Validation (Unit)',
    command: 'npm',
    args: ['run', 'test:schema'],
    description: 'Validating JSON-LD schema structure',
    required: true,
  },
  {
    name: 'E2E Tests',
    command: 'npm',
    args: ['run', 'test:e2e'],
    description: 'Running Playwright E2E tests',
    required: true,
  },
  {
    name: 'Schema Validation (E2E)',
    command: 'npm',
    args: ['run', 'test:e2e:schema'],
    description: 'Validating rendered JSON-LD markup',
    required: true,
  },
  {
    name: 'City SEO Tests',
    command: 'npm',
    args: ['run', 'test:city-seo'],
    description: 'Testing city landing pages SEO',
    required: false,
  },
  {
    name: 'City SEO Validation',
    command: 'npm',
    args: ['run', 'validate:city-seo'],
    description: 'Validating city landing pages',
    required: false,
  },
];

// Statistics tracking
const stats = {
  total: 0,
  passed: 0,
  failed: 0,
  skipped: 0,
  startTime: Date.now(),
};

// Helper function to print colored output
function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

// Helper function to print section headers
function printHeader(text) {
  const line = '='.repeat(60);
  log(`\n${line}`, colors.cyan);
  log(`  ${text}`, colors.bright + colors.cyan);
  log(line, colors.cyan);
}

// Helper function to print test results
function printTestResult(name, passed, duration) {
  const status = passed ? '✓ PASSED' : '✗ FAILED';
  const statusColor = passed ? colors.green : colors.red;
  const durationStr = `(${duration}s)`;

  log(`${statusColor}${status}${colors.reset} ${name} ${colors.yellow}${durationStr}${colors.reset}`);
}

// Run a single test suite
function runTest(suite) {
  return new Promise((resolve) => {
    stats.total++;
    const startTime = Date.now();

    log(`\n${colors.blue}▶ ${suite.description}...${colors.reset}`);

    // Use shell on Windows for better npm script execution
    const childProcess = spawn(suite.command, suite.args, {
      stdio: 'inherit',
      shell: isWindows,
    });

    childProcess.on('close', (code) => {
      const duration = ((Date.now() - startTime) / 1000).toFixed(2);
      const passed = code === 0;

      if (passed) {
        stats.passed++;
      } else {
        stats.failed++;
      }

      printTestResult(suite.name, passed, duration);
      resolve({ suite, passed, code, duration });
    });

    childProcess.on('error', (err) => {
      log(`Error running ${suite.name}: ${err.message}`, colors.red);
      stats.failed++;
      const duration = ((Date.now() - startTime) / 1000).toFixed(2);
      printTestResult(suite.name, false, duration);
      resolve({ suite, passed: false, code: 1, duration });
    });
  });
}

// Run all test suites sequentially
async function runAllTests() {
  printHeader('Neural Solutions - Master Test Suite');
  log(`${colors.cyan}Running comprehensive test suite...${colors.reset}\n`);

  const results = [];

  for (const suite of testSuites) {
    const result = await runTest(suite);
    results.push(result);

    // Stop on critical failure if required test fails
    if (!result.passed && suite.required) {
      log(`\n${colors.red}${colors.bright}Critical test failed: ${suite.name}${colors.reset}`);
      log(`${colors.yellow}Stopping test execution.${colors.reset}`);
      break;
    }
  }

  return results;
}

// Print final summary
function printSummary(results) {
  const totalDuration = ((Date.now() - stats.startTime) / 1000).toFixed(2);

  printHeader('Test Summary');

  // Test results table
  log('\nTest Results:');
  log('─'.repeat(60), colors.cyan);

  results.forEach(({ suite, passed, duration }) => {
    const icon = passed ? '✓' : '✗';
    const color = passed ? colors.green : colors.red;
    const status = passed ? 'PASSED' : 'FAILED';
    log(`${color}${icon} ${suite.name.padEnd(30)} ${status.padEnd(10)} ${duration}s${colors.reset}`);
  });

  log('─'.repeat(60), colors.cyan);

  // Statistics
  log('\nStatistics:');
  log(`  Total Tests:    ${stats.total}`);
  log(`  ${colors.green}Passed:         ${stats.passed}${colors.reset}`);
  log(`  ${colors.red}Failed:         ${stats.failed}${colors.reset}`);
  log(`  Total Duration: ${totalDuration}s`);

  // Overall result
  log('');
  if (stats.failed === 0) {
    log('━'.repeat(60), colors.green);
    log('  ✓ ALL TESTS PASSED', colors.bright + colors.green);
    log('━'.repeat(60), colors.green);
  } else {
    log('━'.repeat(60), colors.red);
    log(`  ✗ ${stats.failed} TEST${stats.failed > 1 ? 'S' : ''} FAILED`, colors.bright + colors.red);
    log('━'.repeat(60), colors.red);
  }

  log('');
}

// Print recommendations based on failures
function printRecommendations(results) {
  const failures = results.filter(r => !r.passed);

  if (failures.length === 0) return;

  printHeader('Recommendations');

  failures.forEach(({ suite }) => {
    log(`\n${colors.yellow}Failed: ${suite.name}${colors.reset}`);

    switch (suite.name) {
      case 'Linting':
        log('  → Run: npm run lint -- --fix');
        log('  → Check ESLint configuration');
        break;
      case 'Unit Tests':
        log('  → Run: npm run test:watch');
        log('  → Check test files in src/test/');
        break;
      case 'Schema Validation (Unit)':
        log('  → Check JSON-LD structure in LandingPage.tsx');
        log('  → Verify schema matches Schema.org specs');
        log('  → Run: npm run test:schema');
        break;
      case 'E2E Tests':
        log('  → Run: npm run test:e2e:ui');
        log('  → Check Playwright test files in tests/');
        break;
      case 'Schema Validation (E2E)':
        log('  → Ensure development server is running');
        log('  → Check that JSON-LD is rendered in DOM');
        log('  → Verify all meta tags are present');
        break;
      case 'City SEO Tests':
        log('  → Check city landing page generation');
        log('  → Verify city data in lib/data/cities.ts');
        break;
      default:
        log('  → Check test output above for details');
    }
  });

  log('');
}

// Main execution
async function main() {
  try {
    const results = await runAllTests();
    printSummary(results);
    printRecommendations(results);

    // Exit with appropriate code
    const exitCode = stats.failed > 0 ? 1 : 0;
    process.exit(exitCode);
  } catch (error) {
    log(`\n${colors.red}Fatal error: ${error.message}${colors.reset}`);
    process.exit(1);
  }
}

// Run the master test suite
main();
