const helloWorld = require('./index');

test("Debería retornar 'Hola Mundo'", () => {
    expect(helloWorld()).toBe("Hola Mundo");
});
