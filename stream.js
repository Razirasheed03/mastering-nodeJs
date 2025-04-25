const fs=require('fs')
const writable=fs.createWriteStream('streamdata.txt')
writable.write('data written from stream.js file')
writable.end