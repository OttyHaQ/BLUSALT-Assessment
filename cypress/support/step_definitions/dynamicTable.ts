/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given('I visit the website', () => {
    cy.visit("https://www.uitestingplayground.com/")
  })
  
When('I click on Dynamic Table', () => {
cy.fixture("dynamicTable.json").then((table) =>{
    cy.clickElement(table.tableLink)
})
})

Then('Chrome CPU value should be the consistent with the yellow label', () => {
cy.fixture("dynamicTable.json").then((table) =>{
        cy.get(table.cpuRow).contains('CPU').invoke('index').then((cpuColumnIndex) => {

        cy.get(table.chromeRow).contains('span', 'Chrome').parent().within(() => {

            cy.get(`span:nth-child(${cpuColumnIndex + 1})`).invoke('text').then((chromeCpu) => {

                const chromeCpuValue = chromeCpu.trim().replace('%', '');

        
                cy.xpath(table.yellowLabel).invoke('text').then((yellowLabelText) => {
                        const match = yellowLabelText.match(/(\d+(\.\d+)?)/);

                if (match) {
                const yellowCpuValue = match[0];  // Extract the numeric value from the yellow label
                expect(parseFloat(chromeCpuValue)).to.equal(parseFloat(yellowCpuValue));
                } else {
                throw new Error('CPU value not found in the yellow label');
                }

                });

            });
        });
        });
    });
    
});
   
  
