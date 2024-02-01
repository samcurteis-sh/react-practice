describe('Discount Journey', () => {
    it('should navigate to the discount page', () => {
        // Visit the main page
        cy.visit('/');

        // Click on a tile
        cy.get('.tile').first().click();

        // Check if the page contains the word "discount"
        cy.contains('This is a discount page');  
    });
});
