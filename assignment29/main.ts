// Assignment 29

// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent 
// if statements that check for certain fruits in your array.

// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. 
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!

//Creating an array of favorite fruits
let favorite_fruits: string[] = ["apple", "mango", "cherry"];

if(favorite_fruits.includes("apple")){
    console.log("I really like apples!");
}
if(favorite_fruits.includes("mango")){
    console.log("I really like mangoes!");
}
if(favorite_fruits.includes("cherry")){
    console.log("I really like cherries!");
}
if(favorite_fruits.includes("banana")){
    console.log("I really like bananas!");
}
if(favorite_fruits.includes("kiwi")){
    console.log("I really like kiwis");
}