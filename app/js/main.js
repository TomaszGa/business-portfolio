$(document).ready(function(){

	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        target.focus(); // Setting focus
	        if (target.is(":focus")){ // Checking if the target was focused
	          return false;
	        } else {
	          target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
	          target.focus(); // Setting focus
	        };
	        return false;
	      }
	    }
	  });
	});

	$('.navbar-nav>li>a').on('click', function(){
    	$('.navbar-collapse').collapse('hide');
	});
});