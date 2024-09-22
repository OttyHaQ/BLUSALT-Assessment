/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"


Given('I want to copy to a clipboard', () => {
    cy.visit("https://www.uitestingplayground.com/")
})
When('I click on Shadow Dom', () =>{
    cy.fixture("shadowDomPage.json").then((shadow) =>{
        cy.clickElement(shadow.shadowDomLink)
    })
    
})
When('I click the settings button', () => {
    cy.get('guid-generator')  
      .shadow()
      .find("#buttonGenerate")  
      .click();
})

When('I click the copy button', () => {
    cy.get('guid-generator')  
      .shadow()
      .find("#buttonCopy")  
      .click();
})
Then('A new guid should be generated and copied to the clipboard', () => {
    cy.get("guid-generator")
      .shadow()
      .find("#editField")
      .invoke('val').then((generatedGuid) => { 
        
        cy.window().then((win) => {
          win.navigator.clipboard.readText().then((clipboardText) => {
            expect(clipboardText).to.equal(generatedGuid);  

            })
        })
    })
})