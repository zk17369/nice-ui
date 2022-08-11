module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-recommended',
		'plugin:@typescript-eslint/recommended',
		'@vue/typescript/recommended'
	],
	parserOptions: {
		ecmaVersion: 'latest',
		parser: '@typescript-eslint/parser',
		sourceType: 'module'
	},
	plugins: [ 'vue', '@typescript-eslint', 'unplugin-vue-define-options' ],
	rules: {
		'vue/html-self-closing': 'off',
		'vue/max-attributes-per-line': 'off',
		'vue/singleline-html-element-content-newline': 'off',
		'vue/multi-work-component-names': 'off',
    "@typescript-eslint/no-inferrable-types": "off", // 关闭类型推断
    '@typescript-eslint/no-explicit-any': 'off',

	},
  overrides: [
    {
      files: ['**/*.vue'],
      rules: {
        'no-undef': 'off',
        'vue/multi-word-component-names': 'off',
      },
    },
  ],
	globals: {
		defineOptions: 'readonly'
	}

};
