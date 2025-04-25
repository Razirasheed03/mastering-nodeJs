const EventEmitter=require('events')
const emitter=new EventEmitter

emitter.on('greetFn',(name)=>{
    console.log(`hello ${name}`)
})

emitter.emit('greetFn','razi')