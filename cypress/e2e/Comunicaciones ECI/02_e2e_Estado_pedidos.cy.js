Cypress.on('uncaught:exception', (err, runnable) => { return false; });
/// <reference types="cypress" />
require('cypress-xpath');
import BAL from '../../support/Pageobject.cy';


describe("", () => {

    const master = new BAL

    before(() => {
        cy.clearAllCookies()
        cy.clearLocalStorage()
    })

    it("Acceder a la web", () => {
        master.login()
        cy.visit("https://comunicacioneseci.bellaurora.com/")
    })

    it('Estado de los pedidos' ,()=>{ 
        cy.get(':nth-child(1) > .card > .card-body > .w-100').should("be.visible").click()
    })

    it('Comprobacion de los campos' ,()=>{
        cy.get('[style="width: 133.359px;"]').should("contain.text","Num. Albarán").and("be.visible")
        cy.get('[style="width: 227px;"]').should("contain.text","Centro").and("be.visible")
        cy.get('[style="width: 193.125px;"]').should("contain.text","Situación del Pedido").and("be.visible")
        cy.get('[style="width: 107.453px;"]').should("contain.text","Conf. ECI").and("be.visible")
        cy.get('.dataTables_scrollHeadInner > .display > thead > tr > .sorting_desc').should("contain.text","Fecha Expedición").and("be.visible")
        cy.get('[style="width: 200.109px;"]').should("contain.text","Fecha Aprox. Entrega").and("be.visible")

    })

    it('Realizar busqueda' ,()=>{


        cy.get(':nth-child(1) > .dtr-control').invoke('text').then((valor)=>{
            let Pedido=valor;
            cy.get('label > input').type(Pedido)
        })
        
    })

    it('Seleccionar detalle del pedido' ,()=>{ 
        cy.get('svg[class="bi bi-zoom-in"]').first().click()
        .wait(2000)
    })

    it('Validar campos' ,()=>{
        cy.get('#modal_2233105 > .modal-dialog > .modal-content > .modal-body > .float-lg-right > .btn-danger').contains("Cancelar Pedido").should("be.visible")
        cy.get("thead")
        .should("contain.text","Cod. Art.").should("be.visible")
        .should("contain.text","Marca").should("be.visible")
        .should("contain.text","Línea").should("be.visible")
        .should("contain.text","Familia").should("be.visible")
        .should("contain.text","Descripción").should("be.visible")
        .should("contain.text","Cantidad").should("be.visible")
        .should("contain.text","Recibido?").should("be.visible")
        cy.get('#modal_2233105 > .modal-dialog > .modal-content > .modal-footer > .btn-primary').scrollIntoView().should("be.visible")
     })
})

