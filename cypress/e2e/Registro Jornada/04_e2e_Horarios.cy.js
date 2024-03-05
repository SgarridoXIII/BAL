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

    it('Acceder a horarios' ,()=>{ 

    })

    it('Crear nuevo horario' ,()=>{ 

    })

    it('Filtrar por horario previamente creado' ,()=>{ 

    })

    it('Modificar un slot' ,()=>{ 

    })

    it('Eliminar un slot' ,()=>{ 

    })

    it('Crear un slot' ,()=>{ 
        
    })

   
})