(function(){
var myNameIs = 'Brandon'; // todo: Fill in your name here.
function sayHello(name){
	console.log(name + " says hello.");
}
sayHello(myNameIs);

// todo:
// Create a function called 'sayHello' that takes a parameter 'name'.
// When called, the function should log a message that says hello from the passed in name.

// todo: Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.

// do not worry about the details of this line
// just know that it generates a random number between 1 and 100
var random = Math.floor((Math.random()*100)+1);
function isOdd(number){
	if(number%2==0){
		return false;
	}else{
		return true;
	}
}
isOdd(random) == true? console.log("The number " + random + " is odd.") : console.log("The number " + random + " is even.")
})();

// todo:
// Create a function called 'isOdd' that takes a number as a parameter.
// The function should use the ternary operator to log a message.
// The log should tell the number passed in and whether it is odd or not.

// todo: Call the function 'isOdd' passing the variable 'random' as a parameter.