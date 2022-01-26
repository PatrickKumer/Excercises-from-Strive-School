
/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* We have several most used datatypes. So you have "Boolean" datatype and it represents two values "true" and "false".
   Also there is "Null" datatype and has only one value and that is in more human words there is nothing in it like you have a bowl
   and you take all the content out of the bowl. And one is "Undefined" datatype and the name tells it all its content that it is undefined,
   we don't know what it contains. One of them is also a "Number" datatype and it is only numbers and it's values are
   "+Infinity", "-Infinity" and NaN(Not a Number). And the last one i remember is the "String" datatype and it only contains words. */

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/* So "Variable" is like a storage or a container and we assign to them values in this case "datatypes" for example ( let apple = 10 )
in the example i created a variable called "apple" and assigned to the variable a name "apple" and what it contains in this case that
is 10 apples so that is a "Number" datatype. So we got to the concludence that a variable is a box and we just put stuff in it and after
we could put sutff out of the box, count it, give names and colors etc.   */

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/
console.log("-------Excercise 3------")

let number1 = 12
let number2 = 20
let solution1 = number1 + number2

console.log("The solution of the exercise is:", solution1)

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

let x = 12

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

let name = "John Doe"

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

console.log("-------Excercise 6------")

let solution2 = number1 - x

console.log("The solution of the exercise is:", solution2)

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

console.log("-------Excercise 7------")


let name1 = "john"
let name2 = "John"
let differenceBetweenNames = name1 === name2
let bothAreLowercase = true

console.log("Are this the same names?", differenceBetweenNames)
console.log("In this case both are starting with lowercase", bothAreLowercase)

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

console.log("-------Excercise 8------")

let number3 = 8
let name3 = "eight"

if(name3){
    console.log("The number is:", name3)
}


/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

console.log("-------Excercise 9------")

let firstDog = "Ben"
let secondDog = "Lory"
let isMale = false

if(isMale){
    console.log("It is a male dog", firstDog)
} else {
    console.log("It is a female dog", secondDog)
}
