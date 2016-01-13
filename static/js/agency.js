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

    $("#contactForm").submit(function(event) {
    	event.preventDefault();
    	swal({title: "Whoops!",
    	    text: "Our messaging system is currently under maintenance." +
    	    " Please try again later.", 
    	    type: "error", 
    	    confirmButtonText: "Got it!" });
    	// $('#success').html("<div class='alert alert-danger'>");
     //    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
     //                    .append("</button>");
     //    $('#success > .alert-danger').append("<strong>Our messaging system is currently not working. Please try again later.");
     //    $('#success > .alert-danger').append('</div>');
    	/* Uncomment for full database-integrated version of site */

    	// var name = $("input#name").val();
     //    var email = $("input#email").val();
     //    var phone = $("input#phone").val();
     //    var message = $("textarea#message").val();
     //    if (name != "" && email != "" && 
     //    	phone != "" && message != "") {

     //    	$.ajax({
     //            url: "/msg",
     //            type: "POST",
     //            data: {
     //                name: name,
     //                phone: phone,
     //                email: email,
     //                message: message
     //            },
     //            cache: false,
     //            success: function(name) {
     //                // Success message
     //                $('#success').html("<div class='alert alert-success'>");
     //        		$('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
     //                    .append("</button>");
     //        		$('#success > .alert-success').append("<strong>Thank you, " + name + "! I have recieved you message and will read it shortly.");
     //        		$('#success > .alert-success').append('</div>');
     //                //clear all fields
     //                $('#contactForm').trigger("reset");
     //                // Remove alert after 8 seconds
     //                setTimeout(function() {
     //                	$("#success").html("");
     //                }, 8000);
     //            },
     //            error: function(name) {
     //                // Fail message
     //                alert("Error error berror on terror");
     //                $("#success").html("");
     //                //clear all fields
     //                $('#contactForm').trigger("reset");
     //            },
     //        });
     //    } else {
     //    	$('#success').html("<div class='alert alert-danger'>");
     //        $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
     //                    .append("</button>");
     //        $('#success > .alert-danger').append("<strong>Please fill out all of the fields to send a message!");
     //        $('#success > .alert-danger').append('</div>');
     //    }
    });

});


