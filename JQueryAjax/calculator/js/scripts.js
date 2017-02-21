$(document).ready(function(){

	//1. Make the numbers appear on screen
	$('.keys').click(function() {
		var theValue = $(this).text();
		if (theValue !== "=") {
			$('#display').append(theValue);
		}
		else {
			var theOperation = $('#display').text(); 
			calculate(theOperation);
		}

	});


	//2. Reset/clear the screen
	$('#clear').click( function() {
		$('#display').text("");
	});


	//3. Calculate like a normal calculator
	function calculate(operation) {
		//alert('Lets calculate :'+ operation );
		var theResult = eval(operation);
		$('#display').text(theResult);
	}

	//4. Operations with parenthesis


});