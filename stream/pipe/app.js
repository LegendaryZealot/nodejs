var fs=require('fs')

var sourceFileName='app.js'
var dstFileName='app.js.copy'

var readStream=fs.createReadStream(sourceFileName)
var writeStream=fs.createWriteStream(dstFileName)
readStream.pipe(writeStream)
console.log('程序执行完毕')
