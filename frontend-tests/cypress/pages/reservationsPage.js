/// <reference types="cypress" />

//Elements
const createReservationButton ='h2 > .btn'
const reservationMenuButton = ':nth-child(2) > .action'
const editReservationButton ='.menu > :nth-child(1)'

//Functions
function navigateToCreateReservationPage(cy, contentToConfirm){
    cy.get(createReservationButton).click()
    cy.contains(contentToConfirm)
}

function NavigateToEditReservationPage(cy, contentToConfirm){
    cy.get(reservationMenuButton).click()
    cy.get(editReservationButton).click()
    cy.contains(contentToConfirm)
}

//Exports
module.exports = {
    navigateToCreateReservationPage,
    NavigateToEditReservationPage
}