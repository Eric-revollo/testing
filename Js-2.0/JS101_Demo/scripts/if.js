////various if statements and examples
///simple if 
let year = prompt('what year is it?');
if (year == 2019) alert('Indeed it is');

///various statements
if (year == 2019) {
	alert('Indeed it is');
	alert('but not for long');
}

/// and now and if and else
let number = prompt('I say 10, you say...');

if (number > 10) {
	alert('Your number is higher');
	}else{
	alert('Your number is equal or lower');	
}

/// if with alert prompt and confirm
let ask = confirm('Want to answer a question?');
if (ask === false) {
	alert('Oh well, thanks anyways');
}else{
	alert('Thanks for your help');
	let quest = prompt("What's your name?");
	alert('Great it looks like you are' + " " + quest);
}

///making it easier with functions
function asker() {
	alert('Thanks for your help');
	let quest = prompt("What's your name?");
	alert('Great it looks like you are' + " " + quest);
}

let ask = confirm('Want to answer a question?');
if (ask===false){
	alert('Oh well, thanks anyways');	
}else{
asker();	
}
