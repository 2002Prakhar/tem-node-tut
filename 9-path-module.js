const path = require('path');

const filepath = path.join('/content','subfolder','test.txt');
console.log(filepath);


//returns last file or folder present 
const basenName = path.basename(filepath);
console.log(basenName);

const extname = path.extname(filepath);
console.log(extname);