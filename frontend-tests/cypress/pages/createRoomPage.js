/// <reference types="cypress" />

//Elements
const categoryInputField =':nth-child(1) > select'
const numberInputField =':nth-child(2) > input'
const floorInputField=':nth-child(3) > input'
const availabilityCheckbox='.checkbox'
const priceInputField=':nth-child(5) > input'
const roomFeatures=':nth-child(6) > select'
const saveRoomButton='.blue'

//Functions
function createNewRoom(cy, roomType, roomNumber, floor, price, features, contentToConfirm){
    cy.get(categoryInputField).select(roomType)
    cy.get(numberInputField).type(roomNumber)
    cy.get(floorInputField).type (floor)
    cy.get(availabilityCheckbox).click()
    cy.get(priceInputField).type(price)
    cy.get(roomFeatures).select(features)
    cy.get(saveRoomButton).click()
    cy.contains(contentToConfirm)
}

//Exports
module.exports ={
    createNewRoom
}