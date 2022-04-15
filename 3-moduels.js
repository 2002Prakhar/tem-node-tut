//CommonJS - everyfile is module (by default)
//Modules - Encapsulated code (Only Shares Minimum)
 
const names = require("./4-names");
const sayHi = require("./5-util");

const data = require('./6-alternative');

//Even if we do not assign this to a variable function inside this will
//execute  
//When you import a module actually you invoke it 
require('./7-mind-greanade');

// sayHi("Susan");
// sayHi(names.john);
// sayHi(names.peter);
