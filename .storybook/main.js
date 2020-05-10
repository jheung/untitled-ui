const path = require("path");
const customWebpack = require("../tools/webpack.config.js");

module.exports = {
	webpackFinal: async config => {
		// Add ESLint Loader
		config.module.rules.unshift(customWebpack.module.rules.find(rule => rule.enforce === "pre"));

		// Add SCSS / CSS Modules / AutoPrefixer Loaders
		config.module.rules.push(
			customWebpack.module.rules.find(rule => String(rule.test) === "/\\.(s?)css$/")
		);

		return config;
	},
	stories: ["../src/**/*.stories.(js|mdx)"],
	addons: ["@storybook/addon-docs", "@storybook/addon-actions"]
};
