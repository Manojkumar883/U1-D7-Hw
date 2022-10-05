/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/*In Javascript there 7 different datatypes, also called primitives.
Those are Number,string, Boolean,undefined, null, Biglnt,symbol.

Numbers: numbers can be any numbers in javascript.
every number is just considered as number only 
also have some special values ,NaN.  

 Undefined: represents that "doesn't exists". 

 Null: Null represent it the just empty value. 

 string: a sequence of one or more characters that may consist of letters, numbers, or symbols.
 string should be in between the symbols of "",''

 Booleans:
 these are flags ,they just care one meaning. either true or false (only for logical output)*/


/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/* variable means the input that we can give by using using keyword'let' and its stores that value that can be change later on*/


/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

let number1= 12
let number2 = 20
console.log(number1+number2)

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

/* WRITE YOUR ANSWER HERE */
let x = 12


/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

/* WRITE YOUR ANSWER HERE */
let name = "John Doe"

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/
let number=12  
let substraction= x-12
console.log('substaction:',substraction)

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

/* WRITE YOUR ANSWER HERE */
let name1 = "john"
let name2 = "John"
if ( name1 === name2.toLowerCase()) {
    console.log9('true')
}
else{
    console.log('false')
}
/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

/* WRITE YOUR ANSWER HERE */
let numeric = 6
if (numeric < 10) {
if ( x===1){
    console.log('one') 
    } else if (num === 2) {
        console.log('two')
    } else if (num === 3) {
        console.log('three')
    } else if (num === 4) {
        console.log('four')
    } else if (num === 5) {
        console.log('five')
    }else if (num === 6) {
        console.log('six') 
    }else {
        console.log("else part")
    }
}
    




/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

/* WRITE YOUR ANSWER HERE */
