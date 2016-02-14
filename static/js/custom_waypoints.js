$(document).ready(function() {
	

	var allAbout = $(".about-skills").children();

	// hide elements before animation shows
	$('#prof_pic').css("visibility","hidden");
	$('#mybio').css("visibility","hidden");
	allAbout.css("visibility","hidden");
	$(".slicker").css("visibility", "hidden");
  $("#piechart").css("visibility", "hidden");
	$("ul.social-buttons").css("visibility", "hidden");

	var about_waypoint = new Waypoint({
  		element: document.getElementById('prof_pic'),
 		handler: function() {
 			$('#prof_pic').css("visibility","visible");
			$('#mybio').css("visibility","visible");
    		$('#prof_pic').addClass('animated bounceInLeft');
    		$('#mybio').addClass('animated bounceInRight');
    		console.log("Profile waypoint activated");
  		},
  		offset: '75%'
	});

	var learning_waypoint = new Waypoint({
  		element: allAbout[0],
 		handler: function() {
 			$(this.element).css("visibility","visible");
    		$(this.element).addClass('animated slideInLeft');
  		},
  		offset: 'bottom-in-view'
	});

	var tech_waypoint = new Waypoint({
  		element: allAbout[1],
 		handler: function() {
 			$(this.element).css("visibility","visible");
    		$(this.element).addClass('animated slideInUp');
  		},
  		offset: 'bottom-in-view'
	});

	var engage_waypoint = new Waypoint({
  		element: allAbout[2],
 		handler: function() {
 			$(this.element).css("visibility","visible");
    		$(this.element).addClass('animated slideInRight');
  		},
  		offset: 'bottom-in-view'
	});

	var portfolio_waypoint = new Waypoint({
  		element: $(".slicker")[0],
 		handler: function() {
 			$(this.element).css("visibility","visible");
 			// Initialize Slick when visible
			$('.slicker').slick({
  				slidesToShow: 1,
  				slidesToScroll: 1,
  				autoplay: true,
 				autoplaySpeed: 6000,
			});
    		$(this.element).addClass('animated lightSpeedIn');
  		},
  		offset: '75%'
	});

  // var piechart_waypoint = new Waypoint({
  //     element: $("#piechart"),
  //   handler: function() {
  //     $(this.element).css("visibility","visible");
  //       $(this.element).addClass('animated zoomIn');
  //     },
  //     offset: 'bottom-in-view'
  // });

	var social_waypoint = new Waypoint({
  		element: $("ul.social-buttons")[0],
 		handler: function() {
 			$(this.element).css("visibility","visible");
    		$(this.element).addClass('animated zoomIn');
  		},
  		offset: 'bottom-in-view'
	});
	
});