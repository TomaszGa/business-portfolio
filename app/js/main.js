$(document).ready(function(){
	setTimeout(function(){
      	$('#global-nav').addClass('navbar-transition');
      	$('.navbar-logo').addClass('navbar-logo-transition');		      			
	}, 500);
	var scrollTop = 0;
	$(window).scroll(function(){
    scrollTop = $(window).scrollTop();
    $('.counter').html(scrollTop);
    if (scrollTop >= 100) {
      $('#global-nav').addClass('scrolled-nav');
	} else if (scrollTop < 100) {
    $('#global-nav').removeClass('scrolled-nav');
	} 

	}); 
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
	$('.navbar-brand').on('click', function(){
    	$('.navbar-collapse').collapse('hide');
	});	
	setTimeout(function(){
		$('#myModal').modal();
	}, 5000);



});

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    console.log(scroll);
    $('.decoration-1').css('top', 250);
});