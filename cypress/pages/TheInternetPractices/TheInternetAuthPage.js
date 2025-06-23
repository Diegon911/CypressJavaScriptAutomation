class TheInternetAuthPage{

    navigateToPage(){
        cy.visit('https://the-internet.herokuapp.com/login')
    }

    titleValidation(){
        return cy.get('h2')
    }

    usernameSend(){
        return cy.get('#username').type('tomsmith')
    }

    usernameWrongSend(){
        return cy.get('#username').type('xxxxxxx')
    }

    passwordSend(){
        return cy.get('#password').type('SuperSecretPassword!')
    }

    loginButton(){
        return cy.get('.fa')
    }

    loginMsg(){
        return cy.get('#flash')
    }

    logoutButton(){
        return cy.get('.button')
    }


}

export default TheInternetAuthPage