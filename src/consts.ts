export const SITE = {
	title: 'Encuesta Colombia dev',
	description: 'Your website description.',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'jbarriospd',
};

export const GITHUB_EDIT_URL = `https://github.com/jbarriospd/Encuesta-Colombia-Dev/tree/main`;

export type Sidebar = Record<string, { text: string; link: string }[]>;

export const SIDEBAR: Sidebar = {

	'Introducción': [
		{ text: 'Introducción', link: 'introduction' },
		{ text: 'Page 2', link: 'page-2' },
		{ text: 'Page 3', link: 'page-3' },
	],
	'Developer Profile': [
		{ text: 'Demografia', link: 'demografia' },
		{ text: 'Tecnologias', link: 'tecnologias' },
		{ text: 'Entorno de trabajo', link: 'trabajo' }
	],


};
