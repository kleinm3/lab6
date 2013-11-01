//signup.js 
// add your JavaScript code to this file

$(function(){
	//document is now ready for manipulation
	var stateSelect = ('');
	var select = $('select[name="state"]');
    var option;
	var idx; 
	var state; 
	for (idx = 0; idx < usStates.length; ++idx) {
		state = states[idx];
		option = $(document.createElement('option'));
		option.attr('value', state.abbreviation);
		option.html(state.name);
		select.append(option);	
	}

	$('.signup-form').submit(function(){
		//code to execute when the sign-up form is submitted
    	//this is the raw DOM form element
   	 	//wrap it in a jQuery object so we can use jQuery methods on it
   		var signupForm = $(this);
   		//select a descendant input element with the name "addr-1"
   		var addr1Input = signupForm.find('input[name="addr-1"]');
    	var addr1Value = addr1Input.val();
    		if (addr1Value.length > 0) {
    			var zipInput = signupForm.find('input[name="zip"]');
    			var zipValue = zipInput.val();
    		}
    		else {
    			alert('Zip Code must be provided');.
    		}
	});
	$('.cancel-signup').click(function(){
    //code to run when user clicks "No Thanks!" button
    window.location = 'http://www.google.com';
	}); //cancel-signup click
        
});