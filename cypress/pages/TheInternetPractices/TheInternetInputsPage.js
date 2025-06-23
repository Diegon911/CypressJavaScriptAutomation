class TheInternetInputsPage{

    navigateToPage(){
        cy.visit('https://the-internet.herokuapp.com/inputs')
    }

    titleValidation(){
        return cy.get('h3')
    }

    inputTexbox(){
        return cy.get('input')
    }

}

export default TheInternetInputsPage