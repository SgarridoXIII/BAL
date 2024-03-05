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
        cy.visit("https://contratosgoldwell.bellaurora.com/")   
        //master.login()
    })

    it('Validar "Ver report' ,()=>{ 
        cy.get('.col-md-8 > .card > .card-body > .btn').should("contain.text","Ver Report").and("be.visible")
    })

    it('Validar botón "Puntos"' ,()=>{ 
        cy.get('.col-md-4 > .card > .card-body > .btn').should("contain.text","Puntos").and("be.visible")
    })

    it('Validar "Clientes y grupos"' ,()=>{ 
        cy.get(':nth-child(2) > .btn').should("contain.text","Clientes y Grupos").and("be.visible")
    })

})