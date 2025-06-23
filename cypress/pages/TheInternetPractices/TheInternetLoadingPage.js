class TheInternetLoadingPage{

    navigateToPage(){
        cy.visit('https://the-internet.herokuapp.com/dynamic_loading/1')
    }

    titleValidation(){
        return cy.get('h3')
    }

    startButton(){
        return cy.get('button')
    }

    messageLabel(){
        return cy.get('#finish > h4')
    }

}

export default TheInternetLoadingPage