/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"



Given('I want to attach a file via drag&drop', () => {
    cy.visit("https://www.uitestingplayground.com/")
})
When('I click on File upload', () => {
    cy.get("a[href='/upload']").click()
}) 

When('I drag&drop a File', () => {
    cy.xpath("//iframe[@src='/static/upload.html']")
        .its('0.contentDocument.body')
        .should('not.be.empty')
        .then(cy.wrap)
        .find("input[type='file']")
        .attachFile("myfile.txt", { subjectType: 'drag-n-drop' })
      
})
Then('The file should be selected', () => {
    cy.xpath("//iframe[@src='/static/upload.html']")
        .its('0.contentDocument.body')
        .should('not.be.empty')
        .then(cy.wrap)
        .find("div[class='success-file'] p")
        .should('contain', ' file(s) selected')
})



Given('I want to attach a file using `Browse files` button', () => {
    cy.visit("https://www.uitestingplayground.com/")
})
When('I browse and select a File', () => {
    cy.xpath("//iframe[@src='/static/upload.html']")
        .its('0.contentDocument.body')
        .should('not.be.empty')
        .then(cy.wrap)
        .find("input[type='file']")
        .attachFile("/myfile.txt")
}) 

Then('The file is be selected', () => {
    cy.xpath("//iframe[@src='/static/upload.html']")
        .its('0.contentDocument.body')
        .should('not.be.empty')
        .then(cy.wrap)
        .find("div[class='success-file'] p")
        .should('contain', ' file(s) selected')
})
