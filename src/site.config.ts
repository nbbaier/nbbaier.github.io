import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
	author: "Nico Baier",
	date: {
		locale: "en-US",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	description: "Nico Baier's personal website",
	lang: "en-US",
	ogLocale: "en_US",
	title: "Nico Baier",
	url: "https://nicobaier.com",
};

const personSchema = {
	"@context": "http://schema.org",
	"@type": "Person",
	email: "mailto:nico.baier@gmail.com",
	jobTitle: "Independent Linguist",
	name: "Nico Baier",
	additionalName: "Nicholas Baier",
	alumniOf: ["University of Michigan", "University of California, Berkeley"],
	birthPlace: "Ann Arbor, Michigan",
	url: "https://nicobaier.com",
	sameAs: [
		"https://linkedin.com/in/nbbaier",
		"https://github.com/nbbaier/",
		"https://bsky.app/profile/nicobaier.com",
	],
};

export const websiteSchema = JSON.stringify({
	"@context": "http://schema.org",
	"@type": "WebPage",
	name: { siteTitle: siteConfig.title },
	description: { description: siteConfig.description },
	author: personSchema,
});
