import type { CSLData } from "../schema";

const normName = (name: string) => {
	return name.toLocaleLowerCase().replace(".", "").replace(" ", "-");
};

export const parseOutput = (text: string) => {
	const data = JSON.parse(text) as CSLData;
	return data.map((item) => {
		const authors = item.author.map(
			(author) => `${normName(author.family)}-${normName(author.given)}`,
		);

		const editors = item.editor
			? item.editor.map(
					(editor) => `${normName(editor.family)}-${normName(editor.given)}`,
				)
			: [];

		return {
			...item,
			author: authors,
			...(editors.length > 0 && { editor: editors }),
		};
	});
};
