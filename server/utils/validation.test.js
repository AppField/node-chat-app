const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {

    it('should reject non-string values', () => {
        let res = isRealString(123);
        expect(res).toBe(false);
    });

    it('should reject string with only spaces', () => {
        let res = isRealString('       ');
        expect(res).toBe(false);
    });

    it('should allow string with non-space characters', () => {
        let res = isRealString('Real string!');
        expect(res).toBe(true);
    });

});