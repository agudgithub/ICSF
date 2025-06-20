// tests/user.test.js
const { registerUser } = require("../src/user");

test("Registrar usuario exitosamente", () => {
  const result = registerUser("test@mail.com", "password123");
  expect(result.success).toBe(true);
});
// ...agrega 2 pruebas más por integrante
