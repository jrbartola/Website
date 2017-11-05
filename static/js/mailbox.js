$(document).ready(function() {
	// Initialize tablesorter for visitors table
	// Sort by first column in descending order
	$('table.visitors-table').tablesorter({sortList: [[0,1]]});

	$("tr.inbox-row").on('click', function() {
		if ($(this).attr("data-read") == "False") {
			$(this).css("background-color", "#39f");
			var objid = $(this).attr("data-id");
			$.ajax({
	            url: "/api/" + objid,
	            type: "PUT",
	            // data: {
	            //     id: objid,
	            //     type: 'read'
	            // },
	            success: function(resp) {
	                // Success message
	                if (resp.success ===  true) {
	                	console.log("Read the message");
	                	$(this).attr("data-read", "True");
	                } else {
	                	console.log("Got a response, but could not read the message. Response:");
	                	console.log(resp);
	                	console.dir(resp);
	                }
	            },
	            error: function(resp) {
	                // Fail message
	                console.log("ERROR: Could not read the message");
	            },
	        });
		}
		// Add the id to the current selected attribute
		$("#curmsg").attr("data-selected", $(this).attr("data-id"));

		$("#curmsg").val("Time: " + $($(this).children()[0]).html() +
		" \nFrom: " + $(this).attr("data-name") +
		" \nEmail: " + $($(this).children()[2]).html() + " \n\n" +
			$($(this).children()[3]).html());
	});

	$("#recent").on('click', function() {
		// Flip back and forth between most recent and oldest messages
		if ($(this).attr("data-switch") == "recent") {
			$(this).html('<i class="fa fa-caret-up"></i> Oldest');
			$(this).attr("data-switch", "oldest");

			$("tbody.inbox-table").each(function(elem,index){
		    	var arr = $.makeArray($("tr.inbox-row",this).detach());
		        arr.reverse();
		        $(this).append(arr);
		    });
		} else {
			$(this).html('<i class="fa fa-caret-down"></i> Most Recent');
			$(this).attr("data-switch", "recent");
			$("tbody.inbox-table").each(function(elem,index){
		    	var arr = $.makeArray($("tr.inbox-row",this).detach());
		        arr.reverse();
		        $(this).append(arr);
		    });
		}
		
	});

	$("#removemsg").on('click', function() {
		var msgid = $("#curmsg").attr("data-selected");
		if (msgid != 'nil') {
			$.ajax({
	            url: "/api/" + msgid,
	            type: "DELETE",
	            // data: {
	            //     id: msgid,
	            //     type: 'delete'
	            // },
	            success: function(resp) {
	                // Success message
	                if (resp.success === true) {
	                	console.log("Deleted the message!");
	                	$("[data-id=" + msgid + "]").remove();
	                } else {
	                	console.log("Got a response, but could not delete the message");
	                }
	                // Clear the current message textarea and selected data to nil
	                $("#curmsg").val("");
	                $("#curmsg").attr("data-selected", "nil");
	            },
	            error: function(resp) {
	                // Fail message
	                console.log("ERROR: Could not delete the message");
	            },
	        });
		}
	});

	$("#sendmsg").on('click', function() {
		if ($("#response").val() != '') {
			var recipient = $($("[data-id=" + $("#curmsg").attr("data-selected") + "]").children()[2]).html();
			// Terminate if no message is selected
			if (recipient === undefined)
				return;
			var subject = $("#email-subject").val();
			// Throw error and terminate if no subject
			if (subject === '') {
				console.error("NEED A SUBJECT");
				return;
			}
				
			var recipName = $($("[data-id=" + $("#curmsg").attr("data-selected") + "]").children()[1]).html();
			var msg = "From: Jesse Bartola <jrbartola@gmail.com>\n" +
			"To: " + recipName + " <" + recipient + ">\nSubject: " + subject +
			"\n\n" + $("#response").val();

			console.log(msg);
			$.ajax({
	            url: "/send",
	            type: "POST",
	            data: {
	                recip: recipient,
	                message: msg
	            },
	            success: function(resp) {
	                // Success message
	                
	                // Clear the current message textarea
	                if (resp == 'true') {
	                	$("#curmsg").val("");
	                	swal({title: "Swish!",
	    	    			text: "Email has been sent.", 
	    	    			type: "success", 
	    	    			confirmButtonText: "Nice" 
	    	    		});
	    	    		$("#response").val("");
	    	    		$("#email-subject").val("");
	                }
	                	
	                
	            },
	            error: function(resp) {
	                // Fail message
	                console.log("ERROR: Message not delivered");
	            },
	        });
		}
	});

	$('.visitor').on('click', function() {
		// Set the caret to be facing the appropriate direction
		

		if ($(this).hasClass('headerSortUp')) {
			$(this).find('span').attr('class','caret caret-upside');
		} else if ($(this).hasClass('headerSortDown')) {
			$(this).find('span').attr('class', 'caret');
		}
		// Keep track of which filter is being used so we can apply span carets
		var prevFilter = $('table.visitors-table').attr('data-filter');
		var id_ = $(this).attr('id');
		// Remove caret from previous filter if not the same
		if (prevFilter != id_) {
			//console.log(prevFilter + " is not equal to " + id_)
			$('th.visitor#' + prevFilter).find('span').attr('class','none');
			$(this).find('span').attr('class','caret caret-upside');
		}
			

		// Set new filter
		$('table.visitors-table').attr('data-filter', id_);
		
	});
});

