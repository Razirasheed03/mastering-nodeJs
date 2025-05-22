const fs=require('fs')
const m1=new Promise((resolve,reject)=>{
    resolve(fs.writeFile('output.txt','data written',()=>{
        console.log('success')
    }))
})