
$(document).ready(function(e) {
	$('#slide-welcome').height($(window).height()+50);
	$(window).resize(function(){
		$('#slide-welcome').height($(window).height());
	});

	equalHeight($(".thumbnail")); 
});

function equalHeight(group) {    
  tallest = 0;    
  group.each(function() {       
    thisHeight = $(this).height();       
    if(thisHeight > tallest) {          
      tallest = thisHeight;       
    }    
  });    
  group.each(function() { $(this).height(tallest); });
} 

jQuery(document).ready(function ($) {
	//Cache some variables
	var links = $('.nav').find('li');
	slide = $('.slide');
	button = $('.button');
	mywindow = $(window);
	htmlbody = $('html,body');
	
	//Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
	//easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
	function goToByScroll(dataslide) {
		var offset_top = ( dataslide == 1 ) ? '0px' : $('.slide[data-slide="' + dataslide + '"]').offset().top;
		
		htmlbody.stop(false, false).animate({
			scrollTop: offset_top
		}, 1500);
	}
	
	//When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
	links.click(function (e) {
		e.preventDefault();
		dataslide = $(this).attr('data-slide');
		goToByScroll(dataslide);
		
		if($(".navbar-toggle").is(":visible")) {
			$(".nav-collapse").collapse('hide');			
		}
	});
});