const parentConfig = require('../.eslintrc.js');

module.exports = {
	...parentConfig,

	extends: [
		'plugin:vue/essential',
		'@vue/typescript/recommended',
		'@vue/prettier',
		'@vue/prettier/@typescript-eslint',
	],
	rules: {
		...parentConfig.rules,
		'prettier/prettier': ['error', { singleQuote: true }],
		'vue/valid-v-slot': 0,
	},
};
