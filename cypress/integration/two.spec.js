describe ('First Test', () => {
  it ('Visit the app', () => {
    cy.visit ('/');
  });
  it ('Sign up', () => {
      const email = 'e1@gmail.com';
      const password = 'passWORD';
      cy.get(':nth-child(1) > [placeholder="email"]').type(email).should('have.value', email);
      cy.get(':nth-child(1) > [placeholder="password"]').type(password).should('have.value', password);
      cy.get(':nth-child(1) > button').click();
  })
});