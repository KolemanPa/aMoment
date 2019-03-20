// All the stuff to make the NPM's Work
var moment = require("moment");
const chalk = require('chalk');
require("moment");

// Formats the three variables a,b,c and assigns a real time value
// var a = moment().format('HH');
var c = moment().format('dddd');
var b = moment().format('HH:MM:s a')
console.log(`The Time is ${b} on a ${c}`);
var a = 27;
time();

// If statements to determine what time it is
function time(){
if (a > 0 && a < 12){
    console.log(chalk.red.underline.bgWhite("Good Moring"));
}
else if (a >=12 && a < 17){
    console.log(chalk.blue.underline.bgGreen("Good Afternoon"));
}
else if (a >=17 && a <24){
    console.log(chalk.yellow.underline.bgBlack("Good night"));
}else{
    console.log(chalk.red.bold.underline.bgBlack("ERROR"))
}
}