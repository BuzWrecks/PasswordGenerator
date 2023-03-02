// Create arrays of characters to include in the password
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz".split("");
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const specialChars = "!@#$%^&*()_-+={}[];:'\"<>,.?/|\\`~".split("");
const numberChars = "0123456789".split("");

// Prompt user for password length
let passwordLength;
do {
  passwordLength = prompt("Enter a password length between 8 and 128 characters:");
} while (passwordLength < 8 || passwordLength > 128);

// Prompt user for character types to include
const includeLowercase = confirm("Include lowercase characters?");
const includeUppercase = confirm("Include uppercase characters?");
const includeSpecial = confirm("Include special characters?");
const includeNumbers = confirm("Include numbers?");

// Create an array to hold all characters to include in password
let passwordChars = [];
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





// Generate random password
let password = "";
for (let i = 0; i < passwordLength; i++) {
  password += passwordChars[Math.floor(Math.random() * passwordChars.length)];
}

// Output password to console
console.log(password);








// Test the console log
console.log("Test, test, one, two, one, two, testing.")
let lowercase = "abcdefghijklmnopqrstuvwxyz";
const lowercaseCharacters = lowercase.split("");
console.log(lowercaseCharacters)
// passwordLengthText.value = password;

// return password;

const characterTypes = {
  passwordLength: 8 || 128,
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numberic: "0123456789",
  specialCharacters: "!@#$%^&*()_+{}[]|\\:;<>,.?/~`"
}
// get nth in string - use random to choose nth in string

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
      passwordLength = prompt("Password Length: choose a number between 8 and 128.");
      
    }

// accepts and prints to console, prints to confirm box
    if (passwordLength > 8 || passwordLength < 128 || (passwordLength) === true) {
      console.log(passwordLength);
      alert("You have selected a password length of " + passwordLength + " characters.");
    
    // includenumberic
      includeNumberic = confirm("Do you want to include numbers in your password? Click 'OK' to include, click 'Cancel' to leave out.");
      
      console.log("Include numbers.")

    //includeSpecial
      includeSpecialCharacters = confirm("Do you want to include special ($ % & ! @ etc,) characters in your password? Click 'OK' to include, click 'Cancel' to leave out.");
      
      console.log("Include special characters.")
      

    //includeUppercase
      includeUppercase = confirm("Do you want to include UPPERCASE lessters in your password? Click 'OK' to include, click 'Cancel' to leave out.");
      
      console.log("Include uppercase.")

    //includeLowercase
      includeLowercase = confirm("Do you want to include lowercase varters in your password? Click 'OK' to include, click 'Cancel' to leave out.");
      
      console.log("Include lowercase.")
          
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


} else {
  // print to console
  console.log("Password Generator cancelled!");
}


