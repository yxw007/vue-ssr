
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const { resolve, ...base } = require("./webpack.base");

module.exports = merge(base, {
	mode: "development",
	entry: resolve("../src/client-entry.js"),
	output: {
		filename: "client.bundle.js",
		path: resolve("../dist")
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.client.html",
			template: resolve("../public/index.client.html")
		}),
	]
})
