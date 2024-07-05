// Assignment 43

// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the 
// array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a 
// separate array. Call show_magicians() with each array to show that you have one array of the original names and 
// one array with the Great added to each magician’s name.

function show_magicians(magicians: string[]) 
  {
    magicians.forEach(name => 
        console.log(name)); 
  }

function make_great(magicians: string[]){
    return magicians.map (name => `The Great ${name}`);
}

let magician_name: string[] = ["David Copperfield", "Doug Henning", "Lance Burton"];

// making a copy of original array through slice() function.

let copy_of_magician_name: string[] = magician_name.slice();

// modify the copy array to include "Th Great" with their
let copy_great_magicians = make_great(copy_of_magician_name);

//show both original and copy array

//original
console.log("\n Original")
show_magicians(magician_name);

//copy

console.log("\n Copies")
show_magicians(copy_great_magicians);
