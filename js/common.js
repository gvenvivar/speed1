$(document).ready(function() {

	function heightDetect() {
		$("header").css("min-height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});


	$(".tab_item").not(":first").hide();
	$(".wrapper .tab").click(function() {
	$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".tab_item2").not(":first").hide();
	$(".wrapper-2 .tab").click(function() {
	$(".wrapper-2 .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item2").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".tab_item3").not(":first").hide();
	$(".wrapper-3 .tab").click(function() {
	$(".wrapper-3 .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item3").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".tab_item4").not(":first").hide();
	$(".wrapper-4 .tab").click(function() {
	$(".wrapper-4 .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item4").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	var owl = $('.owl-carousel');
	 $(".owl-carousel").owlCarousel({
		 	loop:true,
	    	margin:10,
	    	items:1,
	    	responsiveClass:true,
	    	center:true,
	    	nav: true,
	    	navText: '',
	    	responsive:{
	    		0:{
		            items:1,
		            nav:true
		        }
	    	}
    	}		
    );

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function(e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
	});
	
});