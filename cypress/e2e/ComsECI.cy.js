Cypress.on('uncaught:exception', (err, runnable) => { return false; });
/// <reference types="cypress" />

require('cypress-xpath');


describe("01_Validación_Home", () => {


    before(()=>{

        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
        
    })
    

    it("Acceder a la web", () => {
        cy.visit("https://www.office.com")
        cy.get('#hero-banner-sign-in-microsoft-365-link').click().wait(5000)
        cy.origin('https://login.microsoftonline.com', () => {
            cy.get('input[type="email"]').type('s.garrido.col@bellaurora.com').wait(3000)
            cy.get('input[type="submit"]').click().wait(5000)
            cy.get('input[type="password"]').type('I2qZLH220R1j')
            cy.get('input[type="submit"]').click()
            cy.get('input[type="submit"]').click()
        })
        cy.visit("https://contratosgoldwell.bellaurora.com/")          
    })

    it('Validar "Ver report' ,()=>{ 
        cy.get('.col-md-8 > .card > .card-body > .btn').should("contain.text","Ver Report").and("be.visible")
    })

    it('Validar botón "Puntos"' ,()=>{ 
        cy.get('.col-md-4 > .card > .card-body > .btn').should("contain.text","Puntos").and("be.visible")
    })

    it('Validar "Clientes y grupos"' ,()=>{ 
        cy.get(':nth-child(2) > .btn').should("contain.text","Clientes y Grupos").and("be.visible")
    })


})

describe("02_Vista_datos", () => {

    
    let Pedido;


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

describe("03_Descarga_contrato.cy", () => {

    let Pedido;

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

describe("04_Información_Rappel", () => {

    let Pedido;

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

    it('Pulsar información Rappel' ,()=>{ 
        cy.get('.row > :nth-child(1) > .btn').should("be.visible").click()
        cy.get('#rapel > .card').scrollIntoView()
        .should("contain.text","Información del Rappel")
        cy.get('#formRappel').should("be.visible")
        cy.get('#formImporte > .btn').should("be.visible").and("contain.text", "Actualizar Datos")
    })

    it('Pulsar ver histórico' ,()=>{ 
        cy.get(':nth-child(2) > .btn').should("be.visible").and("contain.text","Ver Histórico").click()
        cy.get('#historico > .card > .card-body > h4').scrollIntoView()
        cy.get('#historico > .card > .card-body > p').should("contain.text","Esto es el histórico de contratos")


    })

})

describe("05_Exportar_excel", () => {


    it("Acceder a la web", () => {
        
        cy.visit("https://contratosgoldwell.bellaurora.com/")   
      
    })

    it('Validar botón "Ver Report"' ,()=>{ 
        cy.get('.col-md-8 > .card > .card-body > .btn').should("contain.text", "Ver Report").and("be.visible").click()
    })

    it('Pulsar exportar a Excel' ,()=>{ 
        cy.get('#exportarExcel').should("be.visible").click()
        cy.verifyDownload("xls",{
            timeout:15000,
            contains:true,
        })
    })

    it('Desde report finanzas, exportar a excel' ,()=>{ 
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get('button[id="exportExcel"]').click()
        cy.verifyDownload("xls",{
            timeout:15000,
            contains:true,
        })


    })

})