class TheInternetGeolocationPage{

    navigateToPage(){
        cy.visit('https://the-internet.herokuapp.com/geolocation')
    }

    titleValidation(){
        return cy.get('h3')
    }

    whereButton(){
        return cy.get('button')
    }

    latitudeValue(){
        return cy.get('#lat-value')
    }

    longitudeValue(){
        return cy.get('#long-value')
    }

    waitTo(){
        cy.wait(2000)
    }


}

export default TheInternetGeolocationPage