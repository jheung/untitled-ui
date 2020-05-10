const { resolve } = require("path");
const nodeExternals = require("webpack-node-externals");

const autoprefixer = require("autoprefixer");

module.exports = {
	mode: "production",
	entry: "./src/index.js",
	output: {
		filename: "index.js",
		path: resolve(__dirname, "../dist"),
		library: "untitledUI",
		libraryTarget: "umd",
		umdNamedDefine: true
	},
	devtool: "source-map",
	externals: [nodeExternals()],
	module: {
		rules: [
			{
				enforce: "pre",
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: "eslint-loader",
				options: {
					emitWarning: true
				}
			},
			// Process JS with Babel.
			{
				test: /\.(js|jsx)$/,
				include: resolve(__dirname, "../src"),
				exclude: /node_modules/,
				loader: require.resolve("babel-loader"),
				options: {
					cacheDirectory: true
				}
			},
			{
				test: /\.(s?)css$/,
				exclude: /node_modules/,
				use: [
					"style-loader",
					{
						loader: require.resolve("css-loader"),
						options: {
							modules: true,
							sourceMap: true,
							importLoaders: 2
						}
					},
					{
						loader: require.resolve("postcss-loader"),
						options: {
							sourceMap: true,
							ident: "postcss",
							plugins: () => [
								require("postcss-flexbugs-fixes"),
								autoprefixer({
									flexbox: "no-2009"
								})
							]
						}
					},
					require.resolve("sass-loader")
				]
			}
		]
	},
	resolve: {
		extensions: [".js", ".jsx"],
		modules: ["./node_modules"]
	},
	resolveLoader: {
		modules: ["./node_modules"]
	}
};
