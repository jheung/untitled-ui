// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
	rootDir: "../",

	// Automatically clear mock calls and instances between every test
	clearMocks: true,

	// The directory where Jest should output its coverage files
	coverageDirectory: "coverage",

	// A map from regular expressions to module names that allow to stub out resources with a single module
	moduleNameMapper: {
		"\\.(scss|less)$": "identity-obj-proxy"
	},

	// The test environment that will be used for testing
	testEnvironment: "jsdom"
};
