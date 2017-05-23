(function($,window){
     $.fn.extend({
     	"goTop":function(options){
     		
     		var DEFAULT_VAL={"animate":"normal","speed":500}
     		var setting=$.extend(DEFAULT_VAL, options);
     		setting={
     			 "animate":"normal",
     			 "speed":500
     		}
     		this.each(function(index,item){
     		    $(this).on("click",function(){
     		    	$("body,html").animate({"scrollTop":0},setting.speed);
     		    });
     		});
     	}
     });
   
})(jQuery,window);
