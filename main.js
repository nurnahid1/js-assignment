
// => Solve these questions.

// Problem 1: Write a function to calculate the area of a triangle.

const side1 = 4;
const side2 = 5;
const side3 = 6;

const s = (side1 + side2 + side3) / 2;

//total area
const area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
// console.log('area of the triangle is :', area.toFixed(2));


// Problem 2: Write a function to convert degrees to radians.

function radians(deg){
    const degsToRad = deg * Math.PI / 180.0;
    console.log(degsToRad);
}
const deg = 90;
// radians(deg);

 
// Problem 3: Create a function calculate Factorial that takes a number and returns its factorial.
function factorial(number){
    let result = 1;
    for(let i =1; i <= number; i++){
        result = result * i;
    }
    return result;
    
}
const result = factorial(4);
// console.log(result)


// Problem 4: Create a function isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise.


function isPrime(num){
    if(num < 2){
        return `${num} is not a prime number`;
    }

    for(let i = 2; i <num; i++){
        if(num % i === 0){
            return `${num} is not a prime number`;
        }
     }
    return `${num} is a prime number`;
}
// console.log(isPrime(19))


// Problem 5: Create a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays.


function mergeArrays (array1, array2){
    const SumOfArrays = array1.concat(array2);
    return SumOfArrays;
 
}

const array1 = ["apple", 'mango', 'orange', 'papaya'];
const array2 = [1,2,3,4,];
// console.log(mergeArrays(array1, array2));


// Problem 6: Create a function isLeapYear that takes a year as a parameter and returns "This is a leap year" if it's a leap year, and "Not Leap year" otherwise.


function isLeapYear(year){
    if(year % 100 === 0 ? year % 400 === 0 : year % 4 === 0){
        return "This is a leap year"
    }
    return "Not Leap year"
}
// console.log(isLeapYear(1960));

// Problem 7: Create a function removeDuplicates that takes an array and returns a new array with duplicates removed.

let words = ['A', 'B', 'A', 'C', 'B'];
function removeDuplicates(words){
    const uniqueItem = [];
    for(let i = 0; i < words.length; i++){ 
        const word  = words[i];
        if(uniqueItem.includes(word) === false){
            uniqueItem.push(word);
        }
    }
    return uniqueItem;
}
// console.log(removeDuplicates(words))

// Problem 8: Create a function convertToCelsius that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.

function convertToCelsius(fahrenheit){
    const celsius = (fahrenheit - 32) * 5/9;
    return celsius
}

let Fahrenheit = 20;
// console.log(convertToCelsius(Fahrenheit))


// Problem 9: Write a function to find the maximum of five numbers.

function maxValue (array){
    let maxValue = Math.max(...array);
    return maxValue;
}

let Arry =[10, 20, 50, 60, 20, 10, 40];
// console.log(maxValue(Arry))


// Problem 10: Create a function called evenOdd() that takes a string as a parameter. Now you have to give the output based on the total number of characters in your String. The output will be 'even' or 'odd'. [ Input: ‘JavaScript’ Output: even, Input: ‘Hello’ Output: odd]

function evenOdd(inputString) {

    const Length = inputString.length;
  
    if (Length % 2 === 0) {
      return 'even';
    } else {
      return 'odd';
    }
  }
  
//   console.log(evenOdd('JavaScript'));
//   console.log(evenOdd('Hello'));
  


// => Answer any 4 questions.

// 1. Explain the difference between 'if...else' and 'switch' statements for conditional logic.


/* 2. What is JavaScript, and what is its primary purpose in web development?

Ans: ------------------------
JavaScript is a versatile, client-side scripting language used in web development. Its primary purpose is to enhance user interactivity and dynamically modify web page content. Javascirpt helps create engaging and user-friendly websites.

----------------------------*/

/*3. Explain the difference between var, let, and const when declaring variables in JavaScript.

Ans:------------------ 
var - var is a global scope variable. Basically var is use to write code for supporting older browsers.
let - let is a block scope variable, means it cannot be called outsite a {} bracket or that scope. In let we can reassign value but can't redeclare it.
const - const is also a bloc scope variable. if we use const it can't be reassigned or re-declared. 

----------------------*/

// 4. Explain the concept of "scope" in JavaScript and the difference between global and local scope.

/*--------------------------
Scope is a area whare a funciton or variable is visible or accessible to other code.

Global Scope means the code is accessible from the intire javascript file. It means it can be access outside of any other function or block of code

Local Scope means the code is not accessible from the intire javascript file but can be accesseble inside of a function or block of code.

--------------------------*>/

/* 5. What is the difference between "null" and "undefined" in JavaScript?
Ans:------------------ 
Undefined - Undefined means a variable has been declared but it doesn't have any value assigned. 
Null - Null is an assignment value. Null indicates the absence of a value for a variable
----------------------*/





// => Assignment Deadline + Marks:
// 1. Each question value is 5 marks.
// 2. The deadline to submit your assignment is October 25, 2023, at 8:00 PM.


