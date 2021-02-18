///? to assign a variable depending on condition.
///let result = condition ? value1 : value2;
let age = prompt('age?', 18);
let message = (age < 3  ) ? 'hi tiny' :
 (age < 18) ? "need to see an ID" :
 (age < 100) ? "Greetings" :
 "what an unusual age";
 
 alert(message);
