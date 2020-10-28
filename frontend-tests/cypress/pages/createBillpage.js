/// <reference types="cypress" />

//Elements
const valueInputField='input'
const paidCheckbox='.checkbox'
const saveBillButton ='.blue'

//Functions
function createNewBill(cy, value, contentToConfirm){
    cy.get(valueInputField).type(value)
    //om jag vill skapa funktion med möjlighet att klicka i checkbox??
    cy.get(saveBillButton).click()
    cy.contains(contentToConfirm)
}

//Exports
module.exports = {
    createNewBill
}