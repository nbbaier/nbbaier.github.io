import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
	site: "https://nicobaier.com",
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [robotsTxt()],
});
