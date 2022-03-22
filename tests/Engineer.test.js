const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('init', () => {
        it('should require a name,  id, and email', () => {
            const engineer = new Engineer('Magdalena', 1, 'mageltron@gmail.com');

            expect('name' in engineer).toBe(true);
            expect('id' in engineer).toBe(true);
            expect('email' in engineer).toBe(true);

        });
    });


    describe("getName", () => {
        it('should return the name of the Engineer', () => {
            const engineer = new Engineer('Magdalena', 01, 'mageltron@gmail.com')
            expect(engineer.getName()).toBe('Magdalena');

        });
    });



    describe("getId", () => {
        it('should return the id of the Engineer', () => {
            const engineer = new Engineer('Magdalena', 01, 'mageltron@gmail.com')
            expect(engineer.getId()).toBe(01)
        });
    });


    
    describe("getRole", () => {
        it('should return the name of the Engineer', () => {
            const engineer = new Engineer('Magdalena', 01, 'mageltron@gmail.com')
            expect(engineer.getRole()).toBe('mageltron@gmail.com')
        });
    });





});