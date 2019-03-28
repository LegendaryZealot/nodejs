var fs    = require("fs")
var async = require("async")

function test(path,callback){
    async.waterfall([
        function(callback){
            fs.open(path,"r",callback)
        },
        function(f,callback){
            fs.stat(path,function(err,status){
                if(err){
                    callback(err)
                    return
                }
                callback(null,f,status)
            })
        },
        function(f,status,callback){
            if(status.isFile()){
                var b=Buffer.alloc(10000)
                fs.read(f,b,0,10000,null,function(err,content){
                    if(err){
                        callback(err)
                        return
                    }
                    callback(null,f,b.toString())
                })
                return
            }
            callback({
                err:"not a file",
                message:"no such file:"+path
            })
        },
        function(f,content,callback){
            fs.close(f,function(err){
                if(err){
                    callback(err)
                    return
                }
                callback(null,content)
            })
        }
    ],
    function(err,content){
        callback(err,content)
    })
}

test("./app.js",(err,content)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(content)
})

test("./sth.js",(err,content)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(content)
})