// Assignment 33

// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers 
// end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should 
// read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.


//This line declares a variable number and initializes it with an array of numbers from 1 to 9.
let number : number[] = [ 1, 2, 3, 4, 5, 6, 7, 8, 9,];

// This is a for loop that iterates through each element in the number array. The loop variable 
// i starts at 0 and increments by 1 on each iteration, until it reaches the length of the number array.
for( let i = 0; i < number.length; i++ ){

    // This checks if the current number in the array is 1. If it is, it prints the number followed by the "st" 
    // suffix (e.g., "1st").
    if( number[i] === 1 ){
        console.log( number[i] + "st" );
    }
    // This checks if the current number in the array is 2. If it is, it prints the number followed by the "nd" 
    // suffix (e.g., "2nd").
    else if( number[i] === 2 ){
        console.log( number[i] + "nd" );
    }
    // This checks if the current number in the array is 3. If it is, it prints the number followed by the "rd" 
    // suffix (e.g., "3rd").
    else if( number[i] === 3 ){
        console.log( number[i] + "rd" );
    }
    // If the current number in the array is not 1, 2, or 3, it prints the number followed by the "th" 
    // suffix (e.g., "4th", "5th", etc.).
    else{
        console.log( number[i] + "th" );
    }
    }
