// Assignment 24

// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more 
// comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and 
// less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

let str1:string = "hello";

let num1:number = 4;

let num2:number = 10;

let arrayFruits:string[] = ["Apple", "Mango", "Kiwi", "Banana"]

// Test 01 : Tests for equality and inequality with strings

console.log("\t \t Tests for equality and inequality with strings \t \t");

console.log("\n Is str1 == 'hello' ? I predict True.")
console.log(str1 === "hello");

console.log("\n Is str1 != 'hello' ? I predict  False.");
console.log(str1 != "hello");

// Test 02 : Tests using the lower case function.

console.log("\t \t Tests using the lower case function \t \t");

console.log("\n Is str1.toLowerCase() == 'hello' ? I predict True.");
console.log(str1.toLowerCase() === "hello");

console.log("\n Is str1.toLowerCase() != 'hello' ? I predict False.");
console.log(str1.toLocaleLowerCase() != "hello" );

// Test 03 : Numerical tests involving equality and inequality, greater than and less than, 
//greater than or equal to, and less than or equal to .

console.log("\t \t Numerical tests involving equality and inequality, greater than and less than,  greater than or equal to, and less than or equal to \t \t");

console.log("\n Is num1 equal to 4 ? I predict True.");
console.log(num1 == 4);

console.log("\n Is num1  not equal to 4  ? I predict False.");
console.log(num1 != 4);

console.log("\n Is num2 greater than num1 ? I predict True.");
console.log(num2 > num1);

console.log("\n Is num1 less than num2 ? I predict True.");
console.log(num1 < num2);

console.log("\n Is num2 greater than or equal to num1 ? I predict True.");
console.log(num2 >= num1);

console.log("\n Is num1 less than or equal to num2 ? I predict True.");
console.log(num1 <= num2);

// Test 04 : Tests using "and" and "or" operators

console.log("\t \t Tests using 'and' and 'or' operators \t \t");

console.log("\n Is num1 equal to 4 and num2 is equal to 10 ? I predict True.");
console.log(num1 == 4 && num2 == 10);

console.log("\n Is num1 equal to 4 and num2 is equal to 9 ? I predict False.");
console.log(num1 == 4 && num2 == 9);


console.log("\n Is num1 equal to 4 or num2 is equal to 10 ? I predict True.");
console.log(num1 == 4 || num2 == 10);

console.log("\n Is num1 equal to 10 or num2 is equal to 4 ? I predict True.");
console.log(num1 == 10 || num2 == 4);

// Test 05 : Test whether an item is in a array.

console.log("\t \t Test whether an item is in a array \t \t");

console.log("\n Is 'Apple' in arrayFruit ? I predict True.");
if (arrayFruits.includes("Apple")){
    console.log("True");
}

console.log("\n Is  'Orange' in arrayFruit ? I predict False.");
if (!arrayFruits.includes("Orange")){
    console.log("False");
}


