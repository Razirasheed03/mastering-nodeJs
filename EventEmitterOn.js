// const EventEmitter=require('events')
// const emitter=new EventEmitter

// emitter.on('greetFn',(name)=>{
//     console.log(`hello ${name}`)
// })

// emitter.emit('greetFn','razi')


function curry(a) {
    return function (b) {
        return a + b
    }
}
console.log(curry(10)(20))