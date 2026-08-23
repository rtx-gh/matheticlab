// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import macros from "katex-physics";
import { katexMacros } from "./katex-macros.ts";

// https://astro.build/config
export default defineConfig({
	// GitHub Pages
	site: 'https://matheticlab.com',
	base: '/matheticlab',

	integrations: [
		starlight({
			title: 'Mathetic Labฅ',

			customCss: [
				'./src/styles/custom.css',
			],

			components: {
				Head: './src/components/Head.astro',
				ThemeSelect: './src/components/ThemeSelect.astro',
				FieldAccordion: './src/components/FieldAccordion.astro',
			},

			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/withastro/starlight',
				},
			],

			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ autogenerate: { directory: 'reference' } },
					],
				},
			],
		}),
	],

	markdown: {
		processor: unified({
			remarkPlugins: [remarkMath],
			rehypePlugins: [
				[
        			rehypeKatex,
        			{
    				  throwOnError: true,
    				  globalGroup: true,
        			  macros: {
        			    ...katexMacros,
        			    ...macros,
        			  },
        			},
				]
      		],
		}),
	},
});