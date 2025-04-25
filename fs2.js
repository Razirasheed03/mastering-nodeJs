const fs=require('fs')

try {
    fs.writeFileSync('asyncSample.txt','this data from fs2 write file sync')
    console.log('successfully printed')
} catch (error) {
    console.log(error)
}

try{
    const data=fs.readFileSync('asyncSample.txt','utf-8')
    console.log('data printed:',data)
}catch(error){
    console.log(error)
}