//FOR LOOP
// for(let i = 0; i < 10; i++) {
//     if(i === 2) {
//         console.log('2 is my favorite number');
//         continue;
//     }

//     if(i===5) {
//         console.log('Stop the loop');
//         break;
//     }
    

//     console.log('Number ' + i);
// }

// while loop

// let i = 0;

// while (i < 10) {
//     console.log('Number ' + i);
//     i++;
// }

//do while loop

//  let i = 1;

//  do{
//      console.log('Number ' +i);
//      i++;
//  }

// while(i < 10);

// const cars = ['Ford', 'Chavy', 'Honda', 'Toyota'];

// for(let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }

// cars.forEach(function(car, index, array){
//     console.log(`${index} : ${car}`);
//     console.log(array);
// });

// Map
// const users = [{id: 1, name: "John"}, {id: 2, name: 'Sara'}, {id: 3, name: 'Steve'}];

// const ids = users.map(function(user){
//     return user.id;
// });

// console.log(ids);

//FOR IN LOOP
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}

for(let x in user) {
    console.log(`${x}: ${user[x]}`);
} 