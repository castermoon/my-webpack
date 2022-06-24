const webpack = require("webpack")
const { merge } = require("webpack-merge")
const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const commonConfig = require("./webpack.common.js")
const prodConfig = {
	entry: "./src/index.js",
	mode: "production",
	devtool: "cheap-module-source-map",
	module: {
		rules: [{
			test: /\.css$/i,
			use: [
				MiniCssExtractPlugin.loader,
				{
					loader: "css-loader",
					options: {
						importLoaders:1,
						modules:{
							localIdentName:"[name]__[local]"
						}
					}
				},
				"postcss-loader",
			]
		},{
			test: /\.styl$/i,
			use: [
				MiniCssExtractPlugin.loader,
				{
					loader: "css-loader",
					options: {
						importLoaders:2,
						modules:{
							localIdentName:"[name]__[local]"
						}
					}
				},
				"postcss-loader",
				"stylus-loader"
			]
		},{
			test: /\.js$/i,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader"
			}
		},{
			test: /\.(ts|tsx)$/i,
			use: {
				loader: "ts-loader"
			}
		}]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename:'[name].chunk.css'
		})
	]
}

module.exports = merge(prodConfig,commonConfig)

