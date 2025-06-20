describe("Agregar contacto con usuario existente", () => {
  it("Debería agregar un contacto usando variables de entorno", () => {
    const email = Cypress.env('USER_EMAIL');
    const password = Cypress.env('USER_PASSWORD');
    cy.request('POST', '/users/login', { email, password }).then((loginResponse) => {
      const token = loginResponse.body.token;
      cy.request({
        method: 'POST',
        url: '/contacts',
        headers: { Authorization: `Bearer ${token}` },
        body: {
          firstName: "Ana",
          lastName: "García",
          birthdate: "1995-05-10",
          email: `ana${Date.now()}@mail.com`,
          phone: "987654321"
        }
      }).then((contactResponse) => {
        expect(contactResponse.status).to.eq(201);
        expect(contactResponse.body.firstName).to.eq("Ana");
        expect(contactResponse.body.lastName).to.eq("García");
      });
    });
  });
});
