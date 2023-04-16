/// <reference types="Cypress" />

import { Given,When, And, Then} from "@badeball/cypress-cucumber-preprocessor";

import { landingPage } from "../pages/LandingPage";  

const nome = "Meu nome aqui"
    
    Given("Que já acessei minha LP",() =>{
        cy.visit("COLOQUE AQUI A URL!!!!!!");
    });
    
    When("Preenche nome", () => {
        landingPage.elements.nameInput().type(nome);
    });
    
    When("Preenche email",() => {
        landingPage.elements.emailInput().type("meuemail.f@gmail.com");
    });
    
    When("Preenche Telefone",() => {
        landingPage.elements.phoneInput().type("11987526512");
    });

    When("Clica no botao",() => {
        landingPage.elements.button().click();
    });

    Then("Exibe mensagem de envio",() => {
        landingPage.elements.mensagemSucesso().should('be.visible').and('contain.text', `Olá, ${nome}.`)
    });