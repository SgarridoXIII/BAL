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
    
    it('Verificamos que no está activado el marcaje automatico' ,()=>{ 
        cy.get('span[class="slider round"]').then((slider) => {
            if (slider.is(':enabled')) {
              // Hacer algo si el slider está habilitado
              cy.get('div[class="col-md-4"]').should("contain.text","*No se pueden realizar entradas manuales si el automarcaje está activo")
              cy.get(slider).click()
            } else {
              // Hacer algo si el slider está deshabilitado
              cy.get('div[class="col-md-4"]').should("contain.text","*El automarcaje está desactivado")
            }
          });
          
    })

    it('Pulsar inicio jornada' ,()=>{ 
        cy.get('button[class="btn btn-success"]').should("be.enabled").click().wait(1000)
    })

    it('Pulsar pausa comida' ,()=>{ 
        cy.get('button[class="btn btn-info"]').should("be.enabled").click().wait(1000)
    })

    it('Pulsar finalizar pausa' ,()=>{ 
        cy.get('button[class="btn btn-info"]').should("be.enabled").click().wait(1000)
    })

    it('Pulsar fin joranda' ,()=>{ 
        cy.get('button[class="btn btn-danger"]').should("be.enabled").click().wait(1000)
    })
    
   

   
})