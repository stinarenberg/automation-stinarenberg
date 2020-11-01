/// <reference types="cypress" />

//Elements
const createBillButton ='h2 > .btn'
const billMenuButton='.action'
const editBillButton ='.menu > :nth-child(1)'


//Functions
function navigateToCreateBillPage(cy, contentToConfirm){
    cy.get(createBillButton).click()
    cy.contains(contentToConfirm)
}
function navigateToEditBillPage(cy, contentToConfirm){
    cy.get(billMenuButton).last().click()
    cy.get(editBillButton).click()
    cy.contains(contentToConfirm)
}

//Exports
module.exports = {
    navigateToCreateBillPage,
    navigateToEditBillPage,
}