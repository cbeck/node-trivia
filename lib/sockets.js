var io = require('socket.io')

exports.start = function(app){
    socket = io.listen(app);
    socket.on('connection', function(client){
        client.on('message', function(data){});
    });
};
