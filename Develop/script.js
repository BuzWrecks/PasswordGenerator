
// The user clicks the 'generate' button

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Event listener runs the first prompt
// Add event listener to generate button
/* commented out till I understand it
generateBtn.addEventListener("click", generatePassword);
*/

// Write password to the #password input
function writePassword() {
    var password = writePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }

// User selects a password length
let passwordLenth = prompt("Password Length: choose a number between 8 and 128.");
// Run an error check for numbers < 8 and > 128. If selection is outside of stated parameters run "error = please choose a number between 8 and 128"

// User selects which character types to use
let includeNumbers = prompt("Do you want to include numbers in your password? Click 'Ok' to include, click 'cancel' to leave out.");
let includeSpecialCharacters = prompt("Do you want to include special characters in your password? Click 'Ok' to include, click 'cancel' to leave out.");
let includeUppercase = prompt("Do you want to include uppercase letters in your password? Click 'Ok' to include, click 'cancel' to leave out.");
let includeLowercase = prompt("Do you want to include lowercase letters in your password? Click 'Ok' to include, click 'cancel' to leave out.");
// user to select 'ok' to include, cancel to leave out
/* run error check - user must select at least one character type - if error, 
return "you did not select any characters. Retry?" If click 'ok' rerun from start, if cancel - end 
*/






