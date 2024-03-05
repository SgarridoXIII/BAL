class BAL {

    login() {
        cy.visit("https://www.office.com")
        cy.get('#hero-banner-sign-in-microsoft-365-link').click().wait(5000)
        cy.origin('https://login.microsoftonline.com', ()=>{
            cy.get('input[type="email"]').type('s.garrido.col@bellaurora.com')
            cy.get('input[type="submit"]').click()
            cy.get('input[type="password"]').type('I2qZLH220R1j')
            cy.get('input[type="submit"]').click()
            cy.get('input[type="submit"]').click()
        })
                
    }

    cerrarSesion() {

    }

}

export default BAL;
