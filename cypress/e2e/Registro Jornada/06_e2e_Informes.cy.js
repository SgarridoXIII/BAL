Cypress.on('uncaught:exception', (err, runnable) => {return false;});
/// <reference types="cypress" />

import BAL from '../../support/Pageobject.cy';


describe("",()=>{

    const master = new BAL

    before(() => {
        cy.clearAllCookies()
        cy.clearLocalStorage()
    })

    it("Acceder a la web", () => {
        master.login()
        cy.visit("https://registrojornadatest.azurewebsites.net/")
      
    })
    it('Pulsar en informes' ,()=>{ 

    })

    it('Verificar las descargas' ,()=>{ 
        
    })

   

   
})