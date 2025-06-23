class TheInternetDragDropPage{

    navigateToPage(){
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
    }

    titleValidation(){
        return cy.get('h3')
    }

    dragDropElements(){
        return cy.get('#column-a').drag('#column-b') 
    }    

}

export default TheInternetDragDropPage