class TheInternetJqueryMenuPage{

    navigateToPage(){
        cy.visit('https://the-internet.herokuapp.com/jqueryui/menu')
    }

    titleValidation(){
        return cy.get('h3')
    }

    enableMenu(){
        return cy.get('#ui-id-2')
    }

    downloadMenu(){
        return cy.get('#ui-id-4')
    }

    excelMenu(){
        return cy.get('#ui-id-4')
    }

}

export default TheInternetJqueryMenuPage