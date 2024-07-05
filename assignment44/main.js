// Assignment 44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function 
// should have one parameter that collects as many items as the function call provides, and it should print 
// a summary of the sandwich that is being ordered. Call the function three times, using a different number 
// of arguments each time.
function sandwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n Making a sandwich with the following items:");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log(" Now You can Enjoy  your Sandwich🥪");
}
sandwiches("Chicken Patty", "Bread", "Mayo", "ketchup");
sandwiches("Bread", "Jam");
sandwiches("Cheese", "Tomato", "Onion", "Lettuce", "Pickles");
