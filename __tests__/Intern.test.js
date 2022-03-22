
const Intern = require('../lib/Intern')
describe('Intern', () => {
    describe('init', () => {
        it('should require a school name', () => {
            const intern = new Intern('David', 2, 'davetron@gmail.com', 'UNCC');
            expect('school' in intern).toBe(true);

        });
    });


    describe("getSchool", () => {
        it('should return the school', () => {
            const intern = new Intern('David', 2, 'davetron@gmail.com', 'UNCC')
            expect(intern.getSchool()).toBe('UNCC');

        });
    });

});
            
        