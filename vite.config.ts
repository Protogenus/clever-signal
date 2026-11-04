import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { SITE } from "./src/data/site.ts";
import { orderedProducts, productUrl } from "./src/data/products.ts";

/**
 * Emits sitemap.xml into the build output from the same centralized product
 * data the pages render — one source of truth, no drift.
 */
function sitemapPlugin(): Plugin {
  return {
    name: "clever-signal-sitemap",
    generateBundle() {
      const base = SITE.canonicalBase.replace(/\/$/, "");
      const routes = ["/", "/products", "/about", "/contact"];
      for (const p of orderedProducts()) routes.push(productUrl(p.slug));
      const today = new Date().toISOString().slice(0, 10);
      const urls = routes
        .map(
          (r) =>
            `  <url><loc>${base}${r}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq></url>`,
        )
        .join("\n");
      const xml =
        `<?xml version="1.0" encoding="UTF-8"?>\n` +
        `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
      this.emitFile({ type: "asset", fileName: "sitemap.xml", source: xml });
    },
  };
}

export default defineConfig({
  plugins: [react(), sitemapPlugin()],
});
