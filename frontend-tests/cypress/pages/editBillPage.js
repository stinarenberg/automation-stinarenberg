/// <reference types="cypress" />
//Elements
const paidCheckbox='.checkbox'
const saveEditButton='.blue'

//Functions
function editBillToPaid(cy, contentToConfirm){
    cy.get(paidCheckbox).click()
    cy.get(saveEditButton).click()
    cy.contains(contentToConfirm)
}

//Exports
module.exports ={
    editBillToPaid
}