import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join(__dirname, '..', 'src');

// Discover all routes from App.tsx and page files
export async function discoverRoutes() {
  const routes = [];
  const appFile = path.join(srcDir, 'App.tsx');

  if (fs.existsSync(appFile)) {
    const content = fs.readFileSync(appFile, 'utf-8');
    const routeMatches = content.matchAll(/path=["']([^"']+)["']/g);
    for (const match of routeMatches) {
      routes.push(match[1]);
    }
  }

  // Fallback: scan pages directory
  const pagesDir = path.join(srcDir, 'pages');
  if (fs.existsSync(pagesDir)) {
    const files = fs.readdirSync(pagesDir);
    for (const file of files) {
      if (file.endsWith('.tsx') && file !== 'NotFound.tsx') {
        const name = file.replace('.tsx', '').toLowerCase();
        if (name === 'index') {
          if (!routes.includes('/')) routes.push('/');
        } else {
          const route = `/${name.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
          if (!routes.includes(route)) routes.push(route);
        }
      }
    }
  }

  return [...new Set(routes)];
}

// Discover all input fields, forms, and query params from source
export async function discoverInputs() {
  const inputs = [];

  function scanFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');

    // Find input elements
    const inputMatches = content.matchAll(/<(?:input|Input)[^>]*name=["']([^"']+)["'][^>]*/g);
    for (const match of inputMatches) {
      inputs.push({ type: 'input', name: match[1], file: filePath });
    }

    // Find form fields with register (react-hook-form)
    const registerMatches = content.matchAll(/register\(["']([^"']+)["']/g);
    for (const match of registerMatches) {
      inputs.push({ type: 'form-field', name: match[1], file: filePath });
    }

    // Find textarea elements
    const textareaMatches = content.matchAll(/<(?:textarea|Textarea)[^>]*name=["']([^"']+)["'][^>]*/g);
    for (const match of textareaMatches) {
      inputs.push({ type: 'textarea', name: match[1], file: filePath });
    }

    // Find useSearchParams usage
    if (content.includes('useSearchParams') || content.includes('searchParams')) {
      const paramMatches = content.matchAll(/searchParams\.get\(["']([^"']+)["']\)/g);
      for (const match of paramMatches) {
        inputs.push({ type: 'query-param', name: match[1], file: filePath });
      }
    }

    // Find URL hash usage
    if (content.includes('location.hash') || content.includes('window.location.hash')) {
      inputs.push({ type: 'hash', name: 'location.hash', file: filePath });
    }
  }

  function walkDir(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory() && !file.includes('node_modules')) {
        walkDir(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        scanFile(filePath);
      }
    }
  }

  walkDir(srcDir);
  return inputs;
}

// Discover API endpoints used in the codebase
export async function discoverApiEndpoints() {
  const endpoints = [];

  function scanFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');

    // Find fetch calls
    const fetchMatches = content.matchAll(/fetch\(["'`]([^"'`]+)["'`]/g);
    for (const match of fetchMatches) {
      if (!match[1].startsWith('data:')) {
        endpoints.push({ type: 'fetch', url: match[1], file: filePath });
      }
    }

    // Find axios calls
    const axiosMatches = content.matchAll(/axios\.(get|post|put|delete|patch)\(["'`]([^"'`]+)["'`]/g);
    for (const match of axiosMatches) {
      endpoints.push({ type: 'axios', method: match[1], url: match[2], file: filePath });
    }

    // Find API base URLs
    const apiUrlMatches = content.matchAll(/(?:API_URL|BASE_URL|apiUrl|baseUrl)\s*[=:]\s*["'`]([^"'`]+)["'`]/g);
    for (const match of apiUrlMatches) {
      endpoints.push({ type: 'base-url', url: match[1], file: filePath });
    }
  }

  function walkDir(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory() && !file.includes('node_modules')) {
        walkDir(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        scanFile(filePath);
      }
    }
  }

  walkDir(srcDir);
  return endpoints;
}

// Check for dangerous patterns in code
export async function scanDangerousPatterns() {
  const findings = [];

  const dangerousPatterns = [
    { pattern: /dangerouslySetInnerHTML/g, severity: 'high', description: 'dangerouslySetInnerHTML usage - potential XSS' },
    { pattern: /innerHTML\s*=/g, severity: 'high', description: 'innerHTML assignment - potential XSS' },
    { pattern: /outerHTML\s*=/g, severity: 'high', description: 'outerHTML assignment - potential XSS' },
    { pattern: /document\.write/g, severity: 'high', description: 'document.write usage - potential XSS' },
    { pattern: /eval\s*\(/g, severity: 'high', description: 'eval() usage - code injection risk' },
    { pattern: /new\s+Function\s*\(/g, severity: 'high', description: 'new Function() - code injection risk' },
    { pattern: /setTimeout\s*\(\s*["'`]/g, severity: 'medium', description: 'setTimeout with string - potential injection' },
    { pattern: /setInterval\s*\(\s*["'`]/g, severity: 'medium', description: 'setInterval with string - potential injection' },
    { pattern: /location\.href\s*=(?!.*encodeURI)/g, severity: 'medium', description: 'Unencoded URL assignment' },
    { pattern: /\.insertAdjacentHTML/g, severity: 'medium', description: 'insertAdjacentHTML - potential XSS' },
  ];

  function scanFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');

    for (const { pattern, severity, description } of dangerousPatterns) {
      let match;
      const regex = new RegExp(pattern.source, pattern.flags);
      while ((match = regex.exec(content)) !== null) {
        const lineNum = content.substring(0, match.index).split('\n').length;
        findings.push({
          type: 'dangerous-pattern',
          file: filePath,
          line: lineNum,
          severity,
          description,
          code: lines[lineNum - 1]?.trim() || '',
        });
      }
    }
  }

  function walkDir(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory() && !file.includes('node_modules')) {
        walkDir(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        scanFile(filePath);
      }
    }
  }

  walkDir(srcDir);
  return findings;
}
