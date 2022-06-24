const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")
const AddAssetHtmlWebpackPlugin = require("add-asset-html-webpack-plugin")
const path = require("path")
const commonConfig = {
	entry: "./src/test.tsx",
	resolve:{
		extensions:[".js","jsx","ts","tsx"]
	},
	module: {
		rules: [{
			exclude: [/^$/, /\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
			type: 'asset/resource',
		},{
			test: /\.(js|jsx|ts|tsx)$/i,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader"
			}
		}]
	},
	output: {
		filename: '[name].[contenthash].js',
		chunkFilename: "[name].[contenthash].js",
		path:path.resolve(__dirname, "dist"),
		clean: true
	},
	optimization:{
		splitChunks:{     //webpack自动代码分割
			chunks:"all"
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.html"
		}),
		new AddAssetHtmlWebpackPlugin({
			filepath:path.resolve(__dirname,"../dll/vendors.dll.js"),
			publicPath: './',
		}),
		new webpack.DllReferencePlugin({
			manifest:path.resolve(__dirname,"../dll/vendors.manifest.json")
		})
	]
}

module.exports = commonConfig

