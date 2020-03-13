describe ('First Test', () => {
  it ('Visit the app', () => {
    cy.visit ('http://localhost:3000/profile');
  });
  it ('Log out', () => {
      cy.get('[href="#home"] > li > a > .text-success').click();
      cy.get(':nth-child(1) > button');
  });


});