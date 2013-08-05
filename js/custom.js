$(document).ready(function () {
	$(this).click(function (b) {
		var c = $(b.target);
		if (!c.is("#sizenav a,#sizenav span.icon,#sizenav span.label")) {
			$("#sizenav li ul").hide();
		}
	});
	$("#sizenav > li > a").click(function (b) {
		b.preventDefault();
		if ($(this).siblings("ul:hidden").size() > 0) {
			$("#sizenav li ul").hide();
			$(this).siblings("ul:hidden").show(100);
		} else {
			if ($(this).siblings("ul:visible").size() > 0) {
				$("#sizenav li ul").hide(100);
			}
		}
	});
	$("#sizenav > li ul a").click(function (g) {
		g.preventDefault();
		var c = $(this).attr("href").replace("#", "");
		var w = parseInt(c.split("x")[0],'10');
		var h = parseInt(c.split("x")[1],'10');
		$("#frame").animate({
			width: w,
			height: h
		}, 500);
		$("#viewport").animate({
			width: w,
			height: h+30
		}, 500,show);
				function show(){
			if(w<500 && w>300){
				$('.enter').hide();
			}
			else if (w<300)
			{
				$('.enter').hide();
				$('#webs').hide();
			}
			else{
				$('#webs').show();
				$('.enter').show();
			}
		}
		$("#sizenav li").removeClass("selected");
		$(this).parent().addClass("selected");
		$(this).parent().parent().parent().addClass("selected");
		$("#sizenav ul").hide();
	});
	$(".other-sizes > li a").click(function (g) {
		g.preventDefault();
		var c = $(this).attr("href").replace("#", "");
		var w = parseInt(c.split("x")[0],'10');
		var h = parseInt(c.split("x")[1],'10');
		$("#frame").animate({
			width: w,
			height: h
		}, 500);
		$("#viewport").animate({
			width: w,
			height: h+30
		}, 500,show);
		function show(){
			if(w<600 && w>300){
				$('.enter').hide();
			}
			else if (w<300)
			{
				$('.enter').hide();
				$('#webs').hide();
			}
			else{
				$('#webs').show();
				$('.enter').show();
			}
		}
		$("#sizenav li").removeClass("selected");
		$(this).parent().addClass("selected");
		$(this).parent().parent().parent().addClass("selected");
		$("#sizenav ul").hide();
	});
	// $('#sizenav').append('<div class="close">close</div>');

  	$('#webs').change(function() {
   			 $('#frame').attr('src', $('#webs').attr('value'));
                 return false;		
            });
  	$('#sub').click(function(n){
  		n.preventDefault();
  		var e= $('#yourvalue').val();
  			 $('#frame').attr('src', e);
                 return false;
  	});
});


