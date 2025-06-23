class TheInternetSliderBarPage{

    navigateToPage(){
        cy.visit('https://the-internet.herokuapp.com/horizontal_slider')
    }

    titleValidation(){
        return cy.get('h3')
    }

    sliderAction(){
        return cy.get('input')
    }

    sliderValue(){
        return cy.get('#range')
    }



}

export default TheInternetSliderBarPage