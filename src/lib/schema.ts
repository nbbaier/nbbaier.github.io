import { z } from "astro/zod";
import doi from "doi-regex";
const cslPersonSchema = z.object({
	family: z.string(),
	given: z.string(),
});

const datePartsSchema = z.array(z.array(z.number()));

const cslTypeSchema = z.enum([
	"article-journal",
	"paper-conference",
	"chapter",
	"manuscript",
	"speech",
]);

const dateSchema = z.object({
	"date-parts": datePartsSchema,
});

export const publicationSchema = z.object({
	DOI: z.string().regex(doi()).optional(),
	ISSN: z
		.string()
		.regex(/\d{4}-\d{4}/)
		.optional(),
	author: z.array(cslPersonSchema),
	"container-title": z.string().optional(),
	id: z.string(),
	issue: z.string().optional(),
	issued: dateSchema,
	page: z.string().optional(),
	publisher: z.string().optional(),
	"publisher-place": z.string().optional(),
	title: z.string(),
	"title-short": z.string().optional(),
	type: cslTypeSchema,
	volume: z.string().optional(),
	"collection-title": z.string().optional(),
	editor: z.array(cslPersonSchema).optional(),
	event: z.string().optional(),
	"event-date": dateSchema.optional(),
	note: z.string().optional(),
});

export const publicationsSchema = z.array(publicationSchema);

export type CSLType = z.infer<typeof cslTypeSchema>;
export type CSLPerson = z.infer<typeof cslPersonSchema>;
export type CSLPublication = z.infer<typeof publicationSchema>;
export type CSLData = z.infer<typeof publicationsSchema>;
