const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        let from = 'Admin';
        let text = 'Welcome';

        const message = generateMessage(from, text);
        expect(message).toInclude({
            from, text
        });
        expect(message.createdAt).toBeA('number');
    });
});

describe('generateLocationMessage', () => {

    it('should generate correct location message object', () => {
        let from = 'Admin';
        let lat = '43';
        let lng = '42';
        let url = `https://www.google.at/maps?q=${lat},${lng}`;
        const message = generateLocationMessage(from, lat, lng);
        expect(message).toInclude({
            from,
            url
        });
        expect(message.createdAt).toBeA('number');
    });
});