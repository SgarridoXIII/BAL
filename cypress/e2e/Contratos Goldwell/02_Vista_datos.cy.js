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

    it('Pulsar ver report', () => {
        cy.get('.col-md-8 > .card > .card-body > .btn').should("contain.text", "Ver Report").and("be.visible").click()
    })

    it('Validar campos', () => {
        cy.get('#reporting_max_wrapper')
            .should("contain.text", "Código").should("be.visible")
            .should("contain.text", "Cliente").should("be.visible")
            .should("contain.text", "Fecha Firma").should("be.visible")
            .should("contain.text", "Teléfono").should("be.visible")
            .should("contain.text", "Nodo Reporte").should("be.visible")
            .should("contain.text", "Nodo Ax").should("be.visible")
            .should("contain.text", "Fecha Inicio").should("be.visible")
            .should("contain.text", "Fecha Fin").should("be.visible")
            .should("contain.text", "Comercial").should("be.visible")
            .should("contain.text", "Responsable").should("be.visible")
            .should("contain.text", "Importe").should("be.visible")
            .should("contain.text", "Consumo").should("be.visible")
            .should("contain.text", "% Consecución").should("be.visible")
            .should("contain.text", "% Proyección").should("be.visible")
            .should("contain.text", "% Rappel").should("be.visible")
            .should("contain.text", "Año Pagadero").should("be.visible")
            .should("contain.text", "Renegociación").should("be.visible")


    })


    it('Buscador rapido', () => {

        cy.get('#reporting_max > tbody > :nth-child(1) > .sorting_1').first().invoke('text').then((valor) => {
            Pedido = valor;
            cy.wrap(Pedido).as('Pedido');
            cy.get('input[type="search"]').first().type(Pedido).wait(2000)
        })
        cy.get('#reporting_max > tbody > :nth-child(1) > .sorting_1 > a').click({ force: true })
    })

    it('Detalle del contrato', function () {

        //Validación numero pedido
        cy.get('.col-md-7 > .card > .card-body > .table > tbody > :nth-child(1) > :nth-child(2)').should(($element) => {
            const expectedText = this.Pedido.trim(); // Eliminar espacios al inicio y al final
            const actualText = $element.text().trim();
            expect(actualText).to.match(new RegExp(expectedText.replace(/\s+/g, '\\s*')));
        });
        cy.get('.col-md-7 > .card > .card-body')
            .should("contain.text", "Código").should("be.visible")
            .should("contain.text", "Cliente").should("be.visible")
            .should("contain.text", "Fecha Firma").should("be.visible")
            .should("contain.text", "Teléfono").should("be.visible")
            .should("contain.text", "Nodo Reporte").should("be.visible")
            .should("contain.text", "Nodo Ax").should("be.visible")
            .should("contain.text", "Fecha Inicio").should("be.visible")
            .should("contain.text", "Fecha Fin").should("be.visible")
            .should("contain.text", "Comercial").should("be.visible")
            .should("contain.text", "Responsable").should("be.visible")
            .should("contain.text", "Importe").should("be.visible")
            .should("contain.text", "Consumo").should("be.visible")
            .should("contain.text", "% Consecución").should("be.visible")
            .should("contain.text", "% Rappel").should("be.visible")
            .should("contain.text", "Año Pagadero").should("be.visible")
            .should("contain.text", "Renegociación").should("be.visible")

    })

    it('Datos parametrizables', () => {
        cy.get('.col-md-5 > .card').should("contain.text", "Datos Parametrizables").should("be.visible")
        cy.get('#formPrincipal > :nth-child(1)').should("be.visible")
        cy.get('#formPrincipal > :nth-child(2)').should("be.visible")
        cy.get('#formPrincipal > :nth-child(3)').should("be.visible")
        cy.get('#formPrincipal > :nth-child(4)').should("be.visible")
        cy.get('#formPrincipal > :nth-child(5)').should("be.visible")
        cy.get('#formPrincipal > :nth-child(6)').should("be.visible")
        cy.get('#formPrincipal > :nth-child(1)').should("be.visible")
        cy.get('#formPrincipal > .btn').should("be.enabled")

    })

})