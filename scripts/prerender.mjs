/**
 * Pre-rendering script using Puppeteer
 * Renders all 25 pages to static HTML with full meta tags and content
 */

import puppeteer from "puppeteer";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { exec } from "child_process";
import { promisify } from "util";
import { minify } from "html-minifier-terser";

const execAsync = promisify(exec);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, "..");
const DIST_DIR = path.join(ROOT_DIR, "dist");

// City slugs from cities.ts
const CITY_SLUGS = [
  "victoria",
  "vancouver",
  "toronto",
  "calgary",
  "montreal",
  "edmonton",
  "ottawa",
  "winnipeg",
  "mississauga",
  "brampton",
  "surrey",
  "burnaby",
  "richmond",
  "halifax",
  "kelowna",
  "saskatoon",
  "regina",
  "quebec-city",
];

// All routes to pre-render
const ROUTES = [
  "/",
  "/services",
  "/case-studies",
  "/about",
  "/book-audit",
  "/ui-code-kit",
  ...CITY_SLUGS.map((slug) => `/ai-agency-${slug}`),
];

const PREVIEW_URL = "http://localhost:4173";

/**
 * Start Vite preview server
 */
async function startPreviewServer() {
  console.log("Starting preview server...");
  const serverProcess = exec("npm run preview");

  // Wait for server to be ready
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return serverProcess;
}

/**
 * Pre-render a single page
 */
async function prerenderPage(browser, route) {
  const url = `${PREVIEW_URL}${route}`;
  console.log(`Pre-rendering: ${route}`);

  const page = await browser.newPage();

  try {
    // Navigate to the page
    await page.goto(url, {
      waitUntil: "networkidle0",
      timeout: 30000,
    });

    // Wait for React to hydrate
    await page.waitForSelector("#root", { timeout: 10000 });

    // Additional wait for any async content
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Get the fully rendered HTML
    const html = await page.content();

    // Minify HTML
    const minifiedHtml = await minify(html, {
      collapseWhitespace: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true,
    });

    // Determine output path
    const outputPath =
      route === "/"
        ? path.join(DIST_DIR, "index.html")
        : path.join(DIST_DIR, route, "index.html");

    // Ensure directory exists
    await fs.mkdir(path.dirname(outputPath), { recursive: true });

    // Write the HTML file
    await fs.writeFile(outputPath, minifiedHtml, "utf-8");

    console.log(`  ✓ Saved to ${outputPath}`);
    return true;
  } catch (error) {
    console.error(`  ✗ Failed to render ${route}:`, error.message);
    return false;
  } finally {
    await page.close();
  }
}

/**
 * Main pre-render function
 */
async function main() {
  console.log("╔══════════════════════════════════════════╗");
  console.log("║   Pre-rendering Neural Solutions Site   ║");
  console.log("╚══════════════════════════════════════════╝\n");

  let serverProcess;
  let browser;

  try {
    // Start preview server
    serverProcess = await startPreviewServer();

    // Launch browser
    console.log("Launching headless browser...\n");
    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    // Pre-render all pages
    let successCount = 0;
    let failCount = 0;

    for (const route of ROUTES) {
      const success = await prerenderPage(browser, route);
      if (success) {
        successCount++;
      } else {
        failCount++;
      }
    }

    console.log(`\n╔══════════════════════════════════════════╗`);
    console.log(`║           Pre-render Complete            ║`);
    console.log(`╚══════════════════════════════════════════╝`);
    console.log(`\n✓ Successfully pre-rendered: ${successCount}/${ROUTES.length} pages`);
    if (failCount > 0) {
      console.log(`✗ Failed: ${failCount} pages`);
    }
  } catch (error) {
    console.error("\n✗ Pre-rendering failed:", error);
    process.exit(1);
  } finally {
    // Cleanup
    if (browser) {
      await browser.close();
    }
    if (serverProcess) {
      serverProcess.kill();
    }
  }
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
