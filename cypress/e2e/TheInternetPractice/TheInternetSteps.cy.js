import TheInternetTextPage from "../../pages/TheInternetPractices/TheInternetTextPage"
import TheInternetAddRemovePage from "../../pages/TheInternetPractices/TheInternetAddRemovePage"
import TheInternetBrokenImagePage from "../../pages/TheInternetPractices/TheInternetBrokenImagePage"
import TheInternetCheckBoxPage from "../../pages/TheInternetPractices/TheInternetCheckBoxPage" 
import TheInternetRightClicPage from "../../pages/TheInternetPractices/TheInternetRightClicPage"
import TheInternetDragDropPage from "../../pages/TheInternetPractices/TheInternetDragDropPage"
import TheInternetDropdownPage from "../../pages/TheInternetPractices/TheInternetDropdownPage"
import TheInternetDynamicElementsPage from "../../pages/TheInternetPractices/TheInternetDynamicElementsPage"
import TheInternetLoadingPage from "../../pages/TheInternetPractices/TheInternetLoadingPage"
import TheInternetEntryAdPage from "../../pages/TheInternetPractices/TheInternetEntryAdPage"
import TheInternetDownloadPage from "../../pages/TheInternetPractices/TheInternetDownloadPage"
import TheInternetUploadPage from "../../pages/TheInternetPractices/TheInternetUploadPage" 
import TheInternetFloatingMenuPage from "../../pages/TheInternetPractices/TheInternetFloatingMenuPage" 
import TheInternetForgotPage from "../../pages/TheInternetPractices/TheInternetForgotPage" 
import TheInternetAuthPage from "../../pages/TheInternetPractices/TheInternetAuthPage" 
import TheInternetNestFramesPage from "../../pages/TheInternetPractices/TheInternetNestFramesPage" 
import TheInternetGeolocationPage from "../../pages/TheInternetPractices/TheInternetGeolocationPage"
import TheInternetSliderBarPage from "../../pages/TheInternetPractices/TheInternetSliderBarPage"
import TheInternetHoverPage from "../../pages/TheInternetPractices/TheInternetHoverPage"
import TheInternetInputsPage from "../../pages/TheInternetPractices/TheInternetInputsPage"
import TheInternetJqueryMenuPage from "../../pages/TheInternetPractices/TheInternetJqueryMenuPage"
import TheInternetAlertsPage from "../../pages/TheInternetPractices/TheInternetAlertsPage"
import TheInternetKeyPressPage from "../../pages/TheInternetPractices/TheInternetKeyPressPage"
import TheInternetMultiTabPage from "../../pages/TheInternetPractices/TheInternetMultiTabPage"
import TheInternetNotificationPage from "../../pages/TheInternetPractices/TheInternetNotificationPage"
import TheInternetShadowPage from "../../pages/TheInternetPractices/TheInternetShadowPage"
import TheInternetDataTablesPage from "../../pages/TheInternetPractices/TheInternetDataTablesPage"

const heroKuappText = new TheInternetTextPage
const heroKuappAddRemove = new TheInternetAddRemovePage
const heroKuappBroken = new TheInternetBrokenImagePage
const heroKuappCheckbox = new TheInternetCheckBoxPage
const heroKuappRightClic = new TheInternetRightClicPage
const heroKuappDragDrop = new TheInternetDragDropPage
const heroKuappDropdown = new TheInternetDropdownPage
const heroKuappDynamicElement = new TheInternetDynamicElementsPage
const heroKuappLoading = new TheInternetLoadingPage
const heroKuappEntryAd = new TheInternetEntryAdPage
const heroKuappDownload = new TheInternetDownloadPage
const heroKuappUpload = new TheInternetUploadPage
const heroKuappFloating = new TheInternetFloatingMenuPage
const heroKuappForgot = new TheInternetForgotPage
const heroKuappAuth = new TheInternetAuthPage
const heroKuappFrames = new TheInternetNestFramesPage
const heroKuappGeo = new TheInternetGeolocationPage
const heroKuappSlider = new TheInternetSliderBarPage
const heroKuappHover = new TheInternetHoverPage
const heroKuappInputs = new TheInternetInputsPage
const heroKuappJmenu = new TheInternetJqueryMenuPage
const heroKuappAlert = new TheInternetAlertsPage
const heroKuappKey = new TheInternetKeyPressPage
const heroKuappMulti = new TheInternetMultiTabPage
const heroKuappNoti = new TheInternetNotificationPage
const heroKuappShadow = new TheInternetShadowPage
const heroKuappTables = new TheInternetDataTablesPage

describe('Practicando Cypress con la pagina de The internet Herokuapp', () => {

    //Steps de Validacion TextPage
    it('Validacion de un texto', () => {
        heroKuappText.navigateToPage()
        heroKuappText.textToValidate().should('have.text', "\n    Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).")
    })


    //Steps de Validacion AddRemovePage
    it('Validacion de agregar y eliminar un elemento', () => {
        heroKuappAddRemove.navigateToPage()
        heroKuappAddRemove.titleValidation().should('have.text', "Add/Remove Elements")
        heroKuappAddRemove.addElementButton().click()
        heroKuappAddRemove.deleteElementButton().should('be.visible')
        heroKuappAddRemove.deleteElementButton().click()
        heroKuappAddRemove.deleteElementButton().should('not.exist')
    })

    //Steps de Validacion BrokenImagePage
    it('Validacion de imagenes rotas', () => {
        heroKuappBroken.navigateToPage()
        heroKuappBroken.titleValidation().should('have.text', "Broken Images")
        cy.request({
            url:"https://the-internet.herokuapp.com/asdf.jpg",
            failOnStatusCode:false
        }).then((respuesta)=>{
            expect(respuesta.status).to.eq(404)
        })
        cy.request({
            url:"https://the-internet.herokuapp.com/hjkl.jpg",
            failOnStatusCode:false
        }).then((respuesta)=>{
            expect(respuesta.status).to.eq(404)
        })
        cy.request({
            url:"https://the-internet.herokuapp.com/img/avatar-blank.jpg",
            failOnStatusCode:false
        }).then((respuesta)=>{
            expect(respuesta.status).to.eq(200)
        })
    })

    //Steps de Validacion CheckboxPage
    it('Validacion de checkbox', () => {
        heroKuappCheckbox.navigateToPage()
        heroKuappCheckbox.titleValidation().should('have.text', "Checkboxes")
        heroKuappCheckbox.checkBox1().should('not.be.checked')
        heroKuappCheckbox.checkBox2().should('be.checked')
        heroKuappCheckbox.checkBox1().check().uncheck().check()
        heroKuappCheckbox.checkBox2().uncheck().check().uncheck()
        heroKuappCheckbox.checkBox1().should('be.checked')
        heroKuappCheckbox.checkBox2().should('not.be.checked')
    })

    //Steps de Validacion RightClicPage
    it('Validacion de clic derecho', () => {
        heroKuappRightClic.navigateToPage()
        heroKuappRightClic.titleValidation().should('have.text', "Context Menu")
        heroKuappRightClic.rightClickArea().rightclick()
        cy.on("window:confirm", (t) => {
        expect(t).to.equal("You selected a context menu");
        });
        heroKuappRightClic.titleValidation().should('have.text', "Context Menu")
    })

    //Steps de Validacion DragDropPage
    it('Validacion de arrastrar y soltar', () => {
        heroKuappDragDrop.navigateToPage()
        heroKuappDragDrop.titleValidation().should('have.text', "Drag and Drop")
        heroKuappDragDrop.dragDropElements()
    })

    //Steps de Validacion DropdownPage
    it('Validacion de Dropdown', () => {
        heroKuappDropdown.navigateToPage()
        heroKuappDropdown.titleValidation().should('have.text', "Dropdown List")
        heroKuappDropdown.dropdownAction()
        heroKuappDropdown.dropdownSelect1()
        heroKuappDropdown.dropdownAction()
        heroKuappDropdown.dropdownSelect2()
        heroKuappDropdown.dropdownValidation().should('have.value', '2')
    })

    //Steps de Validacion Elementos Dinamicos
    it('Validacion de elementos dinamicos', () => {
        heroKuappDynamicElement.navigateToPage()
        heroKuappDynamicElement.titleValidation().should('have.text', "Dynamic Controls")
        heroKuappDynamicElement.checkbox().should('not.be.checked').check()
        heroKuappDynamicElement.addRemoveButton().click()
        heroKuappDynamicElement.messageLabel().should('have.text', "It's gone!")
        heroKuappDynamicElement.checkbox().should('not.exist')
        heroKuappDynamicElement.addRemoveButton().click()
        heroKuappDynamicElement.messageLabel().should('have.text', "It's back!")
        heroKuappDynamicElement.textBox().should('be.disabled')
        heroKuappDynamicElement.enableDisableButton().click()
        heroKuappDynamicElement.messageLabel().should('have.text', "It's enabled!")
        heroKuappDynamicElement.textBox().should('be.enabled')
        heroKuappDynamicElement.enableDisableButton().click() 
        heroKuappDynamicElement.messageLabel().should('have.text', "It's disabled!")
    })

    //Steps de Validacion LoadinPage
    it('Validacion de barra de carga', () => {
        heroKuappLoading.navigateToPage()
        heroKuappLoading.titleValidation().should('have.text', "Dynamically Loaded Page Elements")
        heroKuappLoading.startButton().click()
        heroKuappLoading.messageLabel().should('have.text', "Hello World!")
    })

    //Steps de Validacion EntryAdPage
    it('Validacion de manejo de comercial', () => {
        heroKuappEntryAd.navigateToPage()
        heroKuappEntryAd.closeAdButton().click()
        heroKuappEntryAd.waitTo()
        heroKuappEntryAd.titleValidation().should('have.text', "Entry Ad")
    })

    //Steps de Validacion DownloadPage
    it('Validacion de descarga de archivo', () => {
        heroKuappDownload.navigateToPage()
        heroKuappDownload.titleValidation().should('have.text', "File Downloader")
        heroKuappDownload.downloadLink().click()
    })

    //Steps de Validacion UploadPage
    it('Validacion de cargar un archivo', () => {
        heroKuappUpload.navigateToPage()
        heroKuappUpload.titleValidation().should('have.text', "File Uploader")
        heroKuappUpload.loadButton().selectFile('C:/Users/diego/OneDrive/Escritorio/test.csv')
        heroKuappUpload.uploadButton().click()
        heroKuappUpload.titleValidation().should('have.text', "File Uploaded!")
    })

    //Steps de Validacion FloatingPage
    it('Validacion de menu flotante', () => {
        heroKuappFloating.navigateToPage()
        heroKuappFloating.titleValidation().should('have.text', "Floating Menu")
        heroKuappFloating.downPage()
        heroKuappFloating.menuHome().click()
        heroKuappFloating.getUrl().should('include', 'home')
        heroKuappFloating.menuNews().click()
        heroKuappFloating.getUrl().should('include', 'news')
        heroKuappFloating.menuContact().click()
        heroKuappFloating.getUrl().should('include', 'contact')
        heroKuappFloating.menuAbout().click()
        heroKuappFloating.getUrl().should('include', 'about')
    })

    //Steps de Validacion ForgotPage
    it('Validacion de olvide mi password', () => {
        heroKuappForgot.navigateToPage()
        heroKuappForgot.titleValidation().should('have.text', "Forgot Password")
        heroKuappForgot.textBox()
        heroKuappForgot.retrieveButton().click()
        heroKuappForgot.serverLabel().should('have.text', "Internal Server Error")
    })

    //Steps de Validacion AuthPage
    it('Validacion de Login', () => {
        heroKuappAuth.navigateToPage()
        heroKuappAuth.titleValidation().should('have.text', "Login Page")
        heroKuappAuth.usernameSend()
        heroKuappAuth.passwordSend()
        heroKuappAuth.loginButton().click()
        heroKuappAuth.loginMsg().should('contain', "You logged into a secure area!")
        heroKuappAuth.logoutButton().click()
        heroKuappAuth.loginMsg().should('contain', "You logged out of the secure area!")
        heroKuappAuth.usernameWrongSend()
        heroKuappAuth.passwordSend()
        heroKuappAuth.loginButton().click()
        heroKuappAuth.loginMsg().should('contain', "Your username is invalid!")
    })

    //Steps de Validacion NestedFramesPage
    it('Validacion de Frames anidados', () => {
        heroKuappFrames.navigateToPage()
        heroKuappFrames.frameAction()
    })

    //Steps de Validacion GeolocationPage
    it('Validacion de Geolocalizacion', () => {
        heroKuappGeo.navigateToPage()
        heroKuappGeo.titleValidation().should('have.text', "Geolocation")
        heroKuappGeo.whereButton().click()
        heroKuappGeo.waitTo()
        heroKuappGeo.latitudeValue().should('contain', "19")
        heroKuappGeo.longitudeValue().should('contain', "-99")
    })

    //Steps de Validacion SliderBarPage
    it('Validacion de Slider', () => {
        heroKuappSlider.navigateToPage()
        heroKuappSlider.titleValidation().should('have.text', "Horizontal Slider")
        heroKuappSlider.sliderValue().should('have.text', "0")
        heroKuappSlider.sliderAction().invoke('val', 0.5).trigger('change')
        heroKuappSlider.sliderValue().should('have.text', "0.5")
        heroKuappSlider.sliderAction().invoke('val', 1).trigger('change')
        heroKuappSlider.sliderValue().should('have.text', "1")
        heroKuappSlider.sliderAction().invoke('val', 1.5).trigger('change')
        heroKuappSlider.sliderValue().should('have.text', "1.5")
        heroKuappSlider.sliderAction().invoke('val', 2).trigger('change')
        heroKuappSlider.sliderValue().should('have.text', "2")
        heroKuappSlider.sliderAction().invoke('val', 2.5).trigger('change')
        heroKuappSlider.sliderValue().should('have.text', "2.5")
        heroKuappSlider.sliderAction().invoke('val', 3).trigger('change')
        heroKuappSlider.sliderValue().should('have.text', "3")
        heroKuappSlider.sliderAction().invoke('val', 3.5).trigger('change')
        heroKuappSlider.sliderValue().should('have.text', "3.5")
        heroKuappSlider.sliderAction().invoke('val', 4).trigger('change')
        heroKuappSlider.sliderValue().should('have.text', "4")
        heroKuappSlider.sliderAction().invoke('val', 4.5).trigger('change')
        heroKuappSlider.sliderValue().should('have.text', "4.5")
        heroKuappSlider.sliderAction().invoke('val', 5).trigger('change')
        heroKuappSlider.sliderValue().should('have.text', "5")
    })

    //Steps de Validacion HoverPage
    it('Validacion de over elements', () => {
        heroKuappHover.navigateToPage()
        heroKuappHover.titleValidation().should('have.text', "Hovers")
        heroKuappHover.hiddenProfile1().should('not.be.visible').should('have.text', 'name: user1')
        heroKuappHover.hiddenProfile2().should('not.be.visible').should('have.text', 'name: user2')
        heroKuappHover.hiddenProfile3().should('not.be.visible').should('have.text', 'name: user3')
    })

    //Steps de Validacion InputsPage
    it('Validacion de Inputs', () => {
        heroKuappInputs.navigateToPage()
        heroKuappInputs.titleValidation().should('have.text', "Inputs")
        heroKuappInputs.inputTexbox().should('be.visible')
        const times = 30;
        for (let i = 0; i < times; i++){
            heroKuappInputs.inputTexbox().type('{uparrow}')
        }
        for (let i = 15; i < times; i++){
            heroKuappInputs.inputTexbox().type('{downarrow}')
        }
    })

    //Steps de Validacion JqueryMenuPage
    it('Validacion de menu en Jquery', () => {
        heroKuappJmenu.navigateToPage()
        heroKuappJmenu.titleValidation().should('have.text', "JQueryUI - Menu")
        heroKuappJmenu.enableMenu().click()
        heroKuappJmenu.downloadMenu().click()
        heroKuappJmenu.excelMenu().should('be.visible').click()
    })

    //Steps de Validacion AlertPage
    it('Validacion de Alerta simple', () => {
        heroKuappAlert.navigateToPage()
        heroKuappAlert.titleValidation().should('have.text', "JavaScript Alerts")
        heroKuappAlert.alert1().click()
        heroKuappAlert.textOnAlert1()
        heroKuappAlert.alertResult().should('have.text', 'You successfully clicked an alert')       
    })


    it('Validacion de Alerta aceptada', () => {
        heroKuappAlert.navigateToPage()
        heroKuappAlert.titleValidation().should('have.text', "JavaScript Alerts")
        heroKuappAlert.alert2().click()
        heroKuappAlert.textOnAlert2confirm()
        heroKuappAlert.alertResult().should('have.text', 'You clicked: Ok')
    })

    it('Validacion de Alerta cancelada', () => {
        heroKuappAlert.navigateToPage()
        heroKuappAlert.titleValidation().should('have.text', "JavaScript Alerts")
        heroKuappAlert.alert2().click()
        heroKuappAlert.textOnAlert2dismiss()
        heroKuappAlert.alertResult().should('have.text', 'You clicked: Cancel')  
    })

    it('Validacion de Alerta prompt', () => {
        heroKuappAlert.navigateToPage()
        heroKuappAlert.titleValidation().should('have.text', "JavaScript Alerts")
        heroKuappAlert.textOnAlert3Prompt()
        heroKuappAlert.alert3().click()
        heroKuappAlert.alertResult().should('have.text', 'You entered: Test01') 
    })

    it('Validacion de deteccion de tecla', () => {
        heroKuappKey.navigateToPage()
        heroKuappKey.titleValidation().should('have.text', "Key Presses")
        heroKuappKey.enterKey().type("{uparrow}")
        heroKuappKey.resultLabel().should('have.text', "You entered: UP")
        heroKuappKey.enterKey().type("{downarrow}")
        heroKuappKey.resultLabel().should('have.text', "You entered: DOWN")
        heroKuappKey.enterKey().type("{rightarrow}")
        heroKuappKey.resultLabel().should('have.text', "You entered: RIGHT")
        heroKuappKey.enterKey().type("{leftarrow}")
        heroKuappKey.resultLabel().should('have.text', "You entered: LEFT")
        heroKuappKey.enterKey().type("{esc}")
        heroKuappKey.resultLabel().should('have.text', "You entered: ESCAPE")
        heroKuappKey.enterKey().type("{backspace}")
        heroKuappKey.resultLabel().should('have.text', "You entered: BACK_SPACE")
    })

    it('Validacion de multiples pestañas', () => {
        heroKuappMulti.navigateToPage()
        heroKuappMulti.titleValidation().should('have.text', "Opening a new window")
        heroKuappMulti.newTabLink().invoke("removeAttr", "target").click()
        heroKuappMulti.titleValidation().should('have.text', "New Window")
    })

    it('Validacion de notificacion', () => {
        heroKuappNoti.navigateToPage()
        heroKuappNoti.titleValidation().should('have.text', "Notification Message")
        heroKuappNoti.launchNoti().click()
        heroKuappNoti.notificationMsg().invoke('text').then ((text) => {
            if(text.includes('success')){
                heroKuappNoti.notificationMsg().should('contain', "Action successful")
                                        }
            else if(text.includes('unsuccess')){
                heroKuappNoti.notificationMsg().should('contain', "Action unsuccessful")
                                        } 
            })
    })

    it('Validacion de shadow DOM', () => {
        heroKuappShadow.navigateToPage()
        heroKuappShadow.titleValidation().should('have.text', "Simple template")
        heroKuappShadow.validationLabel1().should('have.text', "Let's have some different text!")
        heroKuappShadow.validationLabel2().should('have.text', "Let's have some different text!")
        heroKuappShadow.validationLabel3().should('have.text', "In a list!")
    })

    it('Validacion de tabla de datos', () => {
        heroKuappTables.navigateToPage()
        heroKuappTables.titleValidation().should('have.text', "Data Tables")
        heroKuappTables.sortLastnames().click()
        heroKuappTables.firstNameValidation().should('have.text', 'Bach')
        heroKuappTables.sortDue().click().click()
        heroKuappTables.dueValidation().should('have.text', '$100.00')

    })

})
