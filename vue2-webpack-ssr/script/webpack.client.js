
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const { resolve, ...base } = require("./webpack.base");

console.log(process.env.mode);

module.exports = merge(base, {
	mode: "development",
	entry: resolve("../src/client-entry.js"),
	output: {
		filename: "client.bundle.js",
		path: resolve("../dist")
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: process.env.mode === 'development' ? "index.html" : "index.client.html",
			template: resolve("../public/index.client.html")
		}),
	]
})
