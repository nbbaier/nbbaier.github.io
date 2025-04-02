import tailwindcss from "@tailwindcss/vite";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://nicobaier.com",
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [robotsTxt()],
});
