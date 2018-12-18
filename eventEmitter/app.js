var events=require('events')
var eventEmitter=new events.EventEmitter()
eventEmitter.on('testName',()=>{
   console.log('emited!')
})
eventEmitter.emit('testName')
