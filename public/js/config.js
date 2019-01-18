require.config({
	baseUrl:"/",
	paths:{//不写后缀名,对象属性这里可以不加引号
		"jquery":"libs/jquery/jquery-1.12.4.min",
		"bootstrap":"libs/bootstrap/js/bootstrap.min",
		"swiper":"libs/swiper/js/swiper.min"
	},
	shim:{//bootstrap垫片 依赖于jquery
		"bootstrap":{
			deps:["jquery"]
		}
	}
});