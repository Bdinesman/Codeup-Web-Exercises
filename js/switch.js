// ignore these lines for now
// just know that the variable 'color' will end up with a random value from the colors array
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

switch(color){
	case('red'):
		console.log("Ruby for vigor");
		break;
	case('orange'):
		console.log("Tangerine dream");
		break;
	case('yellow'):
		console.log("Parallax");
		break;
	case('green'):
		console.log("Emerald for insight");
		break;
	case('blue'):
		console.log("Sapphire for vigor");
		break;
	default:
		console.log("I do knot know anything by that color");
}
color == ('red') ? console.log("Red is my favorite color"):console.log("Guess again");

// TODO: Create a block of if/else statements to check for every color except indigo and violet.
// TODO: When a color is encountered log a message that tells the color, and an object of that color.
//       Example: Blue is the color of the sky.

// TODO: Have a final else that will catch indigo and violet.
// TODO: In the else, log: I do not know anything by that color.

// TODO: Using the ternary operator, conditionally log a statement that
//       says whether the random color matches your favorite color.