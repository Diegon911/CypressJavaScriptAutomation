class TheInternetFloatingMenuPage{

    navigateToPage(){
        cy.visit('https://the-internet.herokuapp.com/floating_menu')
    }

    titleValidation(){
        return cy.get('h3')
    }

    downPage(){
        cy.scrollTo(0, 1000)
    }

    menuHome(){
        return cy.get(':nth-child(1) > a')
    }

    menuNews(){
        return cy.get('ul > :nth-child(2) > a')
    }

    menuContact(){
        return cy.get(':nth-child(3) > a')
    }

    menuAbout(){
        return cy.get(':nth-child(4) > a')
    }

    getUrl(){
        return cy.url()
    }


}

export default TheInternetFloatingMenuPage