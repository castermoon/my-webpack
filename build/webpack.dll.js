//webpack.dll.js
const path = require("path")
const webpack = require("webpack")
module.exports = {
	mode:"production",
	entry: {
		//vendors属性来指定哪些文件是只进行一次打包的第三方模块
		vendors: ["react","react-dom","react-router-dom"]
	},
	output: {
		filename:"[name].dll.js",
		path: path.resolve(__dirname,"../dll"),
		library: "[name]"
	},
	plugins: [
		new webpack.DllPlugin({
			name:"[name]",
			path:path.resolve(__dirname,"../dll/[name].manifest.json")
		})
	]
}
