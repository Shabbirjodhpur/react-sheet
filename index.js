const fs = require('fs');
const data = fs.readFileSync('react.md', 'utf8');

var md = require('markdown-it')()
var result = md.render(data);

fs.writeFile("react.html",result,err=>console.log(err) ); 