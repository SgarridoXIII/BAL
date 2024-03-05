Cypress.on('uncaught:exception', (err, runnable) => {return false;});
/// <reference types="cypress" />
require('cypress-xpath');
import BAL from '../../support/Pageobject.cy';


describe("",()=>{

    const master =new BAL

    before(()=>{
        cy.clearAllCookies()
        cy.clearLocalStorage()
    })

    it("Acceder a la web",()=>{
        master.login()
        cy.visit("https://comunicacioneseci.bellaurora.com/")
    })

    it('Acceder a refuerzos' ,()=>{ 
        cy.get(':nth-child(5) > .card > .card-body > .w-100').click()
    })

    it('Filtrar por marca y validar' ,()=>{ 
        cy.get('#SelectedMarca').select("BAU").should("have.value", "BAU").wait(2000)
        cy.get('tr[class="odd"]').wrap().should("contain.text","BAU")
        cy.get('tr[class="even"]').wrap().should("contain.text","BAU")
    })  
    
    it('Filtrar por linea y validar' ,()=>{ 
        cy.get('#SelectedLinea').select("PHARMA").should("have.value", "PHARMA").wait(2000)
        cy.get('tr[class="odd"]').wrap().should("contain.text","PHARMA")
        cy.get('tr[class="even"]').wrap().should("contain.text","PHARMA")
    })

    it('Filtrar por familia y validar' ,()=>{ 
        cy.get('#SelectedFamilia').select("MAQUILLAJE").should("have.value", "MAQUILLAJE").wait(2000)
        cy.get('tr[class="odd"]').wrap().should("contain.text","MAQUILLAJE")
        cy.get('tr[class="even"]').wrap().should("contain.text","MAQUILLAJE")
    })

    it('Realizar busqueda en el buscador' ,()=>{    

    })

    it('Añadir unidades del articulo' ,()=>{ 

    })

    it('Restar unidades del articulo' ,()=>{ 

    })

    it('En la home, entrar a Refuerzos pendientes' ,()=>{ 

    })

    it('Editar cantidad del refuerzo' ,()=>{ 

    })

    it('Cancelar un refuerzo' ,()=>{ 

    })

    it('Validar un refuerzo' ,()=>{ 

    })

})

