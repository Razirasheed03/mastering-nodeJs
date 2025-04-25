const fs=require('fs')

fs.writeFile('sample.txt','this is the sample test shared from fs1 readfile',(err)=>{
    if(err){
        console.log('error got')
    }else{
        console.log('file written success')
    }
})

fs.readFile('sample.txt','utf8',(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log('data from sample page :',data)
    }
})
