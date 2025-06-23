class TheInternetMultiTabPage{

    navigateToPage(){
        cy.visit('https://the-internet.herokuapp.com/windows')
    }

    titleValidation(){
        return cy.get('h3')
    }

    newTabLink(){
        return cy.get('.example > a')
    }

}

export default TheInternetMultiTabPage