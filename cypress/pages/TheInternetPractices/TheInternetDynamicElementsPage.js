class TheInternetDynamicElementsPage{

    navigateToPage(){
        cy.visit('https://the-internet.herokuapp.com/dynamic_controls')
    }

    titleValidation(){
        return cy.get('.example > :nth-child(1)')
    }

    checkbox(){
        return cy.get('#checkbox > input')
    }

    addRemoveButton(){
        return cy.get('#checkbox-example > button')
    }

    enableDisableButton(){
        return cy.get('#input-example > button')
    }

    messageLabel(){
        return cy.get('#message')
    }

    textBox(){
        return cy.get('#input-example > input')
    }



}

export default TheInternetDynamicElementsPage