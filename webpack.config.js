var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	// entry:'./src/script/main.js',
	// entry:['./src/script/main.js','./src/script/a.js'],
	entry:{
		main:'./src/script/main.js',
		a:'./src/script/a.js',
		b:'./src/script/b.js',
		c:'./src/script/c.js'
	},
	output:{
		path:__dirname + '/dist',
		filename:'js/[name]-[chunkhash].js',
		publicPath:'http://cdn.com/'//上线地址
	},
	// 单页面应用
	// plugins:[
	// 	new htmlWebpackPlugin({
	// 		template:'index.html',
	// 		// filename:'index-[hash].html',
	// 		inject:'head',
	// 		title:'webpack is good',
	// 		date:new Date(),
	// 		minify:{
	// 		//上线压缩代码,在githup上npm插件html-webpack-plugin里有命令
	// 			removeComments:true,
	// 			//删除注释
	// 			collapseWhitespace:true
	// 			//删除空格
	// 		}
	// 	})
	// ]
	// 多页面应用
	plugins:[
		new htmlWebpackPlugin({
			filename:'a.html',
			inject:'body',
			title:'this is a.html',
			template:'index.html',
			chunks:['main','a']
			// excludeChunks:['b','c']
		}),
		new htmlWebpackPlugin({
			filename:'b.html',
			inject:'body',
			title:'this is b.html',
			template:'index.html',
			chunks:['main','b']
			// excludeChunks:['a','c']
		}),
		new htmlWebpackPlugin({
			filename:'c.html',
			inject:'body',
			title:'this is c.html',
			template:'index.html',
			chunks:['main','c']
			// excludeChunks:['b','a']
		})
	]
}