/// <reference types="cypress" />

//Elements
const createRoomButton ='h2 > .btn'

//Functions
function navigateToCreateRoomPage(cy, contentToConfirm){
    cy.get(createRoomButton).click()
    cy.contains(contentToConfirm)
}
//Exports
module.exports ={
    navigateToCreateRoomPage
}