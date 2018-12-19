function sayHello(){
	console.log('hello')
}

var t=setTimeout(sayHello,2000)
clearTimeout(t)
