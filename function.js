// FUNCTION DECLARATION
// it is declaration if having a word function followed function declaration. Declaring the function
// if method you should put ()
// return to return the value
//backtilt for accessing variable


// function greet(firstName = 'John', lastName = 'Doe') {
//     if(typeof firstName === 'undefined'){
//             firstName = 'John';
//     }

//     if(typeof lastName === 'undefined'){
//             lastName = 'Doe';
//     }

//     console.log('Hello');
//     // return 'Hello ' + firstName + ' ' + lastName;
//     return `hello ${firstName} ${lastName}`;
// }
// console.log(greet());


// FUNCTION EXPRESSIONS
// because you equal  the function in the variable
// const square = function(x =3) {
//     return x * x;
// }
// console.log(square());

// //Immediately Invokable function expression = IIFE'S
// (function(){
//     console.log('IIFE Ran..');
// })();

(function(name){
    console.log('Hello  ' + name);
})('bob');

//Property method

const todo = {
    add: function() {
        console.log('add todo..');
    },
    edit: function(id) {
        console.log(`Edit todo ${id}`);
    }
};

todo.delete = function() {
    console.log('Delete todo');

}
todo.add();
todo.edit(22);
todo.delete();
