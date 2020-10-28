/// <reference types="cypress" />
//Elements
const selectBill=':nth-child(7) > select'
const saveEditButton='.blue'

//Functions
function editReservation(cy, bill, contentToConfirm){
    cy.get(selectBill).select(bill)
    cy.get(saveEditButton).click()
    cy.contains(contentToConfirm)
}

//Exports
module.exports ={
    editReservation
}