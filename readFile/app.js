var fs=require('fs')

var fileName='app.js'
fs.readFile(fileName,function(err,data){
   if(err){
      console.log(err)
      return  
   }
   console.log(data.toString())
})
console.log('read is emited!')
