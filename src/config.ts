export const SITE = {
	title: 'Salario dev Colombia',
	description: 'Encuesta de salario 2021.',
	defaultLanguage: 'es_ES',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
	title: string;
	description: string;
	layout: string;
	image?: { src: string; alt: string };
	dir?: 'ltr' | 'rtl';
	ogLocale?: string;
	lang?: string;
};

export const GITHUB_EDIT_URL = `https://github.com/jbarriospd/Encuesta-Colombia-Dev/tree/main/examples/docs`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

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
