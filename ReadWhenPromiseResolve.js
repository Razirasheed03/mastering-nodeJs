const fs=require('fs')

const m1=new Promise((resolve,reject)=>{
    resolve(fs.readFile('output.txt',(err,data)=>{
        console.log('read',data.toString())
    }))
})
