// console.log(moment().format('dddd'));

var moment = require("moment");

const chalk = require('chalk');



require("moment");
var a = moment().format('HH');
var c = moment().format('dddd');
var b = moment().format('HH:MM:s a')
console.log(`The Time is ${b} on a ${c}`);

if (a > 0 && a < 12){
    console.log(chalk.red("Good Moring"));
}
if (a >=12 && a < 17){
    console.log(chalk.blue("Good Afternoon"));
}
if (a >=17 && a <24){
    console.log(chalk.yellow("Good night"));
}