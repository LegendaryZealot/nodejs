var fs = require("fs");
var zlib = require('zlib');

// 压缩 app.js 文件为 app.js.gz
fs.createReadStream('app.js')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('app.js.gz'));
  
console.log("文件压缩完成。")

setTimeout(()=>{
   fs.createReadStream('app.js.gz')
   .pipe(zlib.createGunzip())
   .pipe(fs.createWriteStream('app.js.ungz'));
   console.log("文件解压完成。");
},1000)  
