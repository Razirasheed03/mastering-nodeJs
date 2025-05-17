const fs=require('fs')
const writable=fs.createWriteStream('streamdata.txt')
writable.write('data written from stream.js file')
writable.end


const readable=fs.createReadStream('streamdata.txt')
readable.on('data',(data)=>{
    console.log('datas from streamdata reading : ',data.toString())
})

const readStream=fs.createReadStream('streamdata.txt')
const writeStream=fs.createWriteStream('sample.txt')

readStream.pipe(writeStream)

//////copied data from the readfile and pasted in writefile