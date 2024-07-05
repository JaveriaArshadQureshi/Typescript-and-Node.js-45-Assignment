// Assignment 41

// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//  which prints the name of each magician in the array.

let magician_name: string[] = ["David Copperfield", "Doug Henning", "Lance Burton"];

function show_magicians(magicians: string[]) {
    magicians.forEach(name => 
        console.log(name)); 
    }
    show_magicians(magician_name);


