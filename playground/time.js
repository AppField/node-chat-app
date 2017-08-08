const moment = require('moment');


// const date = moment();

// date.add(100, 'year').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));


// Jan 1st 1970 00:00:00 am
// let date = new Date();
// console.log(date.toLocaleDateString());

let createdAt = 123;
let date = moment(createdAt);

console.log(date.format('H:mm a'));