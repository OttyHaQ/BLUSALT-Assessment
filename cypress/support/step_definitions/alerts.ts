/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"


Given('I have alert buttons', () =>{
    cy.visit("/")
})
When('I click on Alerts', () =>{
    cy.fixture("alertsPage.json").then((alert) =>{
        cy.clickElement(alert.alertsLink)
    })
})
When('I click on the Alert button', () => {
    cy.fixture("alertsPage.json").then((alert) =>{
        cy.clickElement(alert.alertBtn)
    })
})
Then('an alert should be displayed', () =>{
    cy.on('window:alert', (alertText) => {
        // Optionally, you can verify the alert text
        expect(alertText).to.equal('Today is a working day.\nOr less likely a holiday.');
    });
})