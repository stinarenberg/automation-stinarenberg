/// <reference types="cypress" />

//Elements
const titleOfDashboardPage = 'Testers Hotel'
const logoutButton = '.user > .btn'
const loggedInUser = '.username'
const ViewRoomButton =':nth-child(1) > .btn'
const viewClientsButton ='.blocks > :nth-child(2) > .btn'
const ViewReservationButton=':nth-child(4) > .btn'
const viewBillButton=':nth-child(3) > .btn'

//Functions
function checkTitleOfDashboardPage(cy){
    cy.title().should('eq', titleOfDashboardPage)
}
function checkLoggedInUser(cy, contentToConfirm){
    cy.get(loggedInUser).should('include.text', contentToConfirm)
}
function performLogout(cy, contentToConfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToConfirm)
}
function navigateToRoomPage(cy, contentToConfirm){
    cy.get(ViewRoomButton).click()
    cy.contains(contentToConfirm)
}
function navigateToClientsPage(cy, contentToConfirm){
    cy.get(viewClientsButton).click()
    cy.contains(contentToConfirm)
}
function navigateToReservationsPage(cy, contentToConfirm){
    cy.get(ViewReservationButton).click()
    cy.contains(contentToConfirm)
}
function navigateToBillsPage(cy, contentToConfirm){
    cy.get(viewBillButton).click()
    cy.contains(contentToConfirm)
}

//Exports
module.exports = {
    checkTitleOfDashboardPage,
    performLogout,
    checkLoggedInUser,
    navigateToRoomPage,
    navigateToClientsPage,
    navigateToBillsPage,
    navigateToReservationsPage
}