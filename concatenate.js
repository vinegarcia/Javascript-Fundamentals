const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Bobby';
const tags = 'Web design, Web Development and Programming';

let val;
//concatenation
// val = firstName + lastName;
// val = firstName + ' ' + lastName;
// //Append
// val = 'Bobby ';
// val += 'Ferrer';

// val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// //Escaping 
// val = "That's awesome, I can't wait"; // must be double quote for the word e.g that's, can't

// //Length
// val = firstName.length;

// //Concat
// val = firstName.concat(' ', lastName);

// //Change Case
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// val = firstName[2];

// //Index of
val = firstName.indexOf('l');
val = firstName.lastIndexOf('i');

// // charAt()
// val = firstName.charAt(0); //cn have qute or no sta the same
// //Get last char
// val =firstName.charAt(firstName.length-3);

// //substring
// // val = firstName.substring(0, 5);

// //slice
// val = firstName.slice(0, 5);
// val = firstName.slice(-3);

// //split()
// val = str.split(' ');
// val = tags.split(' '); // having space word by word if not by letter

// //replace
// val = str.replace('Bobby', 'Jack');

// //includes
// val = str.includes('Hello'); //if hello is include in the str?

console.log(val);
