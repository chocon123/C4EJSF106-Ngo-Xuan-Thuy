/* câu 1 a 3 different examples of invalid variable name

/*1*/
// let 1 ;
// SyntaxError:  Unexpected number

/*2*/
// let name+age = "21";
// Uncaught SyntaxError: Unexpected token '+'

/*3*/
// let let ="huhu"
// Uncaught SyntaxError: let is disallowed as a lexically bound name

/* câu 1 b In JS.how to check a variable data types?
// typeOf();

/* câu 2
// 1 - b , 2 - a, 3 - e, 4 - c,d

/* câu 3
*/
let message ="Coding is gear";
console.log(message);

let studentCount = 0;
console.log(studentCount)
/* câu 4 
*/
message = "Conding might not be easy, but still great";
console.log(message);

studentCount = 16;
console.log(studentCount);
console.log(message.toLowerCase());

studentCount++;
console.log(studentCount);
/* câu 5 
*/
alert("viet nam number one");
/* câu 6
*/
let name = prompt("tên của mày");
alert(`Hi ${name}, viet nam number one`);

/* câu 7
*/
let firstname= prompt("Enter your firstname");
let lastname= prompt("Enter your lastname");
alert(`Hi ${firstname} ${lastname}`);

/* câu 8
*/
let length = prompt("Enter side length of the square");
alert("the squeare are is : " + Math.pow(length,2));
/* câu 9
*/
let radius = prompt("Enter the radius of the circle");
alert("the circle area is : " + Math.pow(radius,2)*3,14);
/* câu 10
*/
let celsius = prompt("Enter the temperature in  Celcius");
alert(`${celsius} (℃) = ${celsius*1,8+32} (℉)`);
