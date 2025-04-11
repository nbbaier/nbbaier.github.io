import tailwindcss from "@tailwindcss/vite";
import aiRobotsTxt from "astro-ai-robots-txt";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";
import { siteConfig } from "./src/site.config";

import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

export default defineConfig({
	site: siteConfig.url,
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [robotsTxt(), aiRobotsTxt(), sitemap(), icon()],
	prefetch: true,
});
