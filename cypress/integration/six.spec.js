describe ('Filter From Test', () => {
    it('Visit the app', () => {
        cy.visit('http://localhost:3000/ride_seeks');
    });
    it('Enter From filter', () => {
        const str= "Las Vegas to Cal Poly";
        cy.get('[placeholder="From"]').type("Las Vegas");
        cy.get('.btn').click();
        cy.get('.card-header').should('have.text', str);
    })
});