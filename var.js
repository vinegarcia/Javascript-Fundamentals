// var, let, const

// var name = 'John Doe';

// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // Init var
// var greeting;
// console.log(greeting);
// greeting = 'hello';
// console.log(greeting);

// //letters, numbers, _, $
// //Can not start with number

// //Multi word vars
// var firstName = 'John'; //Camel Case
// var first_name = 'Sara'; //underscore
// var FirstName = 'Tom'; // Pascal Case

//LET 
// let name;
// name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

//CONST
const name = 'John';
console.log(name);
// // Cannot reassign
// name = 'sara';

const person = {
    name: 'John',
    age: 30

}

person.name ='Sara';
person.age ='12';

//console.log(person.age);

const numbers = [1,2,3,4,5];
numbers.pop();
numbers.push(6);

console.log(numbers);