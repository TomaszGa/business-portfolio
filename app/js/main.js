/*$(document).ready(function(){
	pageAnimations.checkWidth();	
	$(window).resize(function(){
		pageAnimations.checkWidth();
	});
});

const pageAnimations = {
	wWidth: $(window).width(),

	checkWidth: function(){
		this.wWidth = $(window).width();
		if (this.wWidth < 975){
			this.navbarAlternate();
		} else {
			this.navbarDefault();
		}
	},
	navbarDefault: function(){
		$(".navbar").css({
			"background-color" : "transparent"
		});
		$(".navbar-brand").css({
			"font-size" : "1.2rem"
		});
		$(".navbar a").css({
			"color" : "white"
		});	
		$(".navbar-inverse .navbar-nav .nav-link").css({
			"color" : "white"
		});			
	},
	navbarAlternate: function(){
		$(".navbar").css({
			"background-color" : "#fff"
		});
		$(".navbar-brand").css({
			"font-size" : "1rem"
		});		
		$(".navbar a").css({
			"color" : "#444"
		});
		$(".navbar-inverse .navbar-nav .nav-link").css({
			"color" : "#444"
		});		
	}
}*/