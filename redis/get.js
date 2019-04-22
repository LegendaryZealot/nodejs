var redis = require('redis');

var client = redis.createClient(6379,'localhost');

client.get('hello',function (err,v) {
  if(err){
    console.log(err)
    return
  }
  console.log("redis get :",v);
})

