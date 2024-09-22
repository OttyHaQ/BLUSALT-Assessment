/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"


Given('I am on the homepage', () => {
  cy.visit("/")
})

When('I click on client side Delay', () => {
  cy.fixture("clientSidePage.json").then((client) =>{
    cy.clickElement(client.clientDelay)
  })
  
})

When('I click the button', () => {
  cy.fixture("clientSidePage.json").then((client) =>{
    cy.clickElement(client.button)
  })
})

Then('The data should appear after 15 seconds', () => {
  cy.fixture("clientSidePage.json").then((client) =>{
    cy.wait(15000)
    cy.clickElement(client.button)
    cy.visibiltyOfElement(client.successLabel)
    cy.textPresent(client.successLabel, 'Data calculated on the client side.')
  })
})

