function func(){
	var a=0;
	return function(){
		a++
		return a
	}
}

var test=func()

console.log(test())
console.log(test())

