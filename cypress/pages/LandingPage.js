class LandingPage{

    elements = {
        nameInput: () => cy.get('input[name="name"]'),
        emailInput: () => cy.get('input[name="email"]'),
        phoneInput: () =>cy.get('input[name="phone"]'),
        button: () =>cy.get('button[type="submit"]'),
        mensagemSucesso: () =>cy.get('.start-screen__res')
        
    };
}

export const landingPage = new LandingPage();