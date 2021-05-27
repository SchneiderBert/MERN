const express = require("express"),
    app = express(),
    port = 8000,
    cors = require("cors"),
    server = app.listen(port, () => console.log(`You are now listening on port:${port}`));


// Middleware
app.use(cors());
app.use(express.json());

// View Engine(for email)
app.set("view-engine", "ejs")

require('./server/config/mongoose.config');
require('./server/routes/algo.routes')(app);