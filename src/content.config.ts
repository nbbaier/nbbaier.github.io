import doiRegex from "doi-regex";
import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

const schema = z.object({
	id: z.string(),
	type: z.enum(["paper", "manuscript", "presentation", "poster"]),
	title: z.string(),
	doi: z.string().regex(doiRegex()).optional(),
});
