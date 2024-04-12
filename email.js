// function isValidEmail(email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   }
  

//   console.log(isValidEmail('example@example.com')); 
//   console.log(isValidEmail('invalid@.email.com')); 
  
// npm install validator
const validator = require('validator');

function isValidEmail(email) {
  return validator.isEmail(email);
}

// Example usage
console.log(isValidEmail('example@gamil.com')); 
console.log(isValidEmail('invalidemail'));
