import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import VitePluginSvgSpritemap from "@spiriit/vite-plugin-svg-spritemap";

export default defineConfig({
	plugins: [sveltekit(), VitePluginSvgSpritemap('./src/lib/Icon/icons/*.svg')]
});
