$(document).ready(function() {
	$("tr").on('click', function() {
		if ($(this).attr("data-read") == "False") {
			$(this).css("background-color", "#39f");
			var objid = $(this).attr("data-id");
			$.ajax({
	            url: "/fetch",
	            type: "POST",
	            data: {
	                id: objid,
	                type: 'read'
	            },
	            success: function(resp) {
	                // Success message
	                if (resp == 'true') {
	                	console.log("Read the message");
	                	$(this).attr("data-read", "True");
	                } else {
	                	console.log("Got a response, but could not read the message");
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
		" \nEmail: " + $($(this).children()[1]).html() + " \n\n" +
			$($(this).children()[2]).html());
	});

	$("#recent").on('click', function() {
		// Flip back and forth between most recent and oldest messages
		if ($(this).attr("data-switch") == "recent") {
			$(this).html('<i class="fa fa-caret-up"></i> Oldest');
			$(this).attr("data-switch", "oldest");

			$("tbody").each(function(elem,index){
		    	var arr = $.makeArray($("tr",this).detach());
		        arr.reverse();
		        $(this).append(arr);
		    });
		} else {
			$(this).html('<i class="fa fa-caret-down"></i> Most Recent');
			$(this).attr("data-switch", "recent");
			$("tbody").each(function(elem,index){
		    	var arr = $.makeArray($("tr",this).detach());
		        arr.reverse();
		        $(this).append(arr);
		    });
		}
		
	});

	$("#removemsg").on('click', function() {
		var msgid = $("#curmsg").attr("data-selected");
		if (msgid != 'nil') {
			$.ajax({
	            url: "/fetch",
	            type: "POST",
	            data: {
	                id: msgid,
	                type: 'delete'
	            },
	            success: function(resp) {
	                // Success message
	                if (resp == 'true') {
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
			var recipient = $($("[data-id=" + $("#curmsg").attr("data-selected") + "]").children()[1]).html();
			var msg = $("#response").val();
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
	                }
	                	
	                
	            },
	            error: function(resp) {
	                // Fail message
	                console.log("ERROR: Message not delivered");
	            },
	        });
		}
	});
});

