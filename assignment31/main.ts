// Assignment 31

// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let userNames = ["Ali", "Adil", "Admin", "Umer", "Fahad"];

userNames = [];

if (userNames.length == 0) {
    console.log(" Array is Empty We need to find some users!");
}
else {userNames.forEach((name) => {
    if (name === "Admin") {
      console.log(`Hello ${name}, would you like to see a status report?`);
    }
    else {
      console.log(`Hello ${name}, thank you for logging in again.`);
    }
  })
  }