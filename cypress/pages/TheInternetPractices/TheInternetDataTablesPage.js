class TheInternetDataTablesPage{

    navigateToPage(){
        cy.visit('https://the-internet.herokuapp.com/tables')
    }

    titleValidation(){
        return cy.get('h3')
    }

    sortLastnames(){
        return cy.get('#table1 > thead > tr > :nth-child(1) > span')
    }

    firstNameValidation(){
        return cy.get('#table1 > tbody > :nth-child(1) > :nth-child(1)')
    }
    
    sortDue(){
        return cy.get('tr > :nth-child(4) > .dues')
    }

    dueValidation(){
        return cy.get(':nth-child(1) > .dues')
    }




}

export default TheInternetDataTablesPage