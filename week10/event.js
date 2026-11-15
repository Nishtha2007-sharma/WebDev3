// Import eventEmitter class from events module
const EventEmitter = require("events");

// ee object
var ee = new EventEmitter()

ee.on ("hello", () => { // yaha kuch catch hi nai kiya 
    console.log("krmu");
})
//Handeling / Read
// on => method name, message => Event Name
ee.on('message', function (text) {
    ee.emit ("hello", "welcome") 
  console.log(text)
})
ee.emit('message', 'hello world')

//