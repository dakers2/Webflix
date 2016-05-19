//===============================================================
//	Remove leading and trailing spaces from string using
//	a regular expression.
//===============================================================
function trimSpaces(inputString)
{
    if (inputString == null)
    {
        return null;
    }
    else
    {
        return inputString.replace(/^[ ]+|[ ]+$/g, "");
    }
}

		
//===============================================================
//	Verifies that a text control has a value
//===============================================================
function  containsValue(formField)
{
	var field = trimSpaces(formField.value);
	if (field.length > 0)
		return true;
	return false;
}


//===============================================================
//	Verifies that a single character is numeric
//
//  Use with onkeypress event,
//
//  Example, onkeypress="return isCharNumeric(event)"
//
//  This can be used for fields like a zip code
//===============================================================
function isCharNumeric(e)
{
    var charCode = e.keyCode ? e.keyCode : e.charCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
    {
        //alert("Only numbers are allowed.")
        return false;
    }
    return true;
}


//===============================================================
//	Uses a regular expression to determine if the string
//	passed to the function is numeric 
//===============================================================
function isNumeric(str)
{
    var pattern = /^\d*$/; //allow only numbers
    if (pattern.test(str))
    {
        return true;
    }
    else
    {
        return false;
    }
}


//===============================================================
//	Checks to see if the string passed to it 
//	is empty or null. If so, returns true, 
//	otherwise returns false.
//===============================================================
function isEmpty(str)
{
    var empty = (str == null || str == "") ? true : false;
    return empty;
}


//===============================================================
//	Used to verify whether or not a selection
//	has been made from a select list. First
//	argument is the select object you want to check,
//	second argument is a Boolean value specifying
//	whether the first option needs to be checked as
//	well. Set ckFirst to true if you're using the 
//	first option as a description or to give instructions.
//	Set ckFirst to false if the first option is a
//	valid option.  noneSelected returns true if
//	no valid selection has been made from the select
//	list and false otherwise.
//===============================================================
function noneSelected(zSelectList, ckFirst)
{
    if (noneSelected.arguments.length == 1)
    {
        ckFirst = false;
    }
    if (zSelectList.selectedIndex == -1 || zSelectList.selectedIndex == 0 && ckFirst)
    {
        return true;
    }
    else
    {
        return false;
    }
}


//===============================================================
//	Takes a set of radio buttons or checkboxes as
//	an argument then loops through the set's
//	associated array and looks for a box that
//	is checked.  As soon as one is found, the
//	function returns false.  If it gets thru
//	the entire set without finding a checked
//	box, it returns true. 
//===============================================================
function noneChecked(zButtonSet)
{
    for (var i = 0; i < zButtonSet.length; i++)
    {
        if (zButtonSet[i].checked)
        {
            return false;
        }
    }
    return true;
}


//===============================================================
//	Returns the value of a selected radio button.
//	Returns null if no button selected. 
//===============================================================
function getRadioSelection(radioButtons) 
{
    for (i=0; i < radioButtons.length; i++) 
    {
        if (radioButtons[i].checked == true) 
        {
            return radioButtons[i].value;
        }
    }
    return null;
}


//===============================================================
//	Accepts two strings and returns a Boolean 
//	value specifying true if they don't match,
//	false if they match.
//===============================================================
function noMatch(str1, str2)
{
    if (str2 != str1)
    {
        return true;
    }
    else
    {
        return false;
    }
}


//===============================================================
//	Accepts a string and two numeric values specifying
//	the minimum and maximum length desired for the 
//	string. Returns true if the string passed has the
//	specified length, false if not.
//===============================================================
function validLength(str, minLen, maxLen)
{
    if (typeof (str) != "string")
    {
        str = str.toString();
    }
    if (str.length < minLen || str.length > maxLen)
    {
        return false;
    }
    else
    {
        return true;
    }
}


//===============================================================
//	Uses a regular expression to determine if the string
//	passed to the function has any illegal characters. If
//	the string consists only of letters and numbers, the 
//	function returns true. If the string contains any
//	illegal characters, the function returns false. 
//===============================================================
function onlyLettersNnums(str)
{
    var illegalChars = /[^a-zA-Z0-9]/; //allow only letters and numbers
    if (str.match(illegalChars))
    {
        return false;
    }
    else
    {
        return true;
    }
}


//======================================================================
//	This function takes three arguments, a password field, a password
//	confirmation field, and a Boolean value, strict, which specifies
//	whether or not only strict passwords are accepted.  In this case,
//	strict means the password must have at least one lowercase letter, 
//	one uppercase letter, and one numeric digit.  Set strict to false
//	if you don't want strict passwords. validPassword checks the
//	password for emptiness, match to confirming password, valid length,
//	illegal characters, and, optionally, strictness.  It returns a 
//	Boolean value indicating wether the password is valid or not.
//======================================================================
function validPassword(pwd, pwdConfirm, strict)
{
    var error = false;
    var errorMsg = "Error!\n";
    if (isEmpty(pwd.value) || isEmpty(pwd.value))
    {
        alert("Error! You must enter a password and confirm it.");
        pwd.focus();
        return false;
    }
    if (noMatch(pwd.value, pwdConfirm.value))
    {
        error = true;
        errorMsg += "Password entries do not match.\n";
    }
    if (!validLength(pwd.value, 6, 8))
    {
        error = true;
        errorMsg += "Password must be 6 to 8 characters long.\n";
    }
    if (!onlyLettersNnums(pwd.value))
    {
        error = true;
        errorMsg += "Password contains illegal characters.\n";
    }
    if (strict)
    {
        if (pwd.value.search(/[a-z]+/g) == -1 || // at least one lowercase letter
        pwd.value.search(/[A-Z]+/g) == -1 || // at least one uppercase
        pwd.value.search(/[0-9]+/g) == -1) // at least one numeric digit
        {
            error = true;
            errorMsg += "Password must contain at least one ";
            errorMsg += "lowercase letter, one uppercase letter, ";
            errorMsg += "and one numeric digit.";
        }
    }
    if (error)
    {
        alert(errorMsg);
        pwdConfirm.value = "";
        pwd.select();
        return false;
    }
    return true; // everything's ok
}




/*================================================================================================*/

/*        C R E D I T   C A R D   V A L I D A T I O N   F U N C T I O N

This code was found at: http://www.braemoor.co.uk/software/creditcard.shtml

This routine checks the credit card number. The following checks are made:

1. A number has been provided
2. The number is a right length for the card
3. The number has an appropriate prefix for the card
4. The number has a valid modulus 10 number check digit if required

Return: boolean, true if card is a valid format, otherwise, false.

   If a credit card number is invalid, an error reason is loaded into the global ccErrorNo variable. 
   This can be be used to index into the global error  string array to report the reason to the user 
   if required:
   
   e.g. if (!checkCreditCard (number, name)) alert(ccErrors[ccErrorNo]);
   
Supported credit card names:
	Visa
	MasterCard
	DinersClub
	CarteBlanche
	AmEx
	Discover
	JCB
	enRoute
	Solo
	Switch
	Maestro
	VisaElectron
	LaserCard
	
Test credit card numbers:
	American Express	3400 0000 0000 009
	Carte Blanche		3000 0000 0000 04
	Discover			6011 0000 0000 0004
	Diners Club			3852 0000 0232 37
	enRoute				2014 0000 0000 009
	JCB					3530 111333300000
	MasterCard			5500 0000 0000 0004
	Solo				6334 0000 0000 0004
	Switch				4903 0100 0000 0009
	Visa				4111 1111 1111 1111
	Laser				6304 1000 0000 0008
*/

// Global variables
var ccErrorNo = 0;
var ccErrors = new Array ()

ccErrors [0] = "Unknown card type";
ccErrors [1] = "No card number provided";
ccErrors [2] = "Credit card number is in invalid format";
ccErrors [3] = "Credit card number is invalid";
ccErrors [4] = "Credit card number has an inappropriate number of digits";
ccErrors [5] = "Warning! This credit card number is associated with a scam attempt";

function checkCreditCard (cardnumber, cardname) {
     
  // Array to hold the permitted card characteristics
  var cards = new Array();

  // Define the cards we support. You may add addtional card types as follows.
  
  //  Name:         As in the selection box of the form - must be same as user's
  //  Length:       List of possible valid lengths of the card number for the card
  //  prefixes:     List of possible prefixes for the card
  //  checkdigit:   Boolean to say whether there is a check digit
  
  cards [0] = {name: "Visa", 
               length: "13,16", 
               prefixes: "4",
               checkdigit: true};
  cards [1] = {name: "MasterCard", 
               length: "16", 
               prefixes: "51,52,53,54,55",
               checkdigit: true};
  cards [2] = {name: "DinersClub", 
               length: "14,16", 
               prefixes: "36,38,54,55",
               checkdigit: true};
  cards [3] = {name: "CarteBlanche", 
               length: "14", 
               prefixes: "300,301,302,303,304,305",
               checkdigit: true};
  cards [4] = {name: "AmEx", 
               length: "15", 
               prefixes: "34,37",
               checkdigit: true};
  cards [5] = {name: "Discover", 
               length: "16", 
               prefixes: "6011,622,64,65",
               checkdigit: true};
  cards [6] = {name: "JCB", 
               length: "16", 
               prefixes: "35",
               checkdigit: true};
  cards [7] = {name: "enRoute", 
               length: "15", 
               prefixes: "2014,2149",
               checkdigit: true};
  cards [8] = {name: "Solo", 
               length: "16,18,19", 
               prefixes: "6334,6767",
               checkdigit: true};
  cards [9] = {name: "Switch", 
               length: "16,18,19", 
               prefixes: "4903,4905,4911,4936,564182,633110,6333,6759",
               checkdigit: true};
  cards [10] = {name: "Maestro", 
               length: "12,13,14,15,16,18,19", 
               prefixes: "5018,5020,5038,6304,6759,6761,6762,6763",
               checkdigit: true};
  cards [11] = {name: "VisaElectron", 
               length: "16", 
               prefixes: "4026,417500,4508,4844,4913,4917",
               checkdigit: true};
  cards [12] = {name: "LaserCard", 
               length: "16,17,18,19", 
               prefixes: "6304,6706,6771,6709",
               checkdigit: true};
               
  // Establish card type
  var cardType = -1;
  for (var i=0; i<cards.length; i++) {

    // See if it is this card (ignoring the case of the string)
    if (cardname.toLowerCase () == cards[i].name.toLowerCase()) {
      cardType = i;
      break;
    }
  }
  
  // If card type not found, report an error
  if (cardType == -1) {
     ccErrorNo = 0;
     return false; 
  }
   
  // Ensure that the user has provided a credit card number
  if (cardnumber.length == 0)  {
     ccErrorNo = 1;
     return false; 
  }
    
  // Now remove any spaces from the credit card number
  cardnumber = cardnumber.replace (/\s/g, "");
  
  // Check that the number is numeric
  var cardNo = cardnumber
  var cardexp = /^[0-9]{13,19}$/;
  if (!cardexp.exec(cardNo))  {
     ccErrorNo = 2;
     return false; 
  }
       
  // Now check the modulus 10 check digit - if required
  if (cards[cardType].checkdigit) {
    var checksum = 0;                                  // running checksum total
    var mychar = "";                                   // next char to process
    var j = 1;                                         // takes value of 1 or 2
  
    // Process each digit one by one starting at the right
    var calc;
    for (i = cardNo.length - 1; i >= 0; i--) {
    
      // Extract the next digit and multiply by 1 or 2 on alternative digits.
      calc = Number(cardNo.charAt(i)) * j;
    
      // If the result is in two digits add 1 to the checksum total
      if (calc > 9) {
        checksum = checksum + 1;
        calc = calc - 10;
      }
    
      // Add the units element to the checksum total
      checksum = checksum + calc;
    
      // Switch the value of j
      if (j ==1) {j = 2} else {j = 1};
    } 
  
    // All done - if checksum is divisible by 10, it is a valid modulus 10.
    // If not, report an error.
    if (checksum % 10 != 0)  {
     ccErrorNo = 3;
     return false; 
    }
  }  
  
  // Check it's not a spam number
  if (cardNo == '5490997771092064') { 
    ccErrorNo = 5;
    return false; 
  }

  // The following are the card-specific checks we undertake.
  var LengthValid = false;
  var PrefixValid = false; 
  var undefined; 

  // We use these for holding the valid lengths and prefixes of a card type
  var prefix = new Array ();
  var lengths = new Array ();
    
  // Load an array with the valid prefixes for this card
  prefix = cards[cardType].prefixes.split(",");
      
  // Now see if any of them match what we have in the card number
  for (i=0; i<prefix.length; i++) {
    var exp = new RegExp ("^" + prefix[i]);
    if (exp.test (cardNo)) PrefixValid = true;
  }
      
  // If it isn't a valid prefix there's no point at looking at the length
  if (!PrefixValid) {
     ccErrorNo = 3;
     return false; 
  }
    
  // See if the length is valid for this card
  lengths = cards[cardType].length.split(",");
  for (j=0; j<lengths.length; j++) {
    if (cardNo.length == lengths[j]) LengthValid = true;
  }
  
  // See if all is OK by seeing if the length was valid. We only check the length if all else was 
  // hunky dory.
  if (!LengthValid) {
     ccErrorNo = 4;
     return false; 
  };   
  
  // The credit card is in the required format.
  return true;
}

/*================================================================================================*/



// Test data prefill button
function useTestData()	{
	HideErrorMessages();
	document.custInfo.custFirstName.value = "Luke";
	document.custInfo.custLastName.value = "Skywalker";
	document.custInfo.address1.value = "437 North Street";
	document.custInfo.address2.value = "";
	document.custInfo.city.value = "Somecity";
	document.custInfo.state.value = "IL";
	document.custInfo.zip.value = "12345";
	document.custInfo.zip4.value = "1234";
	document.custInfo.email.value = "luke@email.com";
	document.custInfo.ccType[0].checked = true;
	document.custInfo.ccExpMonth.value = "4";
	document.custInfo.ccExpYear.value = "2017";
	document.custInfo.ccVcode.value = "123";
	document.custInfo.ccNumber.value = "4242424242424242";
	//needs shipping address
	document.custInfo.shippingOption[0].checked = true;
}

// Copies billing address to shipping address
function copyAddress() {
	if (copyBilling.checked == true) {
		shipAddress1.value = address1.value;
		shipAddress2.value = address2.value;
		shipCity.value = city.value;
		shipState.value = state.value;
		shipZip.value = zip.value;
		shipZip4.value = zip4.value;
	}		
}

//	Hide all form error messages
function HideErrorMessages() {
	document.getElementById("Error_custFirstName").style.display = "none";
	document.getElementById("Error_custLastName").style.display = "none";
	document.getElementById("Error_address1").style.display = "none";
	document.getElementById("Error_address1_MinMax").style.display = "none";
	document.getElementById("Error_city").style.display = "none";
	document.getElementById("Error_state").style.display = "none";
	document.getElementById("Error_zip").style.display = "none";
	document.getElementById("Error_ccType").style.display = "none";
	document.getElementById("Error_ccNumber").style.display = "none";
	document.getElementById("Error_ccExpMonth").style.display = "none";
	document.getElementById("Error_ccExpYear").style.display = "none";
	document.getElementById("Error_ccVcode").style.display = "none";
	document.getElementById("Error_email").style.display = "none";
	document.getElementById("Error_shipAddress1").style.display = "none";
	document.getElementById("Error_shipAddress1_MinMax").style.display = "none";
	document.getElementById("Error_shipZip").style.display = "none";
	document.getElementById("Error_shippingOption").style.display = "none";
}

//	Field validations
function validateForm() {
	var errorMsgObject = null;
	var errorMsgObject_MinMax = null;
	var hasErrors = false;
	
	// Validate customer first name
	errorMsgObject = document.getElementById("Error_custFirstName");
	errorMsgObject.style.display = "none"; // Hide error message
	if (!containsValue(custFirstName)) {
		errorMsgObject.style.display = "block"; // Show error message
		hasErrors = true;
	}
	
	// Validate customer last name
	errorMsgObject = document.getElementById("Error_custLastName");
	errorMsgObject.style.display = "none"; // Hide error message
	if (!containsValue(custLastName)) {
		errorMsgObject.style.display = "block"; // Show error message
		hasErrors = true;
	}
	
	// Validate address1
	errorMsgObject = document.getElementById("Error_address1");
	errorMsgObject.style.display = "none"; // Hide error message
	errorMsgObject_MinMax = document.getElementById("Error_address1_MinMax");
	errorMsgObject_MinMax.style.display = "none"; // Hide error message
	if (!containsValue(address1)) {
		errorMsgObject.style.display = "block"; // Show error message
		hasErrors = true;
	}
	else if (!validLength(address1.value, 3, 50)) {
			errorMsgObject_MinMax.style.display = "block"; // Show error message
			hasErrors = true;
	}
	
	// Validate city
	errorMsgObject = document.getElementById("Error_city");
	errorMsgObject.style.display = "none"; // Hide error message
	if (!containsValue(city)) {
		errorMsgObject.style.display = "block"; // Show error message
		hasErrors = true;
	}
	
	// Validate state
	errorMsgObject = document.getElementById("Error_state");
	errorMsgObject.style.display = "none"; // Hide error message
	if (noneSelected(state, true))
	{
		errorMsgObject.style.display = "block"; // Show error message
		hasErrors = true;
	}
	
	// Validate zip
	errorMsgObject = document.getElementById("Error_zip");
	errorMsgObject.style.display = "none"; // Hide error message
	if (!containsValue(zip))
	{
		errorMsgObject.style.display = "block"; // Show error message
		hasErrors = true;
	}
	
	// Validate credit card type
	errorMsgObject = document.getElementById("Error_ccType");
	errorMsgObject.style.display = "none"; // Hide error message
	
	var ccType = document.getElementsByName("ccType");
	if (noneChecked(ccType))
	{
		errorMsgObject.style.display = "block"; // Show error message
		hasErrors = true;
	}
	
	// Validate credit card number
	errorMsgObject = document.getElementById("Error_ccNumber");
	errorMsgObject.style.display = "none"; // Hide error message
	if (!containsValue(ccNumber))
	{
		errorMsgObject.innerHTML = "Card number is required";
		errorMsgObject.style.display = "block"; // Show error message
		hasErrors = true;
	}
	else if (!isNumeric(ccNumber.value))
	{
		errorMsgObject.innerHTML = "Card number must be all numbers";
		errorMsgObject.style.display = "block"; // Show error message
		hasErrors = true;
	}
	else if (!noneChecked(ccType))
	{
		var cardType = getRadioSelection(ccType);
		if (!checkCreditCard(ccNumber.value, cardType))
		{
			errorMsgObject.innerHTML = ccErrors[ccErrorNo];
			errorMsgObject.style.display = "block"; // Show error message
			hasErrors = true;
		}
	}
	
	// Validate credit card expiration month
	errorMsgObject = document.getElementById("Error_ccExpMonth");
	errorMsgObject.style.display = "none"; // Hide error message
	if (noneSelected(ccExpMonth, true))
	{
		errorMsgObject.style.display = "block"; // Show error message
		hasErrors = true;
	}
	
	// Validate credit card expiration year
	errorMsgObject = document.getElementById("Error_ccExpYear");
	errorMsgObject.style.display = "none"; // Hide error message
	if (noneSelected(ccExpYear))
	{
		errorMsgObject.style.display = "block"; // Show error message
		hasErrors = true;
	}
	
	// Validate credit card Vcode
	errorMsgObject = document.getElementById("Error_ccVcode");
	errorMsgObject.style.display = "none"; // Hide error message
	if (!containsValue(ccVcode))
	{
		errorMsgObject.style.display = "block"; // Show error message
		hasErrors = true;
	}
	else if (!isNumeric(ccVcode.value))
	{
		errorMsgObject.style.display = "block"; // Show error message
		hasErrors = true;
	}
	else if (!validLength(ccVcode.value, 3, 4))
	{
		errorMsgObject.style.display = "block"; // Show error message
		hasErrors = true;
	}
	
	// Validate email address
	errorMsgObject = document.getElementById("Error_email");
	errorMsgObject.style.display = "none"; // Hide error message
	if (!containsValue(email))
	{
		errorMsgObject.style.display = "block"; // Show error message
		hasErrors = true;
	}

	// Validate shipping address1
	errorMsgObject = document.getElementById("Error_shipAddress1");
	errorMsgObject.style.display = "none"; // Hide error message
	errorMsgObject_MinMax = document.getElementById("Error_shipAddress1_MinMax");
	errorMsgObject_MinMax.style.display = "none"; // Hide error message
	if (!containsValue(shipAddress1))
	{
		errorMsgObject.style.display = "block"; // Show error message
		hasErrors = true;
	}
	else if (!validLength(shipAddress1.value, 3, 50))
	{
		errorMsgObject_MinMax.style.display = "block"; // Show error message
		hasErrors = true;
	}
	
	
	// SHIPPING VALIDATION
	
	// Validate shipping city
	errorMsgObject = document.getElementById("Error_shipCity");
	errorMsgObject.style.display = "none"; // Hide error message
	if (!containsValue(shipCity))
	{
		errorMsgObject.style.display = "block"; // Show error message
		hasErrors = true;
	}
	
	// Validate shipping state
	errorMsgObject = document.getElementById("Error_shipState");
	errorMsgObject.style.display = "none"; // Hide error message
	if (noneSelected(shipState, true))
	{
		errorMsgObject.style.display = "block"; // Show error message
		hasErrors = true;
	}
	
	// Validate shipping zip
	errorMsgObject = document.getElementById("Error_shipZip");
	errorMsgObject.style.display = "none"; // Hide error message
	if (!containsValue(shipZip))
	{
		errorMsgObject.style.display = "block"; // Show error message
		hasErrors = true;
	}
	
	//Validate shipping options
	errorMsgObject = document.getElementById("Error_shippingOption");
	errorMsgObject.style.display = "none"; // Hide error message
	
	var shippingOption = document.getElementsByName("shippingOption");
	if (noneChecked(shippingOption))
	{
		errorMsgObject.style.display = "block"; // Show error message
		hasErrors = true;
	}
	
	// can i haz errors?
	if (hasErrors)
	{
		alert("Please fill out required information.");
		return false;
	}
	else
	{
		return true;
	}
}
