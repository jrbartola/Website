$(document).ready(function() {
	

	var allAbout = $(".about-skills").children();

	// Hide elements before animation shows
	$('.about-pic').css("visibility","hidden");
	$('#mybio').css("visibility","hidden");
	allAbout.css("visibility","hidden");
  // Activate slicker
  $('.slicker').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        autoplaySpeed: 6000,
      });
	//$(".slicker").css("visibility", "hidden");

	var about_waypoint = new Waypoint({
  	element: document.getElementById('prof_pic'),
 		handler: function() {
 			$('.about-pic').css("visibility","visible");
			$('#mybio').css("visibility","visible");
    	$('.about-pic').addClass('animated bounceInLeft');
    	$('#mybio').addClass('animated bounceInRight');

      this.destroy();
  	},
  	offset: '75%'
	});

	var learning_waypoint = new Waypoint({
  	element: allAbout[0],
 		handler: function() {
 			$(this.element).css("visibility","visible");
    	$(this.element).addClass('animated slideInLeft');

      this.destroy();
  	},
  	offset: 'bottom-in-view'
	});

	var tech_waypoint = new Waypoint({
  	element: allAbout[1],
 		handler: function() {
 			$(this.element).css("visibility","visible");
    	$(this.element).addClass('animated slideInUp');

      this.destroy();
  	},
  	offset: 'bottom-in-view'
	});

	var engage_waypoint = new Waypoint({
  	element: allAbout[2],
 		handler: function() {
 			$(this.element).css("visibility","visible");
    	$(this.element).addClass('animated slideInRight');
      this.destroy();
  	},
  	offset: 'bottom-in-view'
	});

	// var portfolio_waypoint = new Waypoint({
 //  	element: $(".slicker")[0],
 // 		handler: function() {
 // 			$(this.element).css("visibility","visible");
 // 			// Initialize Slick when visible
			// $('.slicker').slick({
  	// 			slidesToShow: 1,
  	// 			slidesToScroll: 1,
  	// 			autoplay: true,
 		// 		autoplaySpeed: 6000,
			// });
 //    	$(this.element).addClass('animated lightSpeedIn');

 //      this.destroy();
 //  	},
 //  	offset: '75%'
	// }); 

  var piechart_waypoint = new Waypoint({
    element: $('.slicker')[0],
    handler: function() {
      // Draw the pie chart when scrolled into view
      drawPie();
      console.log("drew the pie");
      
      this.destroy();
    },
    //context: document.getElementById('page-top'),
    offset: '-20%'
  });
	
});