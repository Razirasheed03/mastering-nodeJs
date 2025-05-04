const { fork } = require('child_process')
const child = fork('./child.js')

child.on('message', (msg) => {
    console.log('message from child:', msg)
})
child.send('hii from parent')