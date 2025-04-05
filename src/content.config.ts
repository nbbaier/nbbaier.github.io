import { DATA } from "@/lib/config";
import { publicationSchema } from "@/lib/schema";
import { parseOutput } from "@/lib/utils";
import { file } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

const people = defineCollection({
	loader: file(`${DATA}/people.json`),
	schema: z.object({
		family: z.string(),
		given: z.string(),
		url: z.string().url().optional(),
	}),
});

const output = defineCollection({
	loader: file(`${DATA}/output.json`, {
		parser: (text) => parseOutput(text),
	}),
	schema: publicationSchema.merge(
		z.object({
			author: z.array(reference("people")),
			editor: z.array(reference("people")).optional(),
		}),
	),
});

export const collections = { people, output };
