class TheInternetNestFramesPage{

    navigateToPage(){
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
    }

    frameAction(){
        cy.get('#frame').then(($Frame)=>{
            const Body = $Frame.contents().find("body")
            cy.wrap(Body).as("Frames")
            cy.get("@Frames").find("#button-find-out-more").click
        })
    }

}

export default TheInternetNestFramesPage