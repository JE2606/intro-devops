const { exec } = require("child_process");

test("Ejecuta el programa y muestra 'Hola Mundo'", (done) => {
    exec("node index.js", (error, stdout) => {
        expect(stdout.trim()).toBe("Hola Mundo");
        done();
    });
});
