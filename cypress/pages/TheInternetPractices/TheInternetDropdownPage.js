class TheInternetDropdownPage{

    navigateToPage(){
        cy.visit('https://the-internet.herokuapp.com/dropdown')
    }

    titleValidation(){
        return cy.get('h3')
    }

    dropdownAction(){
        return cy.get('#dropdown').click
    }    

    dropdownSelect1(){
        return cy.get('#dropdown').select('Option 1')
    }

    dropdownSelect2(){
        return cy.get('#dropdown').select('Option 2')
    }

    dropdownValidation(){
        return cy.get('#dropdown')
    }    

}

export default TheInternetDropdownPage