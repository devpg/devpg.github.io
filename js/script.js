jQuery(document).ready(function ($) {
	resizePage();
	//adjustThumbnailHeight(); 
	skrollr.init();

	// Reload on resize
	$(window).bind('resize', function () {
		resizePage();
	});

	//Cache some variables
	var links = $('.nav').find('li');
	var htmlbody = $('html,body');
	var navHeight = $('.navbar').height();
	
	//When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
	links.click(function (e) {
		dataSlide = $(this).attr('data-slide');
		targetSlide = $('#slide-' + dataSlide).offset();
		
		//Scroll to data slide of this exists otherwise execute default
		if(typeof targetSlide !== "undefined") {
			e.preventDefault();
					scrollTo(targetSlide.top);
		
			if($(".navbar-toggle").is(":visible")) {
				$(".nav-collapse").collapse('hide');			
			}
		}
	});

	//Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
	//easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
	function scrollTo(targetPosition) {
		var scrollToPos = targetPosition - navHeight;

		htmlbody.stop(false, false).animate({
			scrollTop: scrollToPos
		}, 1500);
	}
});

function resizePage() {
    $('#background').css({ 'width': $(window).width() });
    $('#background').css({ 'height': $(window).height() });
    $('#slide-welcome').css({ 'height': $(window).height() });
}