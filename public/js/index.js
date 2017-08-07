const socket = io();

socket.on('connect', function () {
    console.log('New server connected  ');

    socket.emit('createMessage', {
        from: 'me',
        to: 'Lisa',
        text: 'Hey, this is socket.io'
    })
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newEmail', function (email) {
    console.log('New Email', email);
});

socket.on('newMessage', function (message) {
    console.log('newMessage', message);
});