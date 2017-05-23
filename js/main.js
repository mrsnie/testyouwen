require.config({
	paths : {
		"jquery":["js/jquery-3.0.0.min"],
		"style":["js/style"],
		"swp":["js/swiper.min"],
		"gotop":["js/goTop"],
		"wow":["js/swiper.min"]
	}
});		
require(["jquery","style","swp","gotop","wow"],function($,a,b,c,d){
	  		alert("加载完毕");
	  	},function(){
	  		alert("页面加载失败")
   });
	



	  	