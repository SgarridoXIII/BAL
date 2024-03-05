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

    it('Seleccionar centro', () => {
        //dropdown
        cy.get('#select2-centroEci-container').click()

        //Escribir el centro en el placeholder
        cy.get('.select2-search__field').type('GOYA')

    })

    it('Actualizar centro', () => {
        cy.tab().tab().click().wait(3000)
        cy.reload()
    })

    it('Estado pedidos', () => {
        cy.get(':nth-child(1) > .card > .card-body > .w-100').should("be.visible").click()
    })

    it('Validar datos', () => {
        cy.get('#estado_pedidos_wrapper').should("contain.text","GOYA")
    })
})

