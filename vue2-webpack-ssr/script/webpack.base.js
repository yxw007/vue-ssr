
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

const resolve = (p) => path.resolve(__dirname, p);

let config = exports = module.exports;
const ASSET_PATH = process.env.ASSET_PATH || '/';

config = {
	mode: "development",
	entry: resolve("../src/client.js"),
	output: {
		filename: '[name].bundle.js',
		path: resolve('../dist'),
		//! 注意：需要添加publicPath, 否则会导致服务端渲染出来的html中preload预加载的client.bundle.js 会添加auto前缀，导致加载路径错误导致报错
		publicPath: ASSET_PATH
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
		new VueLoaderPlugin(),
	]
}

config.resolve = resolve;
module.exports = config;
