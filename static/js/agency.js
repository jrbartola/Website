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

	// Hide the error message for the message system
	$('#success').hide();

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

    $("g[data-order]").on("click", function() {
    	$("#piediv").children().hide().removeClass("animate fadeIn");
    	var lang = $(this).attr('data-order');
    	switch (lang) {
    		case '0': $("#web").fadeIn(1000); break;
    		case '1': $("#python").fadeIn(1000); break;
    		case '2': $("#java").fadeIn(1000); break;
    		case '3': $("#swift").fadeIn(1000); break;
    		case '4': $("#scala").fadeIn(1000); break;
    		default: console.log('Something went wrong');
    	}
    });

    $("#contactForm").submit(function(event) {
    	event.preventDefault();
    	// swal({title: "Whoops!",
    	//     text: "Our messaging system is currently under maintenance." +
    	//     " Please try again later.", 
    	//     type: "error", 
    	//     confirmButtonText: "Got it!" });
    	
    	/* Uncomment for full database-integrated version of site */

    	var name = $("input#name").val();
        var email = $("input#email").val();
        var message = $("textarea#message").val();
        if (name != "" && email != "" && 
        	message != "") {

        	$.ajax({
                url: "/msg",
                type: "POST",
                data: {
                    name: name,
                    email: email,
                    message: message
                },
                cache: false,
                success: function(name) {
             
            		swal({title: "Thank you!",
    	    			text: "I have recieved your message and " +
    	    			"will get back to you shortly.", 
    	    			type: "success", 
    	    			confirmButtonText: "Got it" });
                    //clear all fields
                    $('#contactForm').trigger("reset");
                    // Remove alert after 8 seconds
                    $('#contactForm').find('button').prop("disabled",true);
                    setTimeout(function() {
                    	$('#contactForm').find('button').prop("disabled",false);
                    }, 60000);
                },
                error: function(name) {
                    // Fail message
                    swal({title: "Whoops!",
    	    			text: "Something went wrong here," +
    	    			" please try again later.", 
    	    			type: "error", 
    	    			confirmButtonText: "Okay" });
                    $("#success").html("");
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
            });
        } else {
        	// $('#success').html("<div class='alert alert-danger'>");
         //    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
         //                .append("</button>");
         //    $('#success > .alert-danger').append("<strong>Please fill out all of the fields to send a message!");
         //    $('#success > .alert-danger').append('</div>');
            $('#success').fadeIn(1000);
            setTimeout(function() { 
            	$('#success').hide();
            }, 6000);
        }
    });

});


