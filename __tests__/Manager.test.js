const Manager = require('../lib/Manager')
describe('Manager', () => {
    describe('init', () => {
        it('should require an office number', () => {
            const manager = new Manager('Brad', 4, 'bradsies@gmail.com', 42069);
            expect('officeNumber' in manager).toBe(true);
        });
    });
});