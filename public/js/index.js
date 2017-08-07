const socket = io();

socket.on('connect', function () {
    console.log('New server connected  ');
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
    console.log('newMessage', message);
    let li = $('<li></li>');
    li.text(`${message.from}: ${message.text}`);
    $('#messages').append(li);
});

// socket.emit('createMessage', {
//     from: 'Frank',
//     text: 'Hi'
// }, function (data) {
//     console.log(data);
// });

$('#message-form').on('submit', function (event) {
    event.preventDefault();
    // let from = $("[name='from']").val();
    let text = $("[name='text']").val();

    socket.emit('createMessage', {
        from: 'User',
        text: text
    }, function (data) {
        console.log('message send');
    });
});