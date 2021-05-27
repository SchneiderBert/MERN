const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/chatdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Welcome, you are now connected to the Chat App Database"))
.catch(err => console.log(`Hmm, it seems that we have encountered an error: ${err}`))
