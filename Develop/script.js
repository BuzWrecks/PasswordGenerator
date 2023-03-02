
// Test the console log
console.log("Test, test, one, two, one, two, testing.")

function generatePassword() {
  // Creat an array from a string of characters
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz".split("");
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const specialChars = "!@#$%^&*()_-+={}[];:'\"<>,.?/|\\`~".split("");
  const numberChars = "0123456789".split("");
  
  if (confirm("Do you want to generate a password today? Click 'OK' to proceed.") === true) { {
        // print to console
        console.log("Password Generator commenced!");
        }
        // passwordLength
      var passwordLength;
      do {
        passwordLength = prompt("Password Length: choose a number between 8 and 128.");
      } while (passwordLength < 8 || passwordLength > 128);

      // accepts and prints to console, generates an alert
      if (passwordLength > 8 || passwordLength < 128 || (passwordLength) === true) {
          console.log(passwordLength);
          alert("You have selected a password length of " + passwordLength + " characters.");
      }
          // Prompt user for character types to include
          const includeNumbers = confirm("Do you want to include numbers in your password? Click 'OK' to include, click 'Cancel' to leave out.");
          const includeSpecial = confirm("Do you want to include special ($ % & ! @ etc,) characters in your password? Click 'OK' to include, click 'Cancel' to leave out.");
          const includeUppercase = confirm("Do you want to include UPPERCASE lessters in your password? Click 'OK' to include, click 'Cancel' to leave out.");
          const includeLowercase = confirm("Do you want to include lowercase varters in your password? Click 'OK' to include, click 'Cancel' to leave out."); 
          var passwordChars = [];
          if (includeLowercase) {
              passwordChars = passwordChars.concat(lowercaseChars);
          }
          if (includeUppercase) {
              passwordChars = passwordChars.concat(uppercaseChars);
          }
          if (includeSpecial) {
            passwordChars = passwordChars.concat(specialChars);
          }
          if (includeNumbers) {
            passwordChars = passwordChars.concat(numberChars);
          }
          if (!includeNumbers && !includeSpecial && !includeUppercase && !includeLowercase) {
            return alert("Error - you must choose at least one character set to include! Click the 'Generate Password' button to start again.")
          }
          // randomise the result
          let password = "";
          for (var i = 0; i < passwordLength; i++) {
            password += passwordChars[Math.floor(Math.random() * passwordChars.length)];
          }
          // Output password to console
          console.log(password)
    } 
  
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
