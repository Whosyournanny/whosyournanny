function retriever(page, type){
	$("#displaydata").empty();	
	$.getJSON('themes/wyndata.json', function(json) {
		$.each(json.wyn, function(index, val) {
			if(page=="profile" && (Object.keys(val)[0]+"")=="users"){
			  $.each(this, function() {
				if(type=='employer'){
					getEmployer(this, 1);
				} else if(type=='nanny'){
					getNanny(this, 1);					
				}
			  }); 
			} else if(page=="profile" && (Object.keys(val)[0]+"")=="nanny_info"){
			  $.each(this, function() {
				if(type=='nannyinfo') {
					getNannyInfo(this, 1);
				}
			  });
			} else if(page=="requests" && (Object.keys(val)[0]+"")=="myrequest"){ 
			  $.each(this, function() {
				if(type=='empall'){
					//get all requests created by employer
					getAllEmpRequest(this, 1);
				} else if(type=='emppending'){
					//get all requests created by employer - pending status
				  	getPendingEmpRequest(this, 1);					
				} else if(type=='empcompleted') {
					//get all requests created by employer - completed status
					//same CompletedRequest function but pass user_id of employer				 
					getCompletedRequest(this, 1);
				} 
				else if(type=='nannyall'){
					//get all requests sent to nanny
				  	getAllNannyRequest(this, 1);					
				} else if(type=='nannycompleted') {
					//get all requests accepted by nanny - completed
					//same CompletedRequest function but pass user_id of nanny				 
					getCompletedRequest(this, 1);
				} else if(type=='nannyrejected') {
					//get all requests rejected by nanny				 
				  	getRejectedRequest(this, 1);
				} 
			  });
			}
		});
	}).error(function(data) {
  		console.log("Error!");
	});
} 


//Grid-A
function displayerData(label, item){
	$('#displaydata').append('<div class="ui-grid-a custom-grid dataTable font-black"><div class="ui-block-a dataLabel" align="center"><p>'+label+'</p></div><div class="ui-block-b dataValue"><p>'+item+'</p></div></div>');
}

//Grid-A - reversed
function displayerDataR(label, item){
	$('#displaydata').append('<div class="ui-grid-a custom-grid dataTable font-black"><div class="ui-block-a dataValue" align="center"><p>'+label+'</p></div><div class="ui-block-b dataLabel"><p>'+item+'</p></div></div>');
}

//Solo Grid
function displayerDataS(item){
	$('#displaydata').append('<div class="ui-grid-solo custom-grid dataTable font-black"><div class="ui-block-a dataSolo" align="center"><p>'+item+'</p></div></div>');
}

//Solo Grid For Request Details - Parent
function displayerDataQR(item, id, type){
	$('#displaydata').append('<div class="ui-grid-solo custom-grid dataTable font-black"><div class="ui-block-a" style="padding-left:3%;"><a href="#" onclick="shower('+id+', \''+type+'\');"><p>'+item+'</p></a></div></div>');
}

//Grid-A - reversed - Request
function displayerDataRR(label, item){
	$('#displaydata').append('<div class="ui-grid-a custom-grid dataTable font-black"><div class="ui-block-a dataValueR"><p>'+label+'</p></div><div class="ui-block-b dataLabelR" align="right"><p>'+item+'</p></div></div>');
}

//Solo Grid - Request
function displayerDataSR(item){
	$('#displaydata').append('<div class="ui-grid-solo custom-grid dataTable font-black"><div class="ui-block-a dataSolo" style="padding-left:3%;"><p>'+item+'</p>');
}

function getAllEmpRequest(items, user_id){
	$.each(items, function(index, val) {
	  if(val.user_id==user_id){
	  	//displayerDataQR("Category: "+val.request_category, val.request_id, "empdetails");
	  	displayerDataSR("Category: "+val.request_category);
	   	displayerData("Nanny", val.chosen_nanny);
		displayerData("Date Requested", val.req_from_date+" - "+val.req_to_date);
	    displayerData("Status", val.Status);
		displayerDataS(" ");
	  }
	});
}

function getAllNannyRequest(items, user_id){
	$.each(items, function(index, val) {
	  if(val.user_id==user_id){
	  	//displayerDataQR("Category: "+val.request_category, val.request_id, "nannydetails");
	  	displayerDataSR("Category: "+val.request_category);
	   	displayerData("Requestor", val.requestor_id);
		displayerData("Date Requested", val.req_from_date+" - "+val.req_to_date);
	    displayerData("Status", val.Status);
		displayerDataS(" ");
	  }
	});
}

function getPendingEmpRequest(items, user_id){
	$.each(items, function(index, val) {
	  if(val.user_id==user_id && val.Status=="Pending"){
	  	//displayerDataQR("Category: "+val.request_category, val.request_id, "empdetails");
	  	displayerDataSR("Category: "+val.request_category);
	   	displayerData("Requestor", val.requestor_id);
		displayerData("Date Requested", val.req_from_date+" - "+val.req_to_date);
	    displayerData("Status", val.Status);
		displayerDataS(" ");
	  }
	});
}

function getCompletedEmpRequest(items, user_id){
	$.each(items, function(index, val) {
	  if(val.user_id==user_id && val.Status=="Completed"){
	  	//displayerDataQR("Category: "+val.request_category, val.request_id, "empdetails");
	  	displayerDataSR("Category: "+val.request_category);
	   	displayerData("Requestor", val.requestor_id);
		displayerData("Date Requested", val.req_from_date+" - "+val.req_to_date);
	    displayerData("Status", val.Status);
		displayerDataS(" ");
	  }
	});
}

function getCompletedNannyRequest(items, user_id){
	$.each(items, function(index, val) {
	  if(val.user_id==user_id && val.Status=="Completed"){
	  	//displayerDataQR("Category: "+val.request_category, val.request_id, "nannydetails");
	  	displayerDataSR("Category: "+val.request_category);
	   	displayerData("Requestor", val.requestor_id);
		displayerData("Date Requested", val.req_from_date+" - "+val.req_to_date);
	    displayerData("Status", val.Status);
		displayerDataS(" ");
	  }
	});
}

function getRejectedNannyRequest(items, user_id){
	$.each(items, function(index, val) {
	  if(val.user_id==user_id && val.Status=="Rejected"){
	  	//displayerDataQR("Category: "+val.request_category, val.request_id, "nannydetails");
	  	displayerDataSR("Category: "+val.request_category);
	   	displayerData("Requestor", val.requestor_id);
		displayerData("Date Requested", val.req_from_date+" - "+val.req_to_date);
	    displayerData("Status", val.Status);
		displayerDataS(" ");
	  }
	});
}

function getEmployer(items, user_id){
	$.each(items, function(index, val) {
		if(val.user_id==user_id){
		  $.each(val.users, function(index, value) {
			displayerData("Last Name", val.user_l_name);
		    displayerData("First Name", val.user_f_name);
		    displayerData("Middle Name", val.user_m_name);
		    displayerData("Address", val.home_add);
		    displayerData("City/Municipality", val.city_municipality);
		    displayerData("Province", val.province);
		    displayerData("Postal Code", val.postal_code);
		    displayerData("Contact No.", val.contact_no);
			displayerData("Number of children", val.children);
			displayerData("Bedroom Type", val.bedroom);
		    displayerData("Mobile No.", val.mobile_no);
		  });
		}
	});
}

function getNanny(items, user_id){
	$.each(items, function(index, val) {
		if(val.user_id==user_id){
		  $("#displaydata").append('<img style="width:100%;height:auto;" src="themes/images/nanny'+item+'.jpg" />');
		  displayerData("Last Name", val.user_l_name);
		  displayerData("First Name", val.user_f_name);
		  displayerData("Middle Name", val.user_m_name);
		  displayerData("Address", val.home_add);
		  displayerData("City/Municipality", val.city_municipality);
		  displayerData("Province", val.province);
		  displayerData("Postal Code", val.postal_code);
		  displayerData("Contact No.", val.contact_no);
		  displayerData("Mobile No.", val.mobile_no);
		}
	});
}

function getNannyInfo(items, user_id){
	$.each(items, function(index, val) {
		if(val.nanny_id==user_id){
		  $.each(val.nanny_skill, function(index, value) {
				displayerData("skill", value.skill);
			});
		}
	});
}

function shower(req_id, type){
	$("#displaydata").empty();	
	$.getJSON('themes/wyndata.json', function(json) {
		$.each(json.wyn, function(index, val) {
			if((Object.keys(val)[0]+"")=="myrequest"){ 
			   $.each(this, function() {
				if(type=='empdetails') {				 
					getEmpRequestDet(this, req_id);				 
				} else if(type=='nannydetails') {				 
					getHRRequestDet(this, req_id);
				} 
			   });
			}
		});
	}).error(function(data) {
  		console.log("Error!");
	});
} 