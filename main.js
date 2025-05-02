const {Worker}=require('worker_threads')
const worker=new Worker('./worker.js')

worker.on('message',(data)=>{
    console.log('message from worker',data)
})
worker.postMessage(10)