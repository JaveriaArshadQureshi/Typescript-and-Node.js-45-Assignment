//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. 
//Then compose your message and store it in a new variable called message. Print your message.
var famous_person = "Allama Iqbal";
var message = "once said, “Raise yourself to such heights, that before every decree, God himself asks, what is your wish?” \n";
// with template literals.
console.log("".concat(famous_person, " ").concat(message));
// with concatenation.
console.log(famous_person + message);
