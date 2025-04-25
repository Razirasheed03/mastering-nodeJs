const fs=require('fs')
const data=fs.readFileSync('asyncSample.txt')
console.log(data) //////this is buffered data
console.log(data.toString())  /////this is readable data