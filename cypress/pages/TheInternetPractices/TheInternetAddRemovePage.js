class TheInternetAddRemovePage{

    navigateToPage(){
        cy.visit('https://the-internet.herokuapp.com/add_remove_elements/')
    }

    titleValidation(){
        return cy.get('h3')
    }

    addElementButton(){
        return cy.get('button')
    }

    deleteElementButton(){
        return cy.get('.added-manually')
    }

}

export default TheInternetAddRemovePage