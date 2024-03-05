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

    it('Validar botón "Ver Report"' ,()=>{ 
        cy.get('.col-md-8 > .card > .card-body > .btn').should("contain.text", "Ver Report").and("be.visible").click()
    })

    it('Pulsar exportar a Excel' ,()=>{ 
        cy.get('#exportarExcel').should("be.visible").click()
        cy.verifyDownload("xls",{
            timeout:15000,
            contains:true,
        })
    })

    it('Desde report finanzas, exportar a excel' ,()=>{ 
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get('button[id="exportExcel"]').click()
        cy.verifyDownload("xls",{
            timeout:15000,
            contains:true,
        })


    })

})