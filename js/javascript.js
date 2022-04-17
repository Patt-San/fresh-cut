
// Check for blank on selection //

function checkForBlank1()
{
   
    var service = document.getElementById('select-service');
    var invalidService = service.value == "0";
 
    if (invalidService) {
        alert('Please select service you would like');
        service.className = 'error';
    }
    else {
        service.className = '';
    }
    
    return !invalidService;

}

function checkForBlank2()
{

    var barber = document.getElementById('select-barber');
    var invalidBarber = barber.value == "0";
 
    if (invalidBarber) {
        alert('Please select barber');
        barber.className = 'error';
    }
    else {
        barber.className = '';
    }
    
    return !invalidBarber;
}



// Booking Form Validation //

function validateForm()
{
var  x=document.forms["booking"]["name"].value;
if (x == null || x == "")
{
alert("Name must be filled out");
return false;
}

var  x=document.forms["booking"]["email"].value;
if (x == null || x == "")
{
alert("Please provide e-mail address");
return false;
}

var  x=document.forms["booking"]["phone_number"].value;
if (x == null || x == "")
{
alert("Please provide 10 digit phone number");
return false;
}

}

// validate booking date //
// This code is from forum in StackOverflow//
var today = new Date().toISOString().split('T')[0];
    document.getElementsByName("booking-date")[0].setAttribute('min', today);

// validate index page //
    function validar(){
        alert("The 'Index' page has already finish loading");
    }

// validate about us page //
	function validar2(){
        alert("The 'About' page has already finish loading");
    }
    
    var cierrepreg = true;
    window.onbeforeunload=cierre1;


