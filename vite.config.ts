import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import sitemap from "vite-plugin-sitemap";
import { cities } from "./src/lib/data/cities";

// Generate sitemap routes
const CITY_SLUGS = [
  "victoria", "vancouver", "toronto", "calgary", "montreal",
  "edmonton", "ottawa", "winnipeg", "mississauga", "brampton",
  "surrey", "burnaby", "richmond", "halifax", "kelowna",
  "saskatoon", "regina", "quebec-city"
];

const sitemapRoutes = [
  "/",
  "/services",
  "/case-studies",
  "/about",
  "/book-audit",
  "/ui-code-kit",
  ...CITY_SLUGS.map((slug) => `/ai-agency-${slug}`)
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    sitemap({
      hostname: "https://neuralsolutions.ca",
      routes: sitemapRoutes,
      dynamicRoutes: sitemapRoutes,
      readable: true,
    }),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ["**/*.PNG"],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // React and related packages
          if (id.includes("react") || id.includes("react-dom") || id.includes("react-router-dom")) {
            return "react-vendor";
          }
          // Radix UI components
          if (id.includes("@radix-ui")) {
            return "ui-vendor";
          }
        },
      },
    },
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: mode === "production",
      },
    },
    chunkSizeWarningLimit: 1000,
  },
}));
