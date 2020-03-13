describe ('First Test', () => {
  it ('Visit the app', () => {
    cy.visit ('/');
  });
  it ('Log in', () => {
      const email = 'e1@gmail.com';
      const password = 'passWORD';
      cy.get(':nth-child(2) > [placeholder="email"]').type(email).should('have.value', email);
      cy.get(':nth-child(2) > [placeholder="password"]').type(password).should('have.value', password);
      cy.get(':nth-child(2) > button').click();
  })
});