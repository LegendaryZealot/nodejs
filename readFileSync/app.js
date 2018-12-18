var fs=require('fs')

var fileName='app.js'
var data=fs.readFileSync(fileName)
console.log(data.toString())
console.log('progrom is end')
