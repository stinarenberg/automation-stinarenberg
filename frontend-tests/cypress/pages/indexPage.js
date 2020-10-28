/// <reference types="cypress" />

//Elements
const titleOfIndexPage ='Testers Hotel'
const userNameTextField =':nth-child(1) > input'
const passwordTextField =':nth-child(2) > input'
const loginButton= '.btn'

//Functions
function checkTitleOfIndexPage(cy){
    cy.title().should('eq', titleOfIndexPage)
}
function performValidLogin(cy, username, password, contentToConfirm){
    cy.get(userNameTextField).type(username)
    cy.get(passwordTextField).type(password)
    cy.get(loginButton).click()
    cy.contains(contentToConfirm)
}

//Exports
module.exports ={
    checkTitleOfIndexPage,
    performValidLogin
}