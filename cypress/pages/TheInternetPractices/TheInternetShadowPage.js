class TheInternetShadowPage{

    navigateToPage(){
        cy.visit('https://the-internet.herokuapp.com/shadowdom')
    }

    titleValidation(){
        return cy.get('h1')
    }

    validationLabel1(){
        return cy.get('span')
    }

    validationLabel2(){
        return cy.get('ul > :nth-child(1)')
    }

    validationLabel3(){
        return cy.get('ul > :nth-child(2)')
    }

}

export default TheInternetShadowPage