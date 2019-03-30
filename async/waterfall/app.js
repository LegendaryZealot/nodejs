// var fs    = require("fs")
// var async = require("async")

// function test(path,callback){
//     async.waterfall([
//         function(callback){
//             fs.open(path,"r",callback)
//         },
//         function(f,callback){
//             fs.stat(path,function(err,status){
//                 if(err){
//                     callback(err)
//                     return
//                 }
//                 callback(null,f,status)
//             })
//         },
//         function(f,status,callback){
//             if(status.isFile()){
//                 var b=Buffer.alloc(10000)
//                 fs.read(f,b,0,10000,null,function(err,content){
//                     if(err){
//                         callback(err)
//                         return
//                     }
//                     callback(null,f,b.toString())
//                 })
//                 return
//             }
//             callback({
//                 err:"not a file",
//                 message:"no such file:"+path
//             })
//         },
//         function(f,content,callback){
//             fs.close(f,function(err){
//                 if(err){
//                     callback(err)
//                     return
//                 }
//                 callback(null,content)
//             })
//         }
//     ],
//     function(err,content){
//         callback(err,content)
//     })
// }

// test("./app.js",(err,content)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(content)
// })

// test("./sth.js",(err,content)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(content)
// })

console.log("===========waterfall===========");
var async = require('async');
    var task1 =function(callback){
		console.log("task1");
		callback(null,"task1")
	}
	var task2 =function(temp,callback){
		console.log("task2");
		console.log("task1函数传入的值: "+temp);
		callback(null,"task2")
	}
	var task3 =function(temp,callback){
		console.log("here is task3");
		console.log("from  task2: "+temp);
		callback(null,"task3result")
	}
	console.time("waterfall方法");
	async.waterfall([task1,task2,task3],function(err,result){
		console.log("waterfall");
		if (err) {
			console.log(err);
		}
		console.log("result : "+result);
		console.timeEnd("waterfall方法");
	})