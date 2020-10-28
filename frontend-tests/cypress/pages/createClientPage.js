/// <reference types="cypress" />

//Elements
const nameInputField =':nth-child(1) > input'
const emailInputField =':nth-child(2) > input'
const telephoneInputField=':nth-child(3) > input'
const saveClientButton='.blue'

//Functions
function createNewClient (cy, name, email, phonenumber, contentToConfirm){
    cy.get(nameInputField).type(name)
    cy.get(emailInputField).type(email)
    cy.get(telephoneInputField).type(phonenumber)
    cy.get(saveClientButton).click()
    cy.contains(contentToConfirm)
}

//Exports
module.exports ={
    createNewClient
}