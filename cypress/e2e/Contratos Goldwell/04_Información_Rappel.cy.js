Cypress.on('uncaught:exception', (err, runnable) => { return false; });
/// <reference types="cypress" />

require('cypress-xpath');
import BAL from '../../support/Pageobject.cy';


describe("", () => {

    const master = new BAL
    let Pedido;

    before(() => {
        cy.clearAllCookies()
        cy.clearLocalStorage()
    })

    it("Acceder a la web", () => {
        master.login()
        cy.visit("https://contratosgoldwell.bellaurora.com/")   
      
    })

    it('Acceder a detalles del contrato' ,()=>{ 
        cy.get('.col-md-8 > .card > .card-body > .btn').should("contain.text", "Ver Report").and("be.visible").click()
        cy.get('#reporting_max > tbody > :nth-child(1) > .sorting_1').first().invoke('text').then((valor) => {
            Pedido = valor;
            cy.wrap(Pedido).as('Pedido');
            cy.get('input[type="search"]').first().type(Pedido).wait(2000)
        })
        cy.get('#reporting_max > tbody > :nth-child(1) > .sorting_1 > a').click({ force: true })

    })

    it('Pulsar información Rappel' ,()=>{ 
        cy.get('.row > :nth-child(1) > .btn').should("be.visible").click()
        cy.get('#rapel > .card').scrollIntoView()
        .should("contain.text","Información del Rappel")
        cy.get('#formRappel').should("be.visible")
        cy.get('#formImporte > .btn').should("be.visible").and("contain.text", "Actualizar Datos")
    })

    it('Pulsar ver histórico' ,()=>{ 
        cy.get(':nth-child(2) > .btn').should("be.visible").and("contain.text","Ver Histórico").click()
        cy.get('#historico > .card > .card-body > h4').scrollIntoView()
        cy.get('#historico > .card > .card-body > p').should("contain.text","Esto es el histórico de contratos")


    })

})