//STEP 1 – Camel Case identifiers
let someMonth;
function theMonth()
let currentMonth;
let summerMonth;
let myLibraryFunction;

//STEP 2 – Literal expressions
console.log(42);
console.log("Hello World");
console.log(true);         
console.log(null);      

//STEP 3 – Complex expressions
let sum = (5 + 10) * 2;
let greeting = "Hello " + "World";
console.log(sum);
console.log(greeting);

//STEP 4 – Declare 9 variables
let strFirstName;
let strLastName;
let strAddress;
let strCity;
let strState;
let numZipCode;
let numYourAge;
let strReferralSource;
let boolMayWeContactYou;

//STEP 5 – 3 ways to declare & assign values
let strFirstName = "Eias";             
let strLastName; strLastName = "Alhomsi"; 
let strCity = new String("San Diego"); 

//STEP 6 – Number + string
let mixed = 10 + " years";
console.log(mixed);

//STEP 7 – Boolean + string, Number + Boolean
let result1 = true + " is truthy";
console.log(result1);

let result2 = 5 + true; 
console.log(result2); 

//STEP 8 – Fix string literal
let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."';
console.log(someString);

//STEP 9 – Null vs Undefined
let valueNull = null;
console.log(valueNull);

let valueUndefined;
console.log(valueUndefined);

//STEP 10 – typeof operator
console.log(typeof "hello");
console.log(typeof 123);
console.log(typeof true);
console.log(typeof {a:1});
console.log(typeof undefined);

//STEP 11 – Alert with concatenation
alert("Hello " + "Zak Ruvalcaba" + ", welcome to the JavaScript class!");

// STEP 12 - Using a variable
let name = 'Zak Ruvalcaba';
alert('Hello ' + name + ', welcome to the JavaScript class!');

//STEP 13 – Using variables for both name & course
let name = "Zak Ruvalcaba";
let course = "JavaScript";
alert("Hello " + name + ", welcome to the " + course + " class!");

//STEP 14 – Add line break
let name = 'Zak Ruvalcaba';
let course = 'JavaScript';
alert('Hello ' + name + '.\nWelcome to the ' + course + ' class!');

//// STEP 15 - prompt the user's name
let name = prompt('What is your name?');
let course = 'JavaScript';
alert('Hello ' + name + '.\nWelcome to the ' + course + ' class!');

