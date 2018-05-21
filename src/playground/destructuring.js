//Object destructing

// const person = {
//     name : 'Hanh',
//     age : 30, 
//     location : {
//         city: 'Seattle',
//         temp : 78
//     }
// };
// //setting defaults value if it doesn't exist . example. if name doesn't exist it will default to ananoymous 
// //can rename the data as well as set default 
// const { name: firstName = 'Anonymous', age } = person; 
// console.log(`${firstName} is ${age}.`);


// //temp: tempature - renaming the string using : 
// const {temp: temperature, city} = person.location;
// if(city && temperature){
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title : 'Ego is the Enemy',
//     author : 'Ryan Holiday',
//     publisher : {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName); // Penguin, if no name then use default , Self-Published

//Array Destructuring 
//use [] to destruture and naming variable is the order of the array 
// const address = ['1212 S. Junior Street', 'Seattle', 'Washington', '98307'];
// const [, city, state = 'Hawaii'] = address 
// console.log(`You are in ${city}, ${state}.`);


//Example excerise 
const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [drink, , mCost ] = item;
console.log(`A Medium ${drink} costs ${mCost}.`);