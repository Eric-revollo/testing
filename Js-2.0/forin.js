///for in loops and examples
/// structure for (key in object) {}
let user = {
	name : "Joe",
	age : 30,
	isAdmin : true,
	lacat : "over there"
};

let check = prompt("what name?","");

function finder(check) {

	for (let key in user) {
		if (check == user[key]) {
		alert("Yes"); 
		
		}//name, age, isAdmin
		
		
	}

}

finder(check);