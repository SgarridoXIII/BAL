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

    it('Entrar en apartado carga masiva' ,()=>{ 
        cy.get(':nth-child(4) > .nav-link').click()
    })

    it('Descargar documentos de los 4 apartados' ,()=>{ 

        //descargar Ranking 
        cy.get(':nth-child(2) > #div_formUpload > [style="margin-left:50px;"] > form > .form-group > .row > :nth-child(2) > #PrepararExcelCochesRenting-tab').click()
        cy.verifyDownload({
            timeout:5000,
            onDownload: (downloadItem)=>{
                expect(downloadItem.filename).to.include(".xlsx")
            }
        }),



        //descargar Presupuestos
        cy.get('#PrepararExcelPresupuestos-tab').click()
        cy.verifyDownload({
            timeout:5000,
            onDownload: (downloadItem)=>{
                expect(downloadItem.filename).to.include(".xlsx")
            }
        }),


        //descargar codigos centro
        cy.get(':nth-child(6) > #div_formUpload > [style="margin-left:50px;"] > form > .form-group > .row > :nth-child(2) > #PrepararExcelCochesRenting-tab').click()
        cy.verifyDownload({
            onDownload: (downloadItem)=>{
                expect(downloadItem.filename).to.include(".xlsx")
            }
        }),


        //descargar listado de Correos
        cy.get('#PrepararExcelCorreos-tab').click()
        cy.verifyDownload({
            timeout:5000,
            onDownload: (downloadItem)=>{
                expect(downloadItem.filename).to.include(".xlsx")
            }
        })

    })

    it('Cargar documentos en los 4 apartados' ,()=>{ 

        //cargar Ranking 
        cy.get('').attachFile("test.xlsx").wait(2000)
       

        //Cargar Presupuestos
        cy.get('').attachFile("test.xlsx").wait(2000)



        //Cargar codigos centro
        cy.get('').attachFile("test.xlsx").wait(2000)


        //Cargar listado de Correos
        cy.get('').attachFile("test.xlsx").wait(2000)

    })

})

