/// <reference types="cypress" />

import * as indexFuncs from '../pages/indexPage'
import * as dashboardFuncs from '../pages/dashboardPage'
import * as target from '../targets/targets'
import * as roomFuncs from '../pages/roomPage'
import * as createRoomFuncs from '../pages/createRoomPage'
import * as clientsFuncs from '../pages/clientsPage'
import * as createClientFuncs from '../pages/createClientPage'
import * as reservationsFuncs from '../pages/reservationsPage'
import * as createReservationFuncs from '../pages/createReservationPage'
import * as billsFuncs from '../pages/billspage'
import * as createBillFuncs from '../pages/createBillpage'
import * as editReservationsFuncs from '../pages/editReservationPage'

describe('Test suite', function(){
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
        indexFuncs.checkTitleOfIndexPage(cy)
        indexFuncs.performValidLogin(cy, target.username, target.password, 'Tester Hotel Overview')
        dashboardFuncs.checkLoggedInUser(cy, target.username)
    })
    it.skip('Perform login and logout', function(){
        indexFuncs.performValidLogin(cy, target.username, target.password, 'Tester Hotel Overview')
        dashboardFuncs.checkTitleOfDashboardPage(cy)
        dashboardFuncs.checkLoggedInUser(cy, target.username)
        dashboardFuncs.performLogout(cy, 'Login')
    })
    it.skip('TC01-Create new room', function(){
        dashboardFuncs.navigateToRoomPage(cy, 'Rooms')
        roomFuncs.navigateToCreateRoomPage(cy, 'New Room')
        createRoomFuncs.createNewRoom(cy, 'double', '202', '2', '2000', ['balcony', 'sea_view'], 'Floor 2, Room 202')
    })
    it.skip('TC02-Create new client', function (){
        dashboardFuncs.navigateToClientsPage(cy, 'Clients')
        clientsFuncs.navigateToCreateClientPage(cy, 'New Client')
        createClientFuncs.createNewClient(cy, 'Jane Doe', 'jane.doe@email.com', '+467012345678', 'Jane Doe')
    })
    it.skip('TC03-Create new reservation', function (){
        dashboardFuncs.navigateToReservationsPage(cy, 'Reservations')
        reservationsFuncs.navigateToCreateReservationPage(cy, 'New Reservation')
        createReservationFuncs.createNewReservation(cy, '2020-12-30', '2021-01-03', '3', '2', "", 'Jane Doe')
    })
    it.skip('TC04-Create new bill', function (){
        dashboardFuncs.navigateToBillsPage(cy, 'Bills')
        billsFuncs.navigateToCreateBillPage(cy, 'New Bill')
        createBillFuncs.createNewBill(cy, '8000', 'ID: 2')
    })

    it.skip('TC05-Edit reservation', function (){
        dashboardFuncs.navigateToReservationsPage(cy, 'Reservations')
        reservationsFuncs.NavigateToEditReservationPage(cy, 'Reservation: 2')
        editReservationsFuncs.editReservation(cy, '2', 'Bill: 2')
    })
    // it('TC07-Edit bill', function(){
    //     cy.get(':nth-child(3) > .btn').click()
    //     cy.contains('Bills')
    //     cy.get(':nth-child(2) > .action').click()
    //     cy.get('.menu > :nth-child(1)').click()
    //     cy.get('.checkbox').click()
    //     cy.get('.blue').click()
    //     cy.get(':nth-child(2) > .paid').contains('Paid: Yes')
    //     cy.get(':nth-child(3) > .btn').click()
    // })
    // it('TC08-Delete a room', function(){
    //     cy.get(':nth-child(1) > .btn').click()
    //     cy.contains('Rooms')
    //     cy.get(':nth-child(3) > .action').click()
    //     cy.get('.menu > :nth-child(2)').click()
    //     cy.contains('Floor 2, Room 202').should('not.exist')
    //     cy.get(':nth-child(3) > .btn').click()
    // })
})