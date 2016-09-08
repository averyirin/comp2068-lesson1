/**
 * Created by Chazaid on 08/09/2016.
 */
//link to the filesystem library for reading and writing
var fs = require('fs');

//open and read food list
var food = fs.readFileSync('food.txt','utf8');

console.log('FOOD');

console.log(food);
console.log('\n');

//link to the filesystem library for reading and writing
var fs = require('fs');

//open and read drink list
var drinks = fs.readFileSync('drinks.txt','utf8');

console.log('DRINKS');

console.log(drinks);
