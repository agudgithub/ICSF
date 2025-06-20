// tests/user.test.js
const { agregarContacto, listarContactos, eliminarContacto } = require("../src/user");

test("Agregar contacto exitosamente", () => {
  const contacto = {
    firstName: "Juan",
    lastName: "Pérez",
    birthdate: "1990-01-01",
    email: "juan@mail.com",
    phone: "123456789"
  };
  const result = agregarContacto(contacto);
  expect(result.success).toBe(true);
  expect(result.contacto.email).toBe("juan@mail.com");
});

test("No agregar contacto si falta información", () => {
  const contacto = {
    firstName: "Ana",
    lastName: "García",
    // birthdate falta
    email: "ana@mail.com",
    phone: "987654321"
  };
  const result = agregarContacto(contacto);
  expect(result.success).toBe(false);
});

test("Eliminar contacto exitosamente", () => {
  const contacto = {
    firstName: "Luis",
    lastName: "Martínez",
    birthdate: "1985-03-15",
    email: "luis@mail.com",
    phone: "555555555"
  };
  agregarContacto(contacto);
  const result = eliminarContacto("luis@mail.com");
  expect(result.success).toBe(true);
  // Verifica que ya no esté en la lista
  const lista = listarContactos();
  expect(lista.find(c => c.email === "luis@mail.com")).toBeUndefined();
});

test("No permite agregar dos contactos con el mismo email", () => {
  const contacto1 = {
    firstName: "Pedro",
    lastName: "López",
    birthdate: "1992-07-20",
    email: "pedro@mail.com",
    phone: "111111111"
  };
  const contacto2 = {
    firstName: "Pedro",
    lastName: "López",
    birthdate: "1992-07-20",
    email: "pedro@mail.com",
    phone: "222222222"
  };
  agregarContacto(contacto1);
  const result = agregarContacto(contacto2);
  expect(result.success).toBe(false);
});

test("Listar contactos retorna todos los agregados", () => {
  // Limpiar contactos antes de la prueba
  while (listarContactos().length > 0) {
    eliminarContacto(listarContactos()[0].email);
  }
  const contactoA = {
    firstName: "Mario",
    lastName: "Sosa",
    birthdate: "1991-11-11",
    email: "mario@mail.com",
    phone: "333333333"
  };
  const contactoB = {
    firstName: "Lucía",
    lastName: "Fernández",
    birthdate: "1993-12-12",
    email: "lucia@mail.com",
    phone: "444444444"
  };
  agregarContacto(contactoA);
  agregarContacto(contactoB);
  const lista = listarContactos();
  expect(lista.length).toBeGreaterThanOrEqual(2);
  expect(lista.find(c => c.email === "mario@mail.com")).toBeDefined();
  expect(lista.find(c => c.email === "lucia@mail.com")).toBeDefined();
});

test("Eliminar contacto que no existe retorna false", () => {
  const result = eliminarContacto("noexiste@mail.com");
  expect(result.success).toBe(false);
});

test("No agrega contacto si el email está vacío", () => {
  const contacto = {
    firstName: "Sofía",
    lastName: "Ruiz",
    birthdate: "2000-01-01",
    email: "",
    phone: "123123123"
  };
  const result = agregarContacto(contacto);
  expect(result.success).toBe(false);
});

test("No agrega contacto si el teléfono está vacío", () => {
  const contacto = {
    firstName: "Carlos",
    lastName: "Gómez",
    birthdate: "1998-08-08",
    email: "carlos@mail.com",
    phone: ""
  };
  const result = agregarContacto(contacto);
  expect(result.success).toBe(false);
});

test("No agrega contacto si el nombre está vacío", () => {
  const contacto = {
    firstName: "",
    lastName: "Torres",
    birthdate: "1997-07-07",
    email: "vacio@mail.com",
    phone: "555555555"
  };
  const result = agregarContacto(contacto);
  expect(result.success).toBe(false);
});

test("No agrega contacto si el apellido está vacío", () => {
  const contacto = {
    firstName: "Valeria",
    lastName: "",
    birthdate: "1997-07-07",
    email: "valeria@mail.com",
    phone: "555555555"
  };
  const result = agregarContacto(contacto);
  expect(result.success).toBe(false);
});

test("No agrega contacto si la fecha de nacimiento está vacía", () => {
  const contacto = {
    firstName: "Mario",
    lastName: "Torres",
    birthdate: "",
    email: "mariotorres@mail.com",
    phone: "555555555"
  };
  const result = agregarContacto(contacto);
  expect(result.success).toBe(false);
});

test("Listar contactos retorna un array", () => {
  const lista = listarContactos();
  expect(Array.isArray(lista)).toBe(true);
});
