const filesystem = require('fs')
filesystem.writeFileSync('sync.txt', 'mideo');
filesystem.appendFileSync('appendfilesync.txt', 'Mahmoud');

const data = require('./utility.js');
console.log(data(2,3));

const validator = require('validator');
const isEmail = validator.isEmail('xx@test.com'); 
const url = validator.isURL('test.com');
console.log(isEmail);
console.log(url);


const chalk = require('chalk');
console.log(chalk.blue('Hello world!'));
