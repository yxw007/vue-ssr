
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');

const { merge } = require("webpack-merge");
const { resolve, ...base } = require("./webpack.base");

console.log(process.env.mode);

module.exports = merge(base, {
	mode: "development",
	entry: {
		client: resolve("../src/client-entry.js")
	},
	output: {
		// clean: true,
	},
	plugins: [
		new VueSSRClientPlugin(),
		new HtmlWebpackPlugin({
			filename: process.env.mode === 'development' ? "index.html" : "index.client.html",
			template: resolve("../public/index.client.html")
		}),
	]
})
