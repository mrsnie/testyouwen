$(function(){
		new Swiper('.center',{
			loop:true,
			pagination: '.swiper-pagination',
	        paginationClickable: true,
	        nextButton: '.swiper-button-next',
	        prevButton: '.swiper-button-prev',
	        spaceBetween: 20,
	        autoplay:3000
		});	
			
		 new WOW().init();	
			
			
			$(".n4").goTop({"animate":"slide","speed":"2000"});
			   $(".n4").css("display","none");
			   $(".n5").css("display","none");
			$(".n3").mouseover(function(){
				 $(".n4").css("display","block");
				 $(".n3").css("display","none");
			})
			$(".n4").mouseout(function(){
				 $(".n4").css("display","none");
				 $(".n3").css("display","block");
			});
		 $(".n1").mouseover(function(){
				 $(".n5").css({"display":"block","position":"absolute","top":"0","left":"-120px" });
			})
		$(".n1").mouseout(function(){
			$(".n5").css("display","none");
		})	
		//模态框	
	  $(".model").click(function(){
		      	$(window).resize(function(){
					var vW=$(window).width();
					var vH=$(window).height();
					var mW=$(".models").outerWidth();
					var mH=$(".models").outerHeight();
					$(".models").css({'left':(vW-mW)/2+"px",'top':(vH-mH)/2+"px"});	
				});
				showModel();
		});
		function showModel(){
			$(".models").fadeIn();
			$(".mask").fadeIn();
			var vW=$(window).width();
			var vH=$(window).height();
			var mW=$(".models").outerWidth();
			var mH=$(".models").outerHeight();
			$(".models").css({'left':(vW-mW)/2+"px",'top':(vH-mH)/2+"px"});	
		}		
		 $(".close").click(function(){
		 	$(".models").css("display","none");
		 	$(".mask").css("display","none");
		 });
		//	   年级关联
	    $(".pi1 a").eq(0).css({"color":"#ffffff","background-color":"red","border-radius":"10px"}) 
        $(".pi2 a").eq(0).css({"color":"#ffffff","background-color":"red","border-radius":"10px"})
		$(".pi1 a").eq(0).mouseover(function(){
			$(".pi2 a").eq(0).css({"color":"#ffffff","background-color":"red","border-radius":"10px"})
			$(".pi2 a").eq(1).css({"color":"","background-color":"","border-radius":""})
			$(".pi1 a").eq(0).css({"color":"#ffffff","background-color":"red","border-radius":"10px"})
		    $(".pi1 a").eq(1).css({"color":"","background-color":"","border-radius":""})
		    $(".pi2").css("display","block");
		    $(".pi3").css("display","none");
			$(".pi4").css("display","none");
		});
		$(".piter a").eq(1).mouseover(function(){
			$(".pi1 a").eq(1).css({"color":"#ffffff","background-color":"red","border-radius":"10px"})
			$(".piter a").eq(0).css({"color":"","background-color":"","border-radius":""}) 
			$(".pi2").css("display","none");
			$(".pi3").css("display","block");
			$(".pi3 a").eq(0).css({"color":"#ffffff","background-color":"red","border-radius":"10px"})
		    $(".pi4").css("display","none");
		});
		$(".piter a").eq(2).mouseover(function(){
			$(".pi1 a").eq(0).css({"color":"","background-color":"","border-radius":""}) 
			$(".pi1 a").eq(1).css({"color":"","background-color":"","border-radius":""}) 
			$(".pi2").css("display","none");
			$(".pi3").css("display","block");
			$(".pi3 a").eq(0).css({"color":"#ffffff","background-color":"red","border-radius":"10px"})
			 $(".pi4").css("display","none");
		});
		$(".piter a").eq(3).mouseover(function(){
			$(".piter a").eq(0).css({"color":"","background-color":"","border-radius":""}) 
			$(".co14").css("display","block");
			$(".co8").css("display","none");
			$(".pi2").css("display","none");
			$(".pi3").css("display","none");
			$(".pi4").css("display","block");
			$(".pi4 a").eq(0).css({"color":"#ffffff","background-color":"red","border-radius":"10px"})	
		});
		$(".pi2 a").eq(0).mousemove(function(){
			$(tihs).css({"color":"#fff","background-color":"red","border-radius":"10px"})
			$(".pi2 a").eq(1).css({"color":"","background-color":"","border-radius":""})
			$(".pi2 a").eq(2).css({"color":"","background-color":"","border-radius":""})
			$(".co1").css("display","block").siblings("ul").css("display","none");
		})
		$(".pi2 a").eq(1).mousemove(function(){
			$(this).css({"color":"#fff","background-color":"red","border-radius":"10px"})
			$(".pi2 a").eq(2).css({"color":"","background-color":"","border-radius":""})
			$(".pi2 a").eq(0).css({"color":"","background-color":"","border-radius":""})
			$(".ticon .co2").css("display","block").siblings(".ticon ul").css("display","none");
		})
		$(".pi2 a").eq(2).mousemove(function(){
			$(this).css({"color":"#fff","background-color":"red","border-radius":"10px"})
			$(".pi2 a").eq(0).css({"color":"","background-color":"","border-radius":""})
			$(".pi2 a").eq(1).css({"color":"","background-color":"","border-radius":""})
			$(".ticon .co3").css("display","block").siblings(".ticon ul").css("display","none");			
		})
		$(".pi3 a").eq(0).mouseover(function(){
			$(".ticon .co4").css("display","block").siblings(".ticon ul").css("display","none");
		   $(this).css({"color":"#fff","background-color":"red","border-radius":"10px"})
		   $(".pi3 a").eq(1).css({"color":"","background-color":"","border-radius":""})
		   $(".pi3 a").eq(2).css({"color":"","background-color":"","border-radius":""})
		   $(".pi3 a").eq(3).css({"color":"","background-color":"","border-radius":""})
		   $(".pi3 a").eq(4).css({"color":"","background-color":"","border-radius":""})
		})
		$(".pi3 a").eq(1).mouseover(function(){
			$(this).css({"color":"#fff","background-color":"red","border-radius":"10px"})
			$(".pi3 a").eq(0).css({"color":"","background-color":"","border-radius":""})
			$(".pi3 a").eq(2).css({"color":"","background-color":"","border-radius":""})
			$(".pi3 a").eq(3).css({"color":"","background-color":"","border-radius":""})
			$(".pi3 a").eq(4).css({"color":"","background-color":"","border-radius":""})
			$(".co5").css("display","block").siblings(".co").css("display","none");			
		})
		$(".pi3 a").eq(2).mouseover(function(){
			$(this).css({"color":"#fff","background-color":"red","border-radius":"10px"})
			$(".pi3 a").eq(0).css({"color":"","background-color":"","border-radius":""})
			$(".pi3 a").eq(1).css({"color":"","background-color":"","border-radius":""})
			$(".pi3 a").eq(3).css({"color":"","background-color":"","border-radius":""})
			$(".pi3 a").eq(4).css({"color":"","background-color":"","border-radius":""})			
			$(".ticon .co6").css("display","block").siblings(".ticon ul").css("display","none");		
		})
		$(".pi3 a").eq(3).mouseover(function(){
			$(this).css({"color":"#fff","background-color":"red","border-radius":"10px"})
			$(".pi3 a").eq(0).css({"color":"","background-color":"","border-radius":""})
			$(".pi3 a").eq(2).css({"color":"","background-color":"","border-radius":""})
			$(".pi3 a").eq(1).css({"color":"","background-color":"","border-radius":""})
			$(".pi3 a").eq(4).css({"color":"","background-color":"","border-radius":""})			
			$(".ticon .co7").css("display","block").siblings(".ticon ul").css("display","none");		
		})
		$(".pi3 a").eq(4).mouseover(function(){
			$(this).css({"color":"#fff","background-color":"red","border-radius":"10px"})
			$(".pi3 a").eq(0).css({"color":"","background-color":"","border-radius":""})
			$(".pi3 a").eq(1).css({"color":"","background-color":"","border-radius":""})
			$(".pi3 a").eq(2).css({"color":"","background-color":"","border-radius":""})
			$(".pi3 a").eq(3).css({"color":"","background-color":"","border-radius":""})
			$(".ticon .co8").css("display","block").siblings(".ticon ul").css("display","none");		
		});
		$(".pi4 a").eq(0).mouseover(function(){
			$(this).css({"color":"#fff","background-color":"red","border-radius":"10px"})
			$(".pi4 a").eq(1).css({"color":"","background-color":"","border-radius":""})
			$(".pi4 a").eq(2).css({"color":"","background-color":"","border-radius":""})
			$(".pi4 a").eq(3).css({"color":"","background-color":"","border-radius":""})			
			$(".ticon .co14").css("display","block").siblings(".ticon ul").css("display","none");			
		})
		$(".pi4 a").eq(1).mouseover(function(){
			$(".pi4 a").css({"color":"#fff","background-color":"red","border-radius":"10px"})
			$(".pi4 a").eq(0).css({"color":"","background-color":"","border-radius":""})
			$(".pi4 a").eq(2).css({"color":"","background-color":"","border-radius":""})
			$(".pi4 a").eq(3).css({"color":"","background-color":"","border-radius":""})
			$(".ticon .co15").css("display","block").siblings(".ticon ul").css("display","none");	
		})
		$(".pi4 a").eq(2).mouseover(function(){
			$(".pi4 a").eq(2).css({"color":"#fff","background-color":"red","border-radius":"10px"})
			$(".pi4 a").eq(0).css({"color":"","background-color":"","border-radius":""})
			$(".pi4 a").eq(1).css({"color":"","background-color":"","border-radius":""})
			$(".pi4 a").eq(3).css({"color":"","background-color":"","border-radius":""})
			$(".ticon .co16").css("display","block").siblings(".ticon ul").css("display","none");	
		})
		$(".pi4 a").eq(3).mouseover(function(){
			$(".pi4 a").eq(3).css({"color":"#fff","background-color":"red","border-radius":"10px"})
			$(".pi4 a").eq(0).css({"color":"","background-color":"","border-radius":""})
			$(".pi4 a").eq(1).css({"color":"","background-color":"","border-radius":""})
			$(".pi4 a").eq(2).css({"color":"","background-color":"","border-radius":""})
			$(".ticon .co17").css("display","block").siblings(".ticon ul").css("display","none");	
		}); 
		
});



