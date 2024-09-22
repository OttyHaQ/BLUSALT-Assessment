
/// <reference types="cypress" />



Cypress.Commands.add('clickElement', (element) => {
    cy.get(element).should('exist').click()
});

Cypress.Commands.add('visibiltyOfElement', (element) => {
    cy.get(element).should('be.visible');
  });

Cypress.Commands.add('textPresent', (element, text) => {
cy.get(element).should('have.text', text);
});


declare namespace Cypress {
    interface Chainable {
        clickElement(element: string): Chainable<void>
        visibiltyOfElement(element: string): Chainable<void>
        textPresent(element: string, text: string): Chainable<void>
    }
}
