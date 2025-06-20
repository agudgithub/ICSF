// src/user.js
// Simulación de almacenamiento en memoria para contactos
const contactos = [];

function agregarContacto(contacto) {
  // Verificar si ya existe un contacto con el mismo email
  if (contactos.find((c) => c.email === contacto.email)) {
    return { success: false };
  }
  if (
    contacto.firstName &&
    contacto.lastName &&
    contacto.birthdate &&
    contacto.email &&
    contacto.phone
  ) {
    contactos.push(contacto);
    return { success: true, contacto };
  }
  return { success: false };
}

function listarContactos() {
  return contactos;
}

function eliminarContacto(email) {
  const index = contactos.findIndex((c) => c.email === email);
  if (index !== -1) {
    contactos.splice(index, 1);
    return { success: true };
  }
  return { success: false };
}

module.exports = { agregarContacto, listarContactos, eliminarContacto };
