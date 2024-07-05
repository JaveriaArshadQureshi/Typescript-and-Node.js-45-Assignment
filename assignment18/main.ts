// Assignment 18

// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

//  Making Array of countries to visit.
let countriesToVisit: string[] =["Saudi Arabia", "Qatar", "Dubai", "Oman"]

// printing the original order of the array.
console.log("Original Order:", countriesToVisit);

// printing the alphabetical order of the array without modifying the actual list.
console.log("Alphabetical Order :", [...countriesToVisit].sort());

// printing the array still in its original array.
console.log("Still in its Original Order:", countriesToVisit);

// printing the reverse alphabetical order of the array without changing the order of the original list.
console.log("Reverse Alphabetical Order:", [...countriesToVisit].reverse());

// printing the array still in its original array.
console.log("Still in its Original Order:", countriesToVisit);

// reversing the order of original array.
console.log("Reverse Order of Original Array:", countriesToVisit.reverse());

// reversing the order of the array again to get original order.
console.log("Reverse Order:", countriesToVisit.reverse());

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Asort in Alphabetical Order:", countriesToVisit.sort());

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Reverse Alphabetical Order:", countriesToVisit.reverse());