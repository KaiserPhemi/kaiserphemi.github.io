module.exports = {
	ignores: ['.gitignore', 'node_modules', '/dist'],
	languageOptions: {
		parserOptions: {
			ecmaVersion: 2018,
			sourceType: 'module',
			ecmaFeatures: {
				jsx: true,
			},
		},
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		'no-unused-vars': 'warn',
		semi: ['error', 'always'],
		quotes: ['error', 'single'],
	},
};
