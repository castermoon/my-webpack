const webpack = require("webpack")
const { merge } = require("webpack-merge")
const path = require("path")
const commonConfig = require("./webpack.common.js")
const devConfig = {
	mode: "development",
	devtool: "eval-cheap-module-source-map",
	optimization:{          //是否开启tree shaking
		usedExports:true
	},
	module: {
		rules: [{
			test: /\.css$/i,
			use: ["style-loader","css-loader"]
		},{
			test: /\.styl$/i,
			use: [
				"style-loader",
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
		}]
	},
	devServer: {
		static:{
			directory:path.join(__dirname,"dist")
		},
		open:true,
		historyApiFallback:true,
		port:8080,
		hot:true,
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
}

module.exports = merge(devConfig,commonConfig)

