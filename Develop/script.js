// Test the console log
console.log("Test, test, one, two, one, two, testing.")

const characterTypes = {
  passwordLength: 8 || 128,
  lowercase: "abcdefghijklomnpqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numberic: "0123456789",
  specialCharacters: "!@#$%^&*()_+{}[]|\\:;<>,.?/~`"
}

var passwordLength = 0;
    var includeLowercase = false;
    var includeUppercase = false;
    var includeNumberic = false;
    var includeSpecialCharacters = false;
//length = (passwordLength)

var options = []

// " var passwordConfirmation = ' '; "

// Assignment Code

// The user clicks the 'generate' button

var generateBtn = document.querySelector("#generate");
var generatePassword

// Event listener opens the confirm
generateBtn.addEventListener("click", generatePassword);

function confirmGenerate() {

  if (confirm("Do you want to generate a password today? Click 'OK' to proceed.") === true) {
// print to console
    console.log("Password Generator commenced!");

// all password criteria in this - nested within the generate function - can I use confirmGenerate to do the same thing??

// passwordLength

  passwordLength = prompt("Password Length: choose a number between 8 and 128.");  

// error run for numberic less than 8 and greater than 128
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
      alert("Error = please choose a number between 8 and 128");
      prompt("Password Length: choose a number between 8 and 128.");

    }

// accepts and prints to console, prints to confirm box
    if (passwordLength > 8 || passwordLength < 128 || (passwordLength) === true) {
      console.log(passwordLength);
      alert("You have selected a password length of " + passwordLength + " characters.");
    
    // includenumberic
      includeNumberic = confirm("Do you want to include numberic in your password? Click 'OK' to include, click 'Cancel' to leave out.");
      if (confirmGenerate.numberic) {
        possibleCharacters += characterTypes.numberic;
      }

    //includeSpecial
      includeSpecialCharacters = confirm("Do you want to include special ($ % & ! @ etc,) characters in your password? Click 'OK' to include, click 'Cancel' to leave out.");
      if ((confirmGenerate.includeSpecialCharacters) === true) {
        console.log("Include special characters.");
        possibleCharacters += characterTypes.includeSpecialCharacters;
        
      }
      

    //includeUppercase
      includeUppercase = confirm("Do you want to include UPPERCASE lessters in your password? Click 'OK' to include, click 'Cancel' to leave out.");
      if (confirmGenerate.uppercase) {
        possibleCharacters += characterTypes.uppercase;
      }

    //includeLowercase
      includeLowercase = confirm("Do you want to include lowercase varters in your password? Click 'OK' to include, click 'Cancel' to leave out.");
      if (confirmGenerate.lowercase) {
        possibleCharacters += characterTypes.lowercase;
      }
          
    if (!includeNumberic && !includeSpecialCharacters && !includeUppercase && !includeLowercase) {
      return alert("Error - you must choose at least one character set to include! Click the 'Generate Password' button to start again.")
     }


//randomise from selection

//print to console and text box

// re-run on command "Generate another password?"

//end tag for getCriteria
    }

   
    
// End of generator
      } else {
    // print to console
    console.log("Password Generator cancelled!");
  }



}
