class TheInternetBrokenImagePage{

    navigateToPage(){
        cy.visit('https://the-internet.herokuapp.com/broken_images')
    }

    titleValidation(){
        return cy.get('h3')
    }
}

export default TheInternetBrokenImagePage