// const {
//     expect
// } = require('@jest/globals');
const Intern = require('../lib/Intern')
describe('Intern', () => {
            describe('init', () => {
                    it('should require a name,  id, and email', () => {
                        const intern = new Intern('David', 02, 'davetron@gmail.com');

                        expect('name' in intern).toBe(true);
                        expect('id' in intern).toBe(true);
                        expect('email' in intern).toBe(true);

                        describe("getName", () => {
                            it('should return the name of the Intern', () => {
                                const intern = new Intern('David', 02, 'davetron@gmail.com')
                                expect(intern.getName()).toBe('David');

                            });
                        });

                        describe("getId", () => {
                            it('should return the id of the Intern', () => {
                                const intern = new Intern('David', 02, 'davetron@gmail.com')
                                expect(intern.getId()).toBe(02)
                            });
                        });

                        describe("getRole", () => {
                            it('should return the name of the Intern', () => {
                                const intern = new Intern('David', 02, 'davetron@gmail.com')
                                expect(intern.getRole()).toBe('davetron@gmail.com')
                            });
                        });





                    })
})})