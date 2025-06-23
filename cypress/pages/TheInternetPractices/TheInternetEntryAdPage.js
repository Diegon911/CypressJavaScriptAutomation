class TheInternetEntryAdPage{

    navigateToPage(){
        cy.visit('https://the-internet.herokuapp.com/entry_ad')
    }

    titleValidation(){
        return cy.get('.example > h3')
    }

    closeAdButton(){
        return cy.get('.modal-footer > p')
    }

    waitTo(){
        cy.wait(2000)
    }

}

export default TheInternetEntryAdPage