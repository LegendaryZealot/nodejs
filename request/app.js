var https = require('https');  

var qs = require('querystring');  

var data = {
    grant_type:'grant_type',
    appid:'appid',
    secret:'secret',
    js_code:'js_code'
};

var content = qs.stringify(data);

var options = {  
    hostname: 'api.weixin.qq.com',  
    port: 443, 
    path: '/sns/jscode2session?'+content,
    method: 'GET'  
};  
  
var req = https.request(options, function (res) {  
    console.log('STATUS: ' + res.statusCode);  
    console.log('HEADERS: ' + JSON.stringify(res.headers));  
    res.setEncoding('utf8');
    var str=''
    res.on('data', function (chunk) {  
        console.log('data')
        str+=chunk
    })
    res.on("end",function(){
        console.log('end')
        console.log(str)
    })
});  
  
req.on('error', function (e) {  
    console.log('problem with request: ' + e.message);  
});  
  
req.end();