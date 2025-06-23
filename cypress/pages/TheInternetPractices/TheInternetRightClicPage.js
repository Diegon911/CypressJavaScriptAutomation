class TheInternetRightClicPage{

    navigateToPage(){
        cy.visit('https://the-internet.herokuapp.com/context_menu')
    }

    titleValidation(){
        return cy.get('h3')
    }

    rightClickArea(){
        return cy.get('#hot-spot')
    }

}

export default TheInternetRightClicPage