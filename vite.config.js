import { sveltekit } from '@sveltejs/kit/vite';
import inlangPlugin from '@inlang/sdk-js/adapter-sveltekit'
import { defineConfig } from 'vite';
import { purgeCss } from "vite-plugin-svelte-purgecss";

export default defineConfig({
	plugins: [inlangPlugin(), sveltekit(), purgeCss()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "src/variables.scss" as *;'
			}
		}
	}
});
