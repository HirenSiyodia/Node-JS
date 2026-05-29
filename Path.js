const path = require('path');

const result = path.dirname('/Applications/Hiren_Siyodia/Daily-Practise/Node/Path.js')
console.log(result);

const extName = path.extname('/Applications/Hiren_Siyodia/Daily-Practise/Node/Path.js')
console.log(extName);

const baseName = path.basename('/Applications/Hiren_Siyodia/Daily-Practise/Node/Path.js')
console.log(baseName);

const parsePath = path.parse('/Applications/Hiren_Siyodia/Daily-Practise/Node/Path.js')

if (parsePath.name === 'Path') {
    console.log('This is the path file');
} else {
    console.log('This is not the path file');
}