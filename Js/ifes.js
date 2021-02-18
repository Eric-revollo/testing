///This is a sample of how if statements work on JS.
///set a message and get value
let year = prompt("In which year was it published?");
///if statement plus what happens if true should go between curly brackets
if(year==2015) {alert("that is correct!");}

///you can also have else statements
//if(year==2016){
//alert("Ok I guess");
//}else {
//alert("try again");	
///}

/// we can also use else if statememts
if (year < 10) {
	alert("too low");
} else if (year > 10) {
	alert("too high");
} else {
	alert("on point!");
}