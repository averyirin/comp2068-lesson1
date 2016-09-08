/**
 * Created by Chazaid on 08/09/2016.
 */
//link to the filesystem library for reading and writing
var fs = require('fs');


//open and read food list
var food = fs.readFile('food.txt','utf8',function (err,food) {
    //print list when done
    if(err)
        console.log(err);
    else{
        console.log('FOOD');
        console.log(food);
        console.log('\n');
    }
});


//link to the filesystem library for reading and writing
var fs = require('fs');

//open and read drink list
var drinks = fs.readFile('drinks.txt','utf8',function (err,drinks) {
    if(err)
        console.log(err);
    else{
        console.log('DRINKS');
        console.log(drinks);
    }
});


