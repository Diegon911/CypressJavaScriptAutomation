class TheInternetForgotPage{

    navigateToPage(){
        cy.visit('https://the-internet.herokuapp.com/forgot_password')
    }

    titleValidation(){
        return cy.get('h2')
    }

    textBox(){
        return cy.get('#email').type('Testing01@sample.com')
    }

    retrieveButton(){
        return cy.get('.icon-2x')
    }

    serverLabel(){
        return cy.get('h1')
    }

}

export default TheInternetForgotPage