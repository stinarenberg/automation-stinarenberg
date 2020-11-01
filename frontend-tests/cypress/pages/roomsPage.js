/// <reference types="cypress" />

//Elements
const createRoomButton ='h2 > .btn'
//const roomMenuButton = ':nth-child(3) > .action'
const roomMenuButton='.action'
const deleteRoomButton ='.menu > :nth-child(2)' 
const backToDashboardButton='a.btn:nth-child(1)'

//Functions
function navigateToCreateRoomPage(cy, contentToConfirm){
    cy.get(createRoomButton).click()
    cy.contains(contentToConfirm)
}

function deleteLastRoom(cy, contentToConfirm){
    cy.get(roomMenuButton).last().click()
    cy.get(deleteRoomButton).click()
    cy.contains(contentToConfirm).should('not.exist')
}
function navBackToDashbord(cy, contentToConfirm){
    cy.get(backToDashboardButton).click()
    cy.contains(contentToConfirm)
}
//Exports
module.exports ={
    navigateToCreateRoomPage,
    deleteLastRoom,
    navBackToDashbord
}