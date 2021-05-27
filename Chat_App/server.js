require

const express = require('express'),
    app =  express(),
    cors = require('cors'),
    port = process.env.PORT,
    server = app.listen(port, () => console.log(`You are now listening on port: ${port}`));

app.use(cors());
app.use(express.json());

require('./server/config/mongoose.config');
require('./server/routes/chat.routes')(app);