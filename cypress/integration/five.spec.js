describe ('Filter To Test', () => {
    it('Visit the app', () => {
        cy.visit('http://localhost:3000/ride_offers');
    });
    it('Enter From filter', () => {
        const str= "Cal Poly to UCLA";
        cy.get('[placeholder="To"]').type("UCLA");
        cy.get('.btn').click();
        cy.get('.card-header').should('have.text', str);
    })
});