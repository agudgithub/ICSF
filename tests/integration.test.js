const {
  agregarContacto,
  listarContactos,
  eliminarContacto,
} = require('../src/user');

test('Agregar, listar y eliminar contacto (prueba de integración)', () => {
  const contacto = {
    firstName: 'Mario',
    lastName: 'Rossi',
    birthdate: '1985-03-15',
    email: 'mario@mail.com',
    phone: '555555555',
  };

  // Agregar contacto
  const addResult = agregarContacto(contacto);
  expect(addResult.success).toBe(true);

  // Listar contactos y verificar que está
  const lista = listarContactos();
  expect(lista.find((c) => c.email === contacto.email)).toBeDefined();

  // Eliminar contacto
  const deleteResult = eliminarContacto(contacto.email);
  expect(deleteResult.success).toBe(true);

  // Verificar que ya no está en la lista
  const listaFinal = listarContactos();
  expect(listaFinal.find((c) => c.email === contacto.email)).toBeUndefined();
});
