/// <reference types="cypress" />
//Elements
const startDateInputField =':nth-child(1) > input'
const EndDateInputField =':nth-child(2) > input'
const selectClient=':nth-child(3) > select'
const selectRoom=':nth-child(4) > select'
const selectBill=':nth-child(5) > select'
const saveReservationButton='.blue'

//Functions
function createNewReservation(cy, startDate, Enddate, client, room, bill, contentToConfirm){
    cy.get(startDateInputField).type(startDate)
    cy.get(EndDateInputField).type(Enddate)
    cy.get(selectClient).select(client)
    cy.get(selectRoom).select(room)
    cy.get(selectBill).select(bill)
    cy.get(saveReservationButton).click()
    cy.contains(contentToConfirm)
}

//Exports
module.exports ={
    createNewReservation
}