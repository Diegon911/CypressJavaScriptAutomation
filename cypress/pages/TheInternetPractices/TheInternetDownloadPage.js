class TheInternetDownloadPage{

    navigateToPage(){
        cy.visit('https://the-internet.herokuapp.com/download')
    }

    titleValidation(){
        return cy.get('h3')
    }

    downloadLink(){
        return cy.get('[href="download/random_data.txt"]')
    }


}

export default TheInternetDownloadPage