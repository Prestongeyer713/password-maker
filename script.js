
//Assignment Code here
document.querySelector("#generate").addEventListener("click", writePassword);

var number = '1234567890';
var specialChar = '!@#$^&%*()+=-[]{}|:<>?,.';
var alphaLower = 'abcdefghijklmnopqrstuvwxyz';
var alphaUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var pwd = '';
var confirmLength = "";
var specialSelection;
var numericSelection;
var upperSelection;
var lowerSelection;

function generatePassword() {
  var confirmLength = (prompt("How many characters do you wnat?"));

  while(confirmLength <= 7 || confirmLength >= 129) {
      alert("Password length must be between 8-128 characters Try again");
      var confirmLength = (prompt("How many characters do you want this password to have?"));
      } 


    var specialSelection = confirm("would you like special characters?");
    var numericSelection = confirm("would you like numbers?");    
    var lowerSelection = confirm("would you like lowercase?");
    var upperSelection = confirm("would you like uppercase?");

      var passwordCharacters = []
      
    if (specialSelection) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (numericSelection) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (lowerSelection) {
      passwordCharacters = passwordCharacters.concat(alphaLower)
    }

    if (upperSelection) {
      passwordCharacters = passwordCharacters.concat(alphaUpper)
    }

      console.log(passwordCharacters)

      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


function copied() {
    document.getElementById("password").select();
    document.execCommand("copy");
    alert("The password has been copied to your clipboard!");
}
generateBtn.addEventListener("click", writePassword);