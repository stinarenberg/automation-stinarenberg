/// <reference types="cypress" />

//Elements
const createClientButton ='h2 > .btn'

//Functions
function navigateToCreateClientPage(cy, contentToConfirm){
    cy.get(createClientButton).click()
    cy.contains(contentToConfirm)
}
//Exports
module.exports ={
    navigateToCreateClientPage
}