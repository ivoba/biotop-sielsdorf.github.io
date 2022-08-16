import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: `https://ivoba.github.io`,
	base: `/biotop-sielsdorf`,
	legacy: {
		astroFlavoredMarkdown: true
	},
	vite: {
		server: {
			watch: {
				ignored: ['/.idea/workspace.xml']
			}
		}
	}
});
