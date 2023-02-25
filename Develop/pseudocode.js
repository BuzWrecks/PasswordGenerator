// The user clicks 'Generate'



// Prompt 1 - what length password, choose a number between 8 and 128
// check for error - if number selected <8 or >128 respond "please select a number between 8 and 128"
// no error accept
// Prompt 2 - choose what characters you want to include in your password
// prompt box to include 4 check-boxes
// check-box uppercase
// check-box lowercase
// check-box number
// checkbox special characters
// check for error "at least one character type must be selected"
// if no error accept


// generate password 
// -- number of each selected character type to be random
// -- each character type to be random

// print password to the text box
// same password not to be printed twice in a row
// "retry" button


// Define the available character types
const characterTypes = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numeric: '0123456789',
    special: '!@#$%^&*()_+{}[]|\\:;"<>,.?/~`'
  };
  
  // Prompt the user for password criteria
  function getPasswordCriteria() {
    let passwordLength = 0;
    let includeLowercase = false;
    let includeUppercase = false;
    let includeNumeric = false;
    let includeSpecial = false;
    
    // Prompt for the password length
    while (passwordLength < 8 || passwordLength > 128) {
      passwordLength = prompt('Enter a password length between 8 and 128 characters:');
      if (passwordLength === null) {
        // User clicked cancel, exit the function
        return null;
      }
      passwordLength = parseInt(passwordLength);
    }
    
    // Prompt for which character types to include
    while (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
      includeLowercase = confirm('Include lowercase characters?');
      includeUppercase = confirm('Include uppercase characters?');
      includeNumeric = confirm('Include numeric characters?');
      includeSpecial = confirm('Include special characters?');
      if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
        alert('Please select at least one character type.');
      }
    }
    
    return {
      length: passwordLength,
      lowercase: includeLowercase,
      uppercase: includeUppercase,
      numeric: includeNumeric,
      special: includeSpecial
    };
  }
  
  // Generate a random password based on the selected criteria
  function generatePassword(criteria) {
    let password = '';
    let possibleCharacters = '';
    
    if (criteria.lowercase) {
      possibleCharacters += characterTypes.lowercase;
    }
    if (criteria.uppercase) {
      possibleCharacters += characterTypes.uppercase;
    }
    if (criteria.numeric) {
      possibleCharacters += characterTypes.numeric;
    }
    if (criteria.special) {
      possibleCharacters += characterTypes.special;
    }
    
    for (let i = 0; i < criteria.length; i++) {
      password += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
    }
    
    return password;
  }
  
  // Main function to generate a new password
  function writePassword() {
    const criteria = getPasswordCriteria();
    if (criteria) {
      const password = generatePassword(criteria);
      alert(`Your new password is: ${password}`);
    }
  }
  
  // Add a click event listener to a button on the page to generate a new password
  var generateBtn = document.querySelector("#generate");
  
  generateBtn.addEventListener("click", writePassword);
  
  
  /* Assignment Code
  var generateBtn = document.querySelector("#generate");
  
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "1234567890";
    var specialCharacters ="`~!@#$%^&*()_+[]{}\|;:?><,./-=";
    var length = parseInt(prompt("How long would you like your password to be? (8-128 characters)"));
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
   
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  
  
  
  /* // Assignment Code
  var generateBtn = document.querySelector("#generate");
  
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890";
  var specialCharacters ="`~!@#$%^&*()_+[]{}\|;:?><,./-=";
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  
  
  
  
  
  
    // Define variables for password generator
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var symbols = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  
  // Function to generate password
  function generatePassword() {
    // Get password length from user input
    var length = parseInt(prompt("How long would you like your password to be? (8-128 characters)"));
    // Check if length is valid
    if (isNaN(length) || length < 8 || length > 128) {
      alert("Please enter a valid password length between 8 and 128 characters.");
      return "";
    }
    */