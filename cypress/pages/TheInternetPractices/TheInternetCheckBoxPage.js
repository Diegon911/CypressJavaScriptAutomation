class TheInternetCheckBoxPage{

    navigateToPage(){
        cy.visit('https://the-internet.herokuapp.com/checkboxes')
    }

    titleValidation(){
        return cy.get('h3')
    }

    checkBox1(){
        return cy.get('#checkboxes > :nth-child(1)')
    }

    checkBox2(){
        return cy.get('#checkboxes > :nth-child(3)')
    }
}

export default TheInternetCheckBoxPage