
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

const resolve = (p) => path.resolve(__dirname, p);

let config = exports = module.exports;

config = {
	mode: "development",
	entry: resolve("../src/client.js"),
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
		new VueLoaderPlugin(),
	]
}

config.resolve = resolve;
module.exports = config;
