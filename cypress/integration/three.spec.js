describe ('Filter Cost Test', () => {
    it('Visit the app', () => {
        cy.visit('http://localhost:3000/ride_offers');
    });
    it('Enter price filter', () => {
        const maxPrice = '10';
        cy.get('[placeholder="Cost (below)"]').type('10');
        cy.get('.btn').click();
        cy.get('[data-cy=costID]').should('have.text', "Cost: $10.00");
    })
});