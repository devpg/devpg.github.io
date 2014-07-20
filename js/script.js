jQuery(document).ready(function ($) {
	resizePage();
	adjustThumbnailHeight(); 
	skrollr.init();

	// Reload on resize
	$(window).bind('resize', function () {
		resizePage();
	});

	//Cache some variables
	var links = $('.nav').find('li');
	htmlbody = $('html,body');
	
	//When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
	links.click(function (e) {
		e.preventDefault();
		dataslide = $(this).attr('data-slide');
		goToByScroll(dataslide);
		
		if($(".navbar-toggle").is(":visible")) {
			$(".nav-collapse").collapse('hide');			
		}
	});

	//Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
	//easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
	function goToByScroll(dataslide) {
		var navHeight = $('.navbar').height();
		var targetTopPos = $('#slide-' + dataslide).offset().top;
		var scrollToPos = targetTopPos - navHeight;

		htmlbody.stop(false, false).animate({
			scrollTop: scrollToPos
		}, 1500);
	}
});

function adjustThumbnailHeight() {    
	group = $(".thumbnail");
	tallest = 0;
	group.each(function() {       
		thisHeight = $(this).height();       
		if(thisHeight > tallest) {          
			tallest = thisHeight;       
		}    
	});    
	group.each(function() { $(this).height(tallest); });
}

function resizePage() {
    $('#background').css({ 'width': $(window).width() });
    $('#background').css({ 'height': $(window).height() });
    $('#slide-welcome').css({ 'height': $(window).height() });
}
