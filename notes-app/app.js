/**
 * import npm modules and internal modules
 */
const filesystem = require('fs')
const validator = require('validator');
const chalk = require('chalk');
const wsObj = require('./js/ws.js');
const utilityObj = require('./js//utility.js');

/**
 * test internal JS file/module 
 */
console.log('******************************** test internal JS file/module*********************************');
console.log(utilityObj.add(10000,900000000));
console.log(utilityObj.name);

/**
 *  test npm FileSystem module 
 */
console.log('******************************** test npm FileSystem module ***********************************');
filesystem.writeFileSync('./files/sync.txt', 'mideo');
filesystem.appendFileSync('./files/appendFileSync.txt', 'Mahmoud');

/**
 *  test npm Validator module 
 */
console.log('******************************** test npm Validator module ***********************************');
const isEmail = validator.isEmail('xx@test.com'); 
const url = validator.isURL('test.com');
console.log(isEmail);
console.log(url);
console.log(chalk.blue('Hello world!'));
//console.log(process.argv);

/**
 *  create json object and write it on internal file
 */
console.log('******************************** create json object and write it on internal file **************');
const book ={
    title: 'NodeJS',
    author: 'Mido'
}
const bookJSON = JSON.stringify(book);
console.log(bookJSON);
const parsedData = JSON.parse(bookJSON);
console.log(parsedData);
console.log(parsedData.author);
filesystem.writeFileSync('./files/1-json.json', bookJSON);

/**
 *  read json data from internal file 
 */
console.log('******************************** read json data from internal file **************');
const dataBuffer = filesystem.readFileSync('./files/1-json.json');
const dataJSON = dataBuffer.toString();
const dataParsed = JSON.parse(dataJSON);
console.log(dataParsed.title);

/**
 *  Read data from external web service (require.get)
 */
console.log('******************************** Read data from external web service (require.get) **************');
//wsObj.postData();
wsObj.getExternalWS("http://httpbin.org/ip");
wsObj.getExternalWS("https://jsonplaceholder.typicode.com/todos/1");

