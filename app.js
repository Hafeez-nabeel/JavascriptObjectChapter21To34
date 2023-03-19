// Q.1
/*let firstName = prompt("Enter your first name");
let lastName = prompt("enter your last name");
let fullName = `${firstName} ${lastName}`;
document.write("WELCOME ", fullName);*/

// Q.2
/*let mobile = prompt("What is your favorite mobile phone model");
document.write(
  `My favorite phone is: ${mobile}
  <br>
   Length of string: ${mobile.length}
`
); */

// Q.3
/* let nationality = "pakistani";
let result = nationality.indexOf("n");
document.write("index of 'n' is: ", result);*/

// Q.4

/* let word = "hello world";
let result = word.lastIndexOf("l");
document.write("last index of 'l' is: ", result); */

// Q.5
/* let nationality = "pakistani";
let result = nationality.charAt(3);
document.write("character at index '3' is: ", result); */

// Q.6
/* let firstName = prompt("Enter your first name");
let lastName = prompt("enter your last name");
let fullName = `${firstName.concat(lastName)}`;
document.write("WELCOME ", fullName); */

// Q.7

/* let city = "Hyderabad";
let result = city.replace("Hyder", "Islam");
document.write(result);*/

// Q.8
/* let message = "ali and sami are best friends. they play cricket and football together";
document.write(message, "<br>");
let result = message.replace(/and/g, "&");

document.write(result); */

// Q.9
/*
let str = "472";
let strResult = typeof str;
let convertNum = Number(str);
let numResult = typeof convertNum;

document.write(`
value: ${str} <br>
type: ${strResult} <br>
value: ${convertNum} <br>
type: ${numResult} <br>
`);
*/

// Q.10

/* let cap = prompt("this programe convet word to upper case write a word to test it");

let result = cap.toUpperCase();

document.write(`
User input: ${cap} <br>
Upper case: ${result} <br>
`); */

// Q.11
// let userInput = "javascript";
// let result = userInput[0].toUpperCase() + userInput.slice(1);
// document.write(result);

// Q.12
/*let str = 23.33;
let re sult = String(str);
document.write("Number: ", str, "<br>");
document.write("Result: ", result.replace(".", ""));
*/

// Q.13
// var username = prompt("Enter your username:");
// var isValid = true;
// var specialSymbols = ['@', '.', ',', '!'];
// for (var i = 0; i < specialSymbols.length; i++) {
//   if (username.includes(specialSymbols[i])) {
//     isValid = false;
//     break;
//   }
// }
// if (!isValid) {
//   alert("Enter a valid username without special symbols [@ . , !]");
// }

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("Enter an item to search:");

// var found = false;

// for (var i = 0; i < A.length; i++) {
//   if (A[i].toLowerCase() === userInput.toLowerCase()) {
//     found = true;
//     break;
//   }
// }

// if (found) {
//   document.write(`"${A[i]}" is found in the list.`);
// } else {
//   document.write(`"${userInput}" is not found in the list.`);
// }

// var password = prompt("Enter Password");

// if(password.length < 6){
//     password = prompt("Password should be at least 6 charaters long. Enter a valid password.")
// }else if(!/^[a-zA-Z][a-zA-Z0-9]*$/.test(password)){
//     password = prompt("Password Should contain Only alphabets and numbers , Please enter a valid Password.")}
// else{
//     alert("Valid Password!!")
// }

// Q.16
// var university = "University of Karachi";

// var result = university.split("");
// for (var i = 0; i < result.length; i++) {
//   document.write(result[i] + "<br>");
// }

// Q17
// let userInput = prompt("countryName");
// let result = userInput.charAt(userInput.length - 1);
// document.write(result);

// Q18.
// var txt = "The quick brown fox jumps over the lazy dog";
// var result = txt.toLowerCase().match(/the/g);
// document.write(`Text: ${txt}<br>
// There are 2 Occrrence of word 'the'
// `);

// Chapter 26 to 30
// Q.1
// var userinput = +prompt("enter any possitve number");
// document.write(
//   `
//   Number: ${userinput}<br>
//   Round value: ${Math.round(userinput)}<br>
//   Floor value: ${Math.floor(userinput)}<br>
//   Ceil value: ${Math.ceil(userinput)}<br>
//   `
// );
//

// Q.2
// var userinput = +prompt("enter any negative number");
// document.write(
//   `
//   Number: ${userinput}<br>
//   Negative Round value: ${Math.round(userinput)}<br>
//   Negative Floor value: ${Math.floor(userinput)}<br>
//   Negative Ceil value: ${Math.ceil(userinput)}<br>
//   `
// );
// Q.3
// var userinput = +prompt("enter any integer to get a absolute value");
// document.write(
//   `
//   The Absolute value of : ${userinput} is ${Math.abs(userinput)}<br>

//   `
// );

// Q.4
// var randomnumber = Math.random() * 10 + 1;
// var result = Math.floor(randomnumber);
// document.write("random dice value is: ", result);

// Q.5
// var randomnumber = Math.random() * 1 + 1;
// var result = Math.round(randomnumber);
// if (result === 2) {
//   document.write(`${result}<br>random coin value is: Heads`);
// } else {
//   document.write(`${result}<br>random coin value is: Tails`);
// }

// Q.6
// var randomnumber = Math.random() * 100 + 1;
// var result = Math.floor(randomnumber);
// document.write("random number between 1 and 100: ", result);

// Q.7
// var userWeight = prompt("Enter your weight ");
// var matches = userWeight.match(/(\d+)/);
// document.write(`The weight of user is ${matches[0]} kilograms`);

// Q.8
// var userNumber = +prompt("Guess secret number from 1 to 10");
// var randomSecretNumber = Math.random() * 10 + 1;
// var secretNumber = Math.floor(randomSecretNumber);
// if (userNumber === secretNumber) {
//   document.write(`congrarulate you guessed the secret number<br>
//   The secret number is: ${secretNumber}
//   `);
// } else {
//   document.write(`Try again <br>
//   Teh secret number was : ${secretNumber}
//   `);
// }

// Chapter 31 to 34
// Q.1
// var currentDateTime = new Date();
// document.write(currentDateTime);

// Q.2
// var currentDateTime = new Date();
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var result = months[currentDateTime.getMonth()];
// alert("Current month is: " + result);

// Q.3
// var currentDateTime = new Date();
// var weekDays = ["Sun", "Sat", "Mon", "Tue", "Wed", "Thu", "Fri"];
// var result = weekDays[currentDateTime.getDay()];
// alert("Today  is: " + result);

// Q.4
// var currentDateTime = new Date();
// var weekDays = ["Sun", "Sat", "Mon", "Tue", "Wed", "Thu", "Fri"];
// var result = currentDateTime.getDay();
// if (result === 0 || result === 1) {
//   document.write("its Fun day: ");
// }

// Q.5
// var currentDateTime = new Date();
// var result = currentDateTime.getDate();
// if (result < 16) {
//   document.write("Firs fifteen days of the month");
// } else {
//   document.write("Last days of the month");
// }
// Question #7

// var now = new Date();
// var hour = now.getHours();

// if(hour < 12){
//     alert("It's AM")
// }else{
//     alert("it's PM")
// }

// Question #8

// var laterDate = new Date(2020,11,31);
// document.write("Later date: " + laterDate)

// / Question #9

// var ramadanStart = new Date();
// var oneDay = 24 * 60 * 60 * 1000;
// var daysPassed = Math.round((ramadanStart.getTime()- new Date(2015,5,18).getTime()) / oneDay)
// document.write(daysPassed + " days have passed since 1st Ramadan, 2015")

// Question #10

// var referenceDate = new Date();
// var beginningOf2015 = new Date(2015,11,05);
// var elapsedSeconds = Math.round((referenceDate.getTime()- beginningOf2015.getTime())/ 1000);
// document.write("On reference date " + beginningOf2015 + " , " + elapsedSeconds + " seconds had passed since beginning of 2015")

// Question #11

// var oldtime = new Date();
// var currentDate = new Date();
// var currentHours = oldtime.getHours();
// currentDate.setHours(currentHours +1);
// document.write("current date: " + currentDate + "<br/>");
// document.write("1 hour ago, it was " + oldtime )

// Question #12

// var currentDate = new Date();
// currentDate.setFullYear(currentDate.getFullYear()- 100);
// alert("100 years ago it was: " + currentDate

// Q.13
// var userAge = +prompt("Write Your Age");
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - userAge;

// document.write(`
// Your age is: ${userAge}<br>
// Your birth year is ${birthYear}
// `);

// Q.14
var currentDateTime = new Date();
var customerName = "Mazdoor Awam";
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentMonth = months[currentDateTime.getMonth()];
var numberOfUnits = 410;
var chargesPerUnit = 16;
var netAmountPayableWithinDueDate = numberOfUnits * chargesPerUnit;
var latePaymentSurcharge = 350;
var grossAmountPayableAfterDueDate = netAmountPayableWithinDueDate + latePaymentSurcharge;
document.write(
  `
  Customer Name: ${customerName}<br>
  Month: ${currentMonth}<br>
  Number of units: ${numberOfUnits}<br>
  Charge per units: ${chargesPerUnit}<br>
  Net Amount Payable(within Due Date): ${netAmountPayableWithinDueDate}<br>
  Late Payment surcharges: ${latePaymentSurcharge}<br>
  Gross Amount Payable(after Due Date): ${grossAmountPayableAfterDueDate}<br>
  `
);
