process.on('message',(msg)=>{
    console.log('message from parent:',msg)
})
process.send('hii from child')