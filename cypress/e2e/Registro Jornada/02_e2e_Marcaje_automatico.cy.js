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

    it('Activar marcaje automatico' ,()=>{ 
        cy.get('span[class="slider round"]').then((slider) => {
            if (slider.is(':disabled')) {
              // Hacer algo si el slider está deshabilitado 
              cy.get('div[class="col-md-4"]').should("contain.text","*El automarcaje está desactivado")
              cy.get(slider).click()
            } else {}
        });
    })

    it('Verificar que se desactiva la opcion de marcaje manual' ,()=>{ 
        cy.get('div[class="col-md-4"]').should("contain.text","*No se pueden realizar entradas manuales si el automarcaje está activo")
    })

    it('Desactivar marcaje automatico' ,()=>{ 
        if (slider.is(':enabled')) {
            // Hacer algo si el slider está habilitado
            cy.get('div[class="col-md-4"]').should("contain.text","*No se pueden realizar entradas manuales si el automarcaje está activo")
            cy.get(slider).click()
        } else {}
    })

   

   
})