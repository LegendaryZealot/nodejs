var events=require('events')
var emitter=new events.EventEmitter()

var eventName='testEventName'
emitter.on(eventName,(arg1)=>{
   console.log('handler1')
   console.log(arg1)
})
emitter.on(eventName,function (arg1,arg2){
   console.log('handler2')
   console.log(arg1)
   console.log(arg2)
})
var handler=function(){console.log('handler3')}
emitter.on(eventName,handler)

emitter.emit(eventName,'arg1','arg2')
