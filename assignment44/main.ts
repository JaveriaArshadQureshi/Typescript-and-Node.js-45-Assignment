// Assignment 44

// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function 
// should have one parameter that collects as many items as the function call provides, and it should print 
// a summary of the sandwich that is being ordered. Call the function three times, using a different number 
// of arguments each time.

function sandwiches(...items: string[]) {
    console.log("\n Making a sandwich with the following items:");
    items.forEach(singleItem => console.log(singleItem));

    console.log(" Now You can Enjoy  your Sandwich🥪");


}

sandwiches("Chicken Patty", "Bread", "Mayo", "ketchup");

sandwiches("Bread", "Jam");

sandwiches("Cheese", "Tomato", "Onion", "Lettuce", "Pickles");

