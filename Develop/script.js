
// Testing the console
console.log("test")

// Assignment Code

// The user clicks the 'generate' button

var generateBtn = document.querySelector("#generate");
var generatePassword

// Event listener opens the confirm
generateBtn.addEventListener("click", generatePassword);

function confirmGenerate() {
  var generatePassword
  if (confirm("Do you want to generate a password today? Click 'OK' to proceed.") === true) {
    // print to console
    
    console.log("Password Generator commenced!");
    
    var passwordLenth = prompt("Password Length: choose a number between 8 and 128.");
  
  //if (prompt(8~128) == true)
    
  } else {
    // print to console
    console.log("Password Generator cancelled!");
  }
}





/*
function passwordLength() {
  var passwordLenth = prompt("Password Length: choose a number between 8 and 128.");
}

// Event listener runs the first prompt
// Add event listener to generate button
/* commented out till I understand it
generateBtn.addEventListener("click", generatePassword);
*/

/*

function passwordLength() {
  var passwordLenth = prompt("Password Length: choose a number between 8 and 128.");
}

Write password to the #password input
function writePassword() {
    var password = writePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }

// User selects a password length
let passwordLenth = prompt("Password Length: choose a number between 8 and 128.");
// Run an error check for numbers < 8 and > 128. If selection is outside of stated parameters run "error = please choose a number between 8 and 128"

// User selects which character types to use
let includeNumbers = alert("Do you want to include numbers in your password? Click 'Ok' to include, click 'cancel' to leave out.");
let includeSpecialCharacters = alert("Do you want to include special characters in your password? Click 'Ok' to include, click 'cancel' to leave out.");
let includeUppercase = alert("Do you want to include uppercase letters in your password? Click 'Ok' to include, click 'cancel' to leave out.");
let includeLowercase = alert("Do you want to include lowercase letters in your password? Click 'Ok' to include, click 'cancel' to leave out.");
// user to select 'ok' to include, cancel to leave out
/* run error check - user must select at least one character type - if error, 
return "you did not select any characters. Retry?" If click 'ok' rerun from start, if cancel - end 
*/






