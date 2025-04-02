import { defineCollection, reference, z } from "astro:content";
import { file, glob } from "astro/loaders";

const BASE_DIR = "src/content";

export const collections = {
	authors: defineCollection({
		loader: file(`${BASE_DIR}/authors.json`, {}),
		schema: z.object({
			name: z.string(),
			url: z.string().url().optional(),
		}),
	}),
	papers: defineCollection({
		loader: file("./src/content/output.json", {
			parser: (text) => JSON.parse(text).papers,
		}),
		schema: z.object({
			title: z.string(),
			publishedIn: z.string(),
			date: z.string().regex(/\d{4}/),
			paperLink: z.array(
				z.object({
					url: z.string().url(),
					label: z.string(),
				}),
			),
			coauthors: z.array(reference("authors")).optional(),
		}),
	}),
	presentations: defineCollection({
		loader: file("./src/content/output.json", {
			parser: (text) => JSON.parse(text).presentations,
		}),
		schema: z.object({
			title: z.string(),
			conference: z.string(),
			location: z.string(),
			date: z
				.string()
				.regex(
					/Jan|Feb|Mar|Apr|May|June|July|Aug|Sept|Oct|Nov|Dec \d{1,2}-\d{1,2}, \d{4}/,
				),
			paperLink: z.array(
				z.object({
					url: z.string().url(),
					label: z.string(),
				}),
			),
			coauthors: z.array(reference("authors")).optional(),
		}),
	}),
};
