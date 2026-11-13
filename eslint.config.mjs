import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import serverConfig from 'eslint-config-nodebb';
import publicConfig from 'eslint-config-nodebb/public';

export default tseslint.config(
	{
		ignores: ['build/', 'node_modules/'],
	},

	// .js
	...publicConfig,
	...serverConfig,

	// .ts
	{
		files: ['**/*.ts'],
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: { ...globals.node, nodebb: 'readonly' },
		},
		rules: {
			// TypeScript types are not runtime globals; the base rule cannot see them.
			'no-undef': 'off',
		},
	},
);
