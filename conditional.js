// // if(something){
//     do something
// } else {
//     do something else
// }

const id = 100;

// //equal to
// if(id == 100){
//     console.log('Correct');
// } else {
//     console.log('Incorrect');
// }

// // not equal to
// if(id != 101){
//     console.log('Correct');
// } else {
//     console.log('Incorrect');
// }
// //not equal to value & type
// if(id !== 100){
//     console.log('Correct');
// } else {
//     console.log('Incorrect');
// }

//Test if undefined
// if(typeof id === 'undefined') {
//     console.log('The ID is $(id)');
// }else{
//     console.log('No ID');
// }

// if(id <= 100) {
//         console.log('Correct');
//     }else{
//         console.log('Incorrect');
//     }

const color = 'yellow';

//IF ELSE
if(color === 'red') {
            console.log('color is red');
        }else if(color === 'blue'){
            console.log('color is blue');
        } else {
            console.log('color is not red or blue');
        }

//Logical operators
const name = 'Steve';
const age = 70;

//AND &&
if(age > 0 && age < 12){
    console.log(`${name} is a child`);
} else if(age >=13 && age <=19) {
    console.log(`${name} is a teenager`);
}else {
    console.log(`${name} is a adult`);
}

//OR ||
if(age <= 16 || age > 65){
    console.log(`${name} can not run in race`);
}else {
    console.log(`${name} is registered for the race`);
}

//ternary operator
console.log(id === 100 ? 'Correct' : 'Incorrect');

//Without braces
if(id === 100)
    console.log('Correct');
else
    console.log('Incorrect');



