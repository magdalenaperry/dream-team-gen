
const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('init', () => {
        it('should require a GitHub username', () => {
            const engineer = new Engineer('Magdalena', 1, 'mageltron@gmail.com', 'magdalenaperry');
            expect('github' in engineer).toEqual(true);

        });
    });


    describe("getGithub", () => {
        it('should return the GitHub username', () => {
            const engineer = new Engineer('Magdalena', 1, 'mageltron@gmail.com', 'magdalenaperry')
            expect(engineer.getGithub()).toEqual('magdalenaperry');

        });
    });

});