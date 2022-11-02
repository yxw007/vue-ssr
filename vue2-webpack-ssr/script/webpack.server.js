
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const { resolve, ...base } = require("./webpack.base");

module.exports = merge(base, {
	mode: "development",
	target: "node",
	entry: {
		server: resolve("../src/server-entry.js")
	},
	output: {
		libraryTarget: "commonjs2"
	},
	plugins: [
		new VueSSRServerPlugin(),
		new HtmlWebpackPlugin({
			filename: "index.ssr.html",
			template: resolve("../public/index.ssr.html"),
			excludeChunks: ['server'],
			minify: false,
			client: '/client.bundle.js'
		}),
	]
})
