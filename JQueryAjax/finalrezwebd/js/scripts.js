


// SHowing instructions when clicking 
function showMe(){
	$("#explanation").css("visibility","visible");
	$("#how").click(function(){
		$("#explanation").css("visibility","hidden");
		$("#explanation").off("click");
	});

}






