///Examples on making and using objects goes bellow

///let user = new Object(); //obj constructor syntax
//objt literal syntax
let user = {
	name : "Joe",
	age : 30
}; 

///getting the info from there ^^^
//user.time = "clovering";

/* alert(user.name);
alert(user.age);
alert(user.time); */

let key = prompt("what thou seek?", "name");

///get to the var
alert(user[key]);

let fruit = prompt("what fruit?", "apple");

let bag ={
	[fruit]: 5,	
};
alert(bag.apple);

////short handleEvent

function makeUser(name, age) {
	return {
		name: name,
		age: age
	};
}

let users = makeUser("John", 30);
alert(users.name);
	
