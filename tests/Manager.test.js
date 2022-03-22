describe("intern", () => {
    const intern = {
        name: "Magdalena",
        id: 01,
        email: "intern@school.com",
        school: "University of Function",
    };
    it("should create a new intern with name, id, email, and school"), () => {
        expect(intern).toEqual({
            name: "Magdalena",
            id: 01,
            email: "intern@school.com",
            school: "University of Function",
        });
    }
})

