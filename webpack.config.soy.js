const webpack = require('webpack');

module.exports = {
	entry: './src/soy/TodoApp.js',
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules)/,
			use: {
				loader: 'babel-loader',
				options: {
					compact: false,
					presets: ['babel-preset-es2015']
				}
			}
		}, {
			test: /\.scss$/,
			use: [{
				loader: "style-loader"
			}, {
				loader: "css-loader"
			}, {
				loader: "sass-loader"
			}]
		}]
	},
	output: {
		library: 'metal',
		libraryTarget: 'this',
		filename: './build/globals/todo-app.js'
	},
	plugins: [
		new webpack.optimize.ModuleConcatenationPlugin()
	]
};
