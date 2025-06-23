class TheInternetTextPage{

    navigateToPage(){
        cy.visit('https://the-internet.herokuapp.com/abtest')
    }

    textToValidate(){
        return cy.get('p')
    }
}

export default TheInternetTextPage