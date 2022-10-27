
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

const resolve = (p) => path.resolve(__dirname, p);

module.exports = {
	mode: "development",
	entry: resolve("../src/app.js"),
	output: {
		filename: "index.js",
		path: resolve("../dist")
	},
	resolve: {
		extensions: [".js", ".json", ".vue"]
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: { loader: 'vue-loader' }
			},
			{
				test: /\*.js/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ["@bable/preset-env"]
					}
				}
			},
			{
				test: /\.css/,
				use: [
					"vue-style-loader",
					{
						loader: "css-loader",
						options: {
							esModule: false
						}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: resolve("../public/index.html")
		}),
		new VueLoaderPlugin(),
	]
}
