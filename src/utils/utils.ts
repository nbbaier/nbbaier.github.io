import { type ClassValue, clsx } from "clsx";
import fs from "node:fs";
import { twMerge } from "tailwind-merge";
import type { CSLData } from "./cslSchema";

const BASE_DIR = "src/data";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const normName = (name: string) => {
	return name.toLocaleLowerCase().replace(".", "").replace(" ", "-");
};

export const loadOutput = () => {
	const data = JSON.parse(
		fs.readFileSync(`${BASE_DIR}/output.json`).toString(),
	) as CSLData;

	return data.map((item) => {
		const authors = item.author.map(
			(author) => `${normName(author.family)}-${normName(author.given)}`,
		);

		const editors = item.editor
			? item.editor.map(
					(editor) =>
						`${normName(editor.family)}-${normName(editor.given)}`,
				)
			: [];

		return {
			...item,
			author: authors,
			...(editors.length > 0 && { editor: editors }),
		};
	});
};
