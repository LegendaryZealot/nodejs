var fs=require('fs')

var data=''
var fileName='app.js'

var readStream=fs.createReadStream(fileName)
readStream.setEncoding('UTF8')
readStream.on('data',(chunk)=>{
   data+=chunk
})
readStream.on('end',()=>{
   console.log(data)
})
readStream.on('error',(err)=>{
   console.log(err.stack)
})
console.log('程序执行完毕')
