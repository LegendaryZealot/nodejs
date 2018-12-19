var fs=require('fs')

var data='this is a test.'
var fileName='test.ini'

var writeStream=fs.createWriteStream(fileName)
writeStream.write(data,'UTF8')
writeStream.end()

writeStream.on('finish',()=>{
   console.log('write done')
})
writeStream.on('error',(err)=>{
   console.log(err.stack)
})

console.log('程序执行完了')
