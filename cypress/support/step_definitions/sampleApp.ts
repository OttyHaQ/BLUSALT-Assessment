/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"


Given('I want to login', () => {
    cy.visit("https://www.uitestingplayground.com/")
})
When('I click on Sample App', () =>{
    cy.fixture("sampleAppPage.json").then((sampleApp) => {
        cy.clickElement(sampleApp.sampleApp)
    })
})
When('I input username', () =>{
    cy.fixture("sampleAppPage.json").then((sampleApp) => {
        cy.get(sampleApp.userNameField).type(sampleApp.userName)
    }) 
})
When('I input Password', () => {
    cy.fixture("sampleAppPage.json").then((sampleApp) => {
        cy.get(sampleApp.passwordField).type(sampleApp.password)
    })
})
When('Click Login', () => {
    cy.fixture("sampleAppPage.json").then((sampleApp) => {
        cy.clickElement(sampleApp.loginBtn)
    })
})
Then('I should get a welcome text', () => {
    cy.fixture("sampleAppPage.json").then((sampleApp) => {
        cy.textPresent(sampleApp.loginStatus, `Welcome, ${sampleApp.userName}!`)
    })
})