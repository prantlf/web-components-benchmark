import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
	input: 'src/main.js',
	output: {
		sourcemap: false,
		format: 'iife',
		name: 'pascalTriangle',
		file: 'dist/bundle.js'
	},
	plugins: [
		svelte({
			// enable run-time checks when not in production
			dev: false,
			customElement: true
		}),

		resolve({
			browser: true
		}),
		commonjs()
	]
};