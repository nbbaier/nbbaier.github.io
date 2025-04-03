import { file } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";
import { publicationSchema } from "./utils/cslSchema";
import { loadOutput } from "./utils/utils";

const BASE_DIR = "src/data";

const people = defineCollection({
	loader: file(`${BASE_DIR}/people.json`),
	schema: z.object({
		family: z.string(),
		given: z.string(),
		url: z.string().url().optional(),
	}),
});

const output = defineCollection({
	loader: loadOutput,
	schema: publicationSchema.merge(
		z.object({
			author: z.array(reference("people")),
			editor: z.array(reference("people")).optional(),
		}),
	),
});

export const collections = { people, output };
