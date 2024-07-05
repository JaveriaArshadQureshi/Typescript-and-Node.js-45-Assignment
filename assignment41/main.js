// Assignment 41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//  which prints the name of each magician in the array.
var magicians = ["David Copperfield", "Doug Henning", "Lance Burton"];
function show_magicians(magicians) {
    magicians.forEach(function (name) {
        console.log(name);
    });
}
show_magicians(magicians);
