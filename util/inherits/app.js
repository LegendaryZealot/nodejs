var util=require('util')

function base(){
   this.name='base'
   this.age=11
   this.sayHello=function(){
      console.log('hello')
   }
   console.log(this.name)
}

base.prototype.showName=function(){
   console.log(this.name)
}

function sub(){
   this.name='sub'
}

util.inherits(sub,base)

var baseObj=new base()
var subObj=new sub()

console.log(baseObj)
baseObj.showName()
baseObj.sayHello()

console.log(subObj)
subObj.showName()
subObj.sayHello()

