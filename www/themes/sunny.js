$(document).ready(function(){
	$("#login").bind("click", function() {
	  	vUsername = $("#username").val();
	  	vPassword = $("#password").val();
		vRemember = $("#remember").val();
	
		$.mobile.pageContainer.pagecontainer("change", "index.html", {reload:true, transition:"slide"});
		
	});
	/*$('#navListPanel').delegate('li', 'tap', function () {
    		//console.log('clicked');
    		var index = $(this).index();
		alert (index+" was clicked");
	});*/
	
	/*$('.liClass').click(function() { 
	     	var id= $(this).attr("id"); // Get the ID
	  	alert (id+" was clicked");
	});*/	
});

function displayerDropdown(label, item){
	$('#ReqDropdown').append('<option value="'+item+'">'+label+'</option>');
}

function createReqView(role){
	if(role=="employee"){
		displayerDropdown("All Requests", "all");
		displayerDropdown("New", "new");
        	displayerDropdown("Pending", "pending");
	        displayerDropdown("Resolved", "resolved");
	} else if(role=="hr"){
		displayerDropdown("All Requests", "all");
		displayerDropdown("My Queue", "mine");
	}
}