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
		state = usStates[idx];
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
    			if(zipValue.length==0){
    				alert('Zip Code must be provided');
    				return false;
    			}
    		}
    		else if (addr1Value.length == 0) {
    			alert("address cannot be empty");
    			return false;
    		}
    	var firstNameInput = signupForm.find('#first-name');
    	if (firstNameInput.val().length == 0) {
    		alert("first-name must not be empty");
    		return false;
    	}

    	var lastNameInput = signupForm.find('#last-name');
    	if (lastNameInput.val().length == 0) {
    		alert("last-name must not be empty");
    		return false; 
    	}

    	var emailInput = signupForm.find('#email');
    	if (emailInput.val().length == 0) {
    		alert("email must not be empty");
    		return false;
    	}
  	
	});
	
	$('.cancel-signup').click(function(){
    //code to run when user clicks "No Thanks!" button
    $('.cancel-signup-modal').modal();
    // window.location = 'http://www.google.com';
	}); //cancel-signup click
    $('.btn-abandon').click(function(){
    window.location = 'http://www.google.com';
	}); 

	
$('select[name="refer"]').change(function(){
    //get a ref to the refer select
    //add the refer-other input
    var referSelect = $(this);
    var otherInput = $('[name="refer-other"]');

    //if the refer select's value in lower case is equal to "other"...
    if ('other' === referSelect.val().toLowerCase()) {
        //remove the disabled attribute from the
        //refer-other input, show it, and set focus to it
        otherInput.removeAttr('disabled');
        otherInput.show();
        otherInput.focus()
    }
    else {
        //otherwise, make the refer-other input disabled
        //and hide it
        otherInput.attr('disabled', true);
        otherInput.hide();
    }
}); //refer change function
                       
});