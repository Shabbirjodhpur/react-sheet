const fs = require('fs');
const data = fs.readFileSync('readme.md', 'utf8');

var md = require('markdown-it')()
var result = md.render(data);

fs.writeFile("readme.html",result,err=>console.log(err) ); 