Cypress.on('uncaught:exception', (err, runnable) => {return false;});
/// <reference types="cypress" />

import BAL from '../../support/Pageobject.cy';
import dayjs from 'dayjs'

// function CurrentDate(){
//     return dayjs().format('DD/MM/YYYY')
// }

function getCurrentDateFormatted() {
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear();
    return `${day}/${month}/${year}`;
}

describe("",()=>{

    const master = new BAL;
    const date= getCurrentDateFormatted();
    const user = "Sergio Garrido"
    

    before(() => {
        cy.clearAllCookies()
        cy.clearLocalStorage()
    })

    it("Acceder a la web", () => {
        master.login()
        cy.visit("https://registrojornadatest.azurewebsites.net/")
      
    })

    it('Pulsar mis registros' ,()=>{ 
        cy.get('a[class="btn btn-primary"]').contains("Mis registros").should("be.visible").click()
    })

    it('Seleccionar un usuario y rango de fechas' ,()=>{ 
        //Borrar usuario
        cy.get('span[class="select2-selection__choice__remove"]').click({force:true})
        //Escribir nombre usuario
        cy.get('.select2-selection').type(`${user}{enter}`)
        //Seleccionar fechas
        cy.get('#start').clear().type(date)
        cy.get('#end').clear().type(date)
    })

    it('Pulsar "Buscar" y validar los resultados' ,()=>{ 
        cy.get('button[type="submit"]').contains('Buscar').click()
        cy.get('li[class="active"]').scrollIntoView().should("contain.text",user)
    })

    it('Editar la hora de la entrada' ,()=>{ 

    })

    it('Eliminar hora de salida' ,()=>{ 

    })

    it('Validar NO OK en observaciones' ,()=>{ 
        
    })

   

   
})