const MiniCssExtractPlugin = require( "mini-css-extract-plugin" );
let debug                  = process.env.NODE_ENV !== 'production';

module.exports = {
	context: __dirname,
	devtool: debug ? 'inline-sourcemap' : null,
	mode: debug ? 'development' : 'production',
	entry: './blocks/src/blocks.js',
	output: {
		path: __dirname + '/blocks/dist/',
		filename: 'blocks.build.js',
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				style: {
					name: 'style',
					test: /style\.s?css$/,
					chunks: 'all',
					enforce: true,
				},
				editor: {
					name: 'editor',
					test: /editor\.s?css$/,
					chunks: 'all',
					enforce: true,
				},
			},
		},
	},
	plugins: [
		new MiniCssExtractPlugin( {
			filename: '[name].css',
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
				test: /\.s?css$/,
				exclude: /node_modules/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
				],
			},
		],
	},
};
