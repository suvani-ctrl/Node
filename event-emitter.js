const EventEmitter = require('events')
const customEmitter = new EventEmitter()

customEmitter.on('response', (name,id) =>
{
    console.log(`data recieved! ${name} with id:${id}`)
})
customEmitter.on('response', (name,id) =>
{
    console.log(`data recieved 2`);
})

customEmitter.emit('response', 'john',34)
