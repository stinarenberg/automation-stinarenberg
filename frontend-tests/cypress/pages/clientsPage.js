/// <reference types="cypress" />

//Elements
const createClientButton ='h2 > .btn'
const backToDashboardButton=':nth-child(3) > .btn'

//Functions
function navigateToCreateClientPage(cy, contentToConfirm){
    cy.get(createClientButton).click()
    cy.contains(contentToConfirm)
}
function navBackToDashboard (cy, contentToConfirm){
    cy.get(backToDashboardButton).click()
    cy.contains(contentToConfirm)
}
//Exports
module.exports ={
    navigateToCreateClientPage,
    navBackToDashboard
}