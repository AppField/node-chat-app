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

socket.on('newLocationMessage', function (message) {
    console.log('newMessage', message);
    let li = $('<li></li>');
    let a = $('<a target="_blank">My current location</a>');
    li.text(`${message.from}: `);

    a.attr('href', message.url);
    li.append(a);
    $('#messages').append(li);
});

$('#message-form').on('submit', function (event) {
    event.preventDefault();
    // let from = $("[name='from']").val();
    let messageBox = $("[name='text']");

    socket.emit('createMessage', {
        from: 'User',
        text: messageBox.val()
    }, function () {
        messageBox.val('');
    });
});

let locationButton = $('#send-location');

locationButton.click(function () {
    if (!navigator.geolocation) {
        return alert('Geolocation not supported by your browsers');
    }

    locationButton.attr('disabled', 'disabled').text('Sending location...');

    navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position);
        locationButton.removeAttr('disabled').text('Sending location');
        socket.emit('createLocationMessage', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });
    }, function () {
        locationButton.removeAttr('disabled').text('Sending location');
        alert('Unable to fetch location');
    });
});