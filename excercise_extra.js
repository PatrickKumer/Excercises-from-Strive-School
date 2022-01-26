// Additional assignments for Day 3

/* EXTRA 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

console.log("-------Excercise 1------")

let male = "Maximilian"
let female = "Anastasia"
let isMale = true

if(isMale){
    console.log("It is a male human", male)
} else {
    console.log("It is a female human", female)
}

/* EXTRA 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

console.log("-------Excercise 2------")

let number1 = 8



/* EXTRA 3
 Create a variable and assign to it the concatenation of two strings.
*/

console.log("-------Excercise 3------")

let name1 = "John"
let name2 = "Doe"
let fullName = name1 + name2

console.log("The full name is", fullName)

/* EXTRA 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

console.log("-------Excercise 4------")

let x = 10
let y = 8
let z = 25

if(x>y){
    console.log(y)
}if(z>x){
    console.log(x)
}if(x<z){
    console.log(z)
}
