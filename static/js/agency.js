/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// Initialize Parse
//Parse.initialize("Si6Nq1yFqTGBXz9ZkwvKTPpSuc03yjloNGnQUT7A", "lqhtowSejqGuDehuBI1pciDCKeS3HSkYwvndkcyw");
//$(".animsition").animsition();
$(document).ready(function() {
	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
	    $('a.page-scroll').bind('click', function(event) {
	        var $anchor = $(this);
	        $('html, body').stop().animate({
	            scrollTop: $($anchor.attr('href')).offset().top
	        }, 1500, 'easeInOutExpo');
	        event.preventDefault();
	    });
	});

	// Highlight the top nav as scrolling occurs
	$('body').scrollspy({
	    target: '.navbar-fixed-top'
	})

	// Closes the Responsive Menu on Menu Item Click
	$('.navbar-collapse ul li a').click(function() {
	    $('.navbar-toggle:visible').click();
	});

	$(".about-skills").children().on("click", function() {
		// Get the ID of the clicked div and convert it to an int
		var numId = $(this).attr("id").substring(5) * 1;
		var swapper;
		// Generate random number from 1-3, until numId doesn't match
		do {
			swapper = Math.floor((Math.random() * 3) + 1);
		} while (numId == swapper);

        $(this).swap({
            target: "skill" + swapper, // Mandatory. The ID of the element we want to swap with
            opacity: "0.95", // Optional. If set will give the swapping elements a translucent effect while in motion
            speed: 1000, // Optional. The time taken in milliseconds for the animation to occur
            callback: function() { // Optional. Callback function once the swap is complete
                //alert("Swap Complete");
            }
        });
    });

});


