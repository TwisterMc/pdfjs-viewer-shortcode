const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const debug = process.env.NODE_ENV !== 'production';

module.exports = {
	context: __dirname,
	devtool: debug ? 'inline-sourcemap' : null,
	mode: debug ? 'development' : 'production',
	entry: './blocks/src/blocks.js',
	output: {
		path: __dirname + '/blocks/dist/',
		filename: 'blocks.build.js',
	},
	plugins: [
		new MiniCssExtractPlugin( {
			filename: 'style.css',
		} ),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
					},
				],
			},
			{
				test: /editor\.scss$/,
				exclude: /node_modules/,
				// When loading editor styles we can just load them into the DOM
				// directly with style-loader to avoid another bundle
				use: [ 'style-loader', 'css-loader', 'sass-loader' ],
			},
			{
				test: /style\.scss$/,
				exclude: /node_modules/,
				use: [
					MiniCssExtractPlugin.loader, // 3) Extracts the CSS and bundles it
					'css-loader', // 2) Truncates CSS into JS files
					'sass-loader', // 1) Compiles SCSS -> CSS using node-sass
				],
			},
		],
	},
};
