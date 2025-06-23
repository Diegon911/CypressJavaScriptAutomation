class TheInternetHoverPage{

    navigateToPage(){
        cy.visit('https://the-internet.herokuapp.com/hovers')
    }

    titleValidation(){
        return cy.get('h3')
    }

    hiddenProfile1(){
        return cy.get('#content > div > div:nth-child(3) > div > h5')
    }

    hiddenProfile2(){
        return cy.get('#content > div > div:nth-child(4) > div > h5')
    }

    hiddenProfile3(){
        return cy.get('#content > div > div:nth-child(5) > div > h5')
    }


}

export default TheInternetHoverPage