class TheInternetUploadPage{

    navigateToPage(){
        cy.visit('https://the-internet.herokuapp.com/upload')
    }

    titleValidation(){
        return cy.get('h3')
    }

    uploadButton(){
        return cy.get('#file-submit')
    }

    loadButton(){
        return cy.get('#file-upload')
    }

    successUpload(){
        return cy.get('h3')
    }


}

export default TheInternetUploadPage