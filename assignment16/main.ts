// Assignment 16

//16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people 
// that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.

// • Use append() to add one new guest to the end of your list.

// • Print a new set of invitation messages, one for each person in your list.

// creating a guest list array.
let guestList :string[] = ["Fatima","Ayesha","Ali","Saad"];

// making variable for those guest who cant come.
let replaceGuest : string = guestList[0];

//print the name of guest who cant list array
console.log(replaceGuest, "is not come");

//add 
guestList.splice(0, 1, "Sadia");

guestList.unshift("Mahnoor");

guestList.push("Zain");

let middleIndex :number = Math.floor(guestList.length / 2);

guestList.splice(middleIndex, 0, "Saadia");

console.log("\n \t Updated Guestlist is Here \t \n");

guestList.forEach(guest =>console.log(`Assalam-u-Alaikum ${guest}, would you like to have dinner with us?`));