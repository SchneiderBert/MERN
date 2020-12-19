const mongoose = require("mongoose");

 mongoose.connect("mongodb://mongo:27017/algodb",{
     useNewUrlParser: true, 
     useUnifiedTopology: true
 })
 .then(()=> console.log("You are now connected to the Algorithm Generator Database"))
 .catch(err => console.log(`I am sorry, we have encountered an error: ${err}`));