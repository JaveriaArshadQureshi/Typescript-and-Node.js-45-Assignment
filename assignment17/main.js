"use strict";
//Assignment 17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have 
// space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only 
// two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from 
// your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually 
// have an empty list at the end of your program.
// creating a guest list array.
let guestList = ["Fatima", "Ayesha", "Ali", "Saad"];
// making variable for those guest who cant come.
let replaceGuest = guestList[0];
//print the name of guest who cant list array
console.log(replaceGuest, "is not come");
//add 
guestList.splice(0, 1, "Sadia");
guestList.unshift("Mahnoor");
guestList.push("Zain");
let middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Saadia");
console.log("\n \t Updated Guestlist is Here \t \n");
guestList.forEach(guest => console.log(`Assalam-u-Alaikum ${guest}, would you like to have dinner with us?`));
// inform that only two guest can be invited for dinner
console.log("Unfortunately, the new dinner table won't arrive on time,so I can only invite two Guest to dinner with me. ");
//using while loop to remove guest from until two are remainning.
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest} I can't invite you to dinner`);
}
// seeding inviatation to last two guests 
console.log("Inviatation to last two Guests");
guestList.forEach(lastTwo => console.log(`luckly inviatated ${lastTwo} for dinner.`));
//removing two two guests from list.
guestList.pop();
guestList.pop();
console.log("Empty list :", guestList);
