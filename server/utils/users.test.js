const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    let users;
    beforeEach(() => {
        users = new Users();
        users.users = [
            {
                id: '1',
                name: 'Mike',
                room: 'Node Course'
            },
            {
                id: '2',
                name: 'Jen',
                room: 'Angular'
            },
            {
                id: '3',
                name: 'Julie',
                room: 'Node Course'
            }
        ]
    });


    it('should add new user', () => {
        let user = {
            id: '4',
            name: 'Andrew',
            room: 'The Office'
        };
        let resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toInclude(user);
    });

    it('should remove a user', () => {
        let userId = '1';
        let user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        let userId = '99';
        let user = users.removeUser(userId);

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find a user', () => {
        let userId = '2';
        let user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find a user', () => {
        let userId = '99';
        let user = users.getUser(userId);

        expect(user).toNotExist();
    });

    it('should return names for node course room', () => {
        let userList = users.getUsersList('Node Course');

        expect(userList).toEqual(['Mike', 'Julie']);
    });

    it('should return names for angular room', () => {
        let userList = users.getUsersList('Angular');

        expect(userList).toEqual(['Jen']);
    });
});