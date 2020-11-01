/// <reference types="cypress" />

import * as indexFuncs from '../pages/indexPage'
import * as dashboardFuncs from '../pages/dashboardPage'
import * as target from '../targets/targets'
import * as roomsFuncs from '../pages/roomsPage'
import * as createRoomFuncs from '../pages/createRoomPage'
import * as clientsFuncs from '../pages/clientsPage'
import * as createClientFuncs from '../pages/createClientPage'
import * as reservationsFuncs from '../pages/reservationsPage'
import * as createReservationFuncs from '../pages/createReservationPage'
import * as billsFuncs from '../pages/billsPage'
import * as createBillFuncs from '../pages/createBillpage'
import * as editBillsFuncs from '../pages/editBillPage'

describe('Test suite', function(){
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
        indexFuncs.checkTitleOfIndexPage(cy)
        indexFuncs.performValidLogin(cy, target.username, target.password, 'Tester Hotel Overview')
        dashboardFuncs.checkLoggedInUser(cy, target.username)
    })
    it('TC01-Create new room', function(){
        dashboardFuncs.navigateToRoomsPage(cy, 'Rooms')
        roomsFuncs.navigateToCreateRoomPage(cy, 'New Room')
        createRoomFuncs.createNewRoom(cy, 'double', '502', '5', '5000',['ensuite', 'penthouse'], 'Floor 5, Room 502')
    })
    it('TC02-Delete last room', function(){
        dashboardFuncs.navigateToRoomsPage(cy, 'Rooms')
        roomsFuncs.navigateToCreateRoomPage(cy, 'New Room')
        createRoomFuncs.createNewRoom(cy, 'double', '202', '2', '2000', ['balcony', 'sea_view'], 'Floor 2, Room 202')
        roomsFuncs.deleteLastRoom(cy, 'Floor 2, Room 202')
    })
    it('TC03-Create new client', function (){
        dashboardFuncs.navigateToClientsPage(cy, 'Clients')
        clientsFuncs.navigateToCreateClientPage(cy, 'New Client')
        createClientFuncs.createNewClient(cy, 'Jane Doe', 'jane.doe@email.com', '+467012345678', 'Jane Doe')
    })
    it('TC04-Create new reservation', function (){
        dashboardFuncs.navigateToRoomsPage(cy, 'Rooms')
        roomsFuncs.navigateToCreateRoomPage(cy, 'New Room')
        createRoomFuncs.createNewRoom(cy, 'single', '302', '3', '1700', 'balcony', 'Floor 3, Room 302')
        roomsFuncs.navBackToDashbord(cy,'Tester Hotel Overview')
        dashboardFuncs.navigateToClientsPage(cy, 'Clients')
        clientsFuncs.navigateToCreateClientPage(cy, 'New Client')
        createClientFuncs.createNewClient(cy, 'John Doe', 'john.doe@email.com', '+467012345678', 'John Doe')
        clientsFuncs.navBackToDashboard(cy, 'Tester Hotel Overview')
        dashboardFuncs.navigateToReservationsPage(cy, 'Reservations')
        reservationsFuncs.navigateToCreateReservationPage(cy, 'New Reservation')
        createReservationFuncs.createNewReservation(cy, '2020-12-30', '2021-01-03', '1', '1', '', 'Reservations')
    })
    it('TC05-Create new bill', function (){
        dashboardFuncs.navigateToBillsPage(cy, 'Bills')
        billsFuncs.navigateToCreateBillPage(cy, 'New Bill')
        createBillFuncs.createNewBill(cy, '8000', 'Bills')
    })
    it('TC06-Edit bill', function(){
        dashboardFuncs.navigateToBillsPage(cy, 'Bills')
        billsFuncs.navigateToCreateBillPage(cy, 'New Bill')
        createBillFuncs.createNewBill(cy, '11000', 'Bills')
        billsFuncs.navigateToEditBillPage(cy, 'Bill: ')
        editBillsFuncs.editBillToPaid(cy, 'Bills')
    })

    afterEach(()=>{
        dashboardFuncs.performLogout(cy, 'Login')
    })
})