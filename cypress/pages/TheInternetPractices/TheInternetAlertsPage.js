class TheInternetAlertsPage{

    navigateToPage(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    }

    titleValidation(){
        return cy.get('h3')
    }

    alert1(){
        return cy.get(':nth-child(1) > button')
    }

    alert2(){
        return cy.get(':nth-child(2) > button')
    }

    alert3(){
        return cy.get(':nth-child(3) > button')
    }

    alertResult(){
        return cy.get('#result')
    }

    textOnAlert1(){
        return cy.on('window:alert', (alertText1) => {
            expect(alertText1).to.contains('I am a JS Alert')
        })
    }

    textOnAlert2confirm(){
        return cy.on('window:confirm', (AcceptConfirm) => {
            expect(AcceptConfirm).to.contains('I am a JS Confirm')
        })
    }

    textOnAlert2dismiss(){
        return cy.on('window:confirm', (RejectAlert) => {
            return false
        })
    }

    textOnAlert3Prompt(){
        return cy.window().then(function (PromptAlert){
            cy.stub(PromptAlert,"prompt").returns("Test01")            
        })
    }

}

export default TheInternetAlertsPage