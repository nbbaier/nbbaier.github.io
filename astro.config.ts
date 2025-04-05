import { siteConfig } from "./src/site.config";
import tailwindcss from "@tailwindcss/vite";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: siteConfig.url,
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [robotsTxt()],
});
