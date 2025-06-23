class TheInternetKeyPressPage{

    navigateToPage(){
        cy.visit('https://the-internet.herokuapp.com/key_presses')
    }

    titleValidation(){
        return cy.get('h3')
    }

    enterKey(){
        return cy.get('#target')
    }

    resultLabel(){
        return cy.get('#result')
    }



}

export default TheInternetKeyPressPage