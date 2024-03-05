Cypress.on('uncaught:exception', (err, runnable) => { return false; });
/// <reference types="cypress" />

require('cypress-xpath');
import BAL from '../../support/Pageobject.cy';


describe("", () => {

    const master = new BAL
    let Pedido;

    before(() => {
        // cy.clearAllCookies()
        // cy.clearLocalStorage()
        // cy.session("Login",()=>{
        //     master.login()
        // })
        cy.setCookie('session_id', 'valor_de_la_sesion_guardada')
        cy.setCookie('token', 'valor_del_token_guardado')
    })

    it("Acceder a la web", () => {
        
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

    it('Pulsar Descargar contrato-Rappel ' ,()=>{ 
        cy.get('.btn-dark').should("be.visible").click()
        cy.verifyDownload(".pdf",{contains:true})

    })





})