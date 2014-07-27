var map;
			       function initialize() {
					var defaultLatLng = new google.maps.LatLng('14.600657','120.98215');					
				        var myOptions = {
				        	zoom: 12,
					        center: defaultLatLng,
					        streetViewControl:true,
					        mapTypeId: google.maps.MapTypeId.ROADMAP
			        	};
			 	        map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
				}

				function drawMap(latlng) {
				        var marker = new google.maps.Marker({
			 	    	   	position: latlng,
					        map: map,
					        title: "Greetings!"
        				});
			 	      
			        	// this is our gem
				        google.maps.event.addDomListener(window, "resize", function() {
        	    			var center = map.getCenter();
					        google.maps.event.trigger(map, "resize");
				        	map.setCenter(center); 
			        	}); 
				}    


				function drawer(latlng, title, address, contact) {
				      	var marker = new google.maps.Marker({
			 	    	   	position: latlng,
					        map: map,
					        title: title
        				});
					
	var contentString = $('<div class="marker-info-win font-black">'+'<div class="marker-inner-win"><span class="info-content">'+'<p class="marker-heading"><strong>'+title+'</strong></p><br />'+address+'<br />'+contact+'<br /><br /></span>'+'</div></div>');
            
        //Create an infoWindow
        var infowindow = new google.maps.InfoWindow();
        
        //set the content of infoWindow
        infowindow.setContent(contentString[0]);
        
        //add click event listener to marker which will open infoWindow          
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker); // click on marker opens info window 
        });
			 	      
			        	// this is our gem
				        google.maps.event.addDomListener(window, "resize", function() {
        	    			var center = map.getCenter();
					        google.maps.event.trigger(map, "resize");
				        	map.setCenter(center); 
			        	}); 
				}     



function mapper(type){
	$.getJSON('themes/wyndata.json', function(json){
		$.each(json.meiss, function(index, val) {
			if((Object.keys(val)[0]+"")=="maps"){
			   $.each(this, function() {
				if(type=="all"){
					getAllPlaces(this);
				}
	    	});
	                }
                 });
  
	});

}


function getAllPlaces(items){
	$.each(items, function(index, val) {
		var newLatLng = new google.maps.LatLng(val.lat,val.lng); 
	   	drawer(newLatLng, val.title, val.address, val.telephone);
	});
}