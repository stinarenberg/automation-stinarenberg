/// <reference types="cypress" />

//Elements
const createBillButton ='h2 > .btn'

//Functions
function navigateToCreateBillPage(cy, contentToConfirm){
    cy.get(createBillButton).click()
    cy.contains(contentToConfirm)
}

//Exports
module.exports = {
    navigateToCreateBillPage
}