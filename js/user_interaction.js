// todo: Ask the user for their name.
//       Keep asking if an empty input is provided.

// todo: Show an alert message that welcomes the user based on their input.

// todo: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.
var name = prompt("What is your name?");
while(name==""){
	name = prompt("What is your name?");
}
var hello = alert("Welcome, "+ name);
var pizza = confirm(name + ", do you like pizza?");
if(pizza){
	alert("Of course you do!");
}else{
	alert("No need to lie to me");
}