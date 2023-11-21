
var generateBtn = document.querySelector("#generate");


var Criteria = {

  lenght: 0,

  lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  
  uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

  number: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],

  symbol: ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var result = "";
  var length = 0;
  var uppercase;
  var lowercase;
  var number;
  var symbol;

  length = 0;
  Criteria.length = 0;
  result = "";

  while (length < 8 || length > 128) {
  length = prompt("How long do you want your generated passord to be? \nPassword must be between 8 and 128 characters.");
   
  if (length === null) {
  return "Please find your generated password";
}

else {
  if (!isFinite(length)) {
  alert("a number was not entered");
  return "Please find your generated passowrd";
}

else {
  if (length < 8 || length > 128) {
  alert("password required to be between 8 & 128");
  return "Please find your generated password";
}
        
else {
  showPrompts();
  while (Criteria.length < length) {
  if (lowercase === false && uppercase === false && number === false && symbol === false) {
  alert("You must select at least one criteria of lowercase, uppercase, numbers or special characters")
  showPrompts();
}

else {
  if (lowercase === true && Criteria.length < length) {
var lc = Criteria.lowercase[Math.floor(Math.random() * 26)]
result = result + lc;
Criteria.length++;
}
    
if (symbol === true && Criteria.length < length) {
  var sc = Criteria.symbol[Math.floor(Math.random() * 32)]
  result = result + sc;
  Criteria.length++;
}

if (uppercase === true && Criteria.length < length) {
  var uc = Criteria.uppercase[Math.floor(Math.random() * 26)]
  result = result + uc;
  Criteria.length++;
}

if (number === true && Criteria.length < length) {
  var num = Criteria.number[Math.floor(Math.random() * 10)]
  result = result + num;
  Criteria.length++;
}
}
}
}
}
}

return result;

function showPrompts() {
  lowercase = confirm("Do you want to use lower case letters?");
  uppercase = confirm("Do you want to use upper case letters?");
  number = confirm("Do you want to use numbers?");
  symbol = confirm("Do you want to use any special characters?");
}
}
}