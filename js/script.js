// This JS file contains a function that is used in the index.html file

// Activates Strict Mode
'use strict';

// This function calculates the factorial of number inputted by the user
function factorial() {
  
  // Variables for user's number
  let userInt = parseInt(document.getElementById('user-integer').value);

  // Initializes Variables 
  let message = "";
  let counter = 1;
	let factorialAnswer = 1;

  // IF statement to make sure the user inputted a valid number
  if (userInt >= 0) {
    // IF statement to check if the user inputted a 1 or 0
    if (userInt != 0 && userInt != 1) {

      // DO WHILE loop to calculate factorial
      do {
				factorialAnswer *= counter;
        counter++;
      } while (counter <= userInt);
      message = "The factorial of this number: " + factorialAnswer;
      
      // IF the user entered 0 or 1
    } else {
      message = "The factorial of this number: 1"
    }
    // IF user did not enter a number
  } else {
    message = "Please enter a valid number in the input box!";
  }
  
  // Displays factorial of number inputted (or error message)
  document.getElementById("output").innerHTML = message;
}
