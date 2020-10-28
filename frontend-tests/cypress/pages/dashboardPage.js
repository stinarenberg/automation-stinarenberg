/// <reference types="cypress" />

//Elements
const titleOfDashboardPage = 'Testers Hotel'
const logoutButton = '.user > .btn'
const loggedInUser = '.username'

//Functions
function checkTitleOfDashboardPage(cy){
    cy.title().should('eq', titleOfDashboardPage)
}
function checkUserLoggedIn(cy, contentToConfirm){
    cy.get(loggedInUser).should('include.text', contentToConfirm)
}
function performLogout(cy, contentToConfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToConfirm)
}

//Exports
module.exports = {
    checkTitleOfDashboardPage,
    performLogout,
    checkUserLoggedIn
}