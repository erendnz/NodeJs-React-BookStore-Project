var app = require('./config/express');

var port = parseInt(process.env.SERVER_PORT) || 3000;
    
app.listen(port, function(){
    console.log('Server is running on Port' + port);
})