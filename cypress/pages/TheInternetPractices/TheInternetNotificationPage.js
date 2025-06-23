class TheInternetNotificationPage{

    navigateToPage(){
        cy.visit('https://the-internet.herokuapp.com/notification_message_rendered')
    }

    titleValidation(){
        return cy.get('h3')
    }

    launchNoti(){
        return cy.get('p > a')
    }

    notificationMsg(){
        return cy.get('#flash')
    }

}

export default TheInternetNotificationPage