import { Selector, t } from 'testcafe'

class LoginPage{
    constructor (){
        this.usernameField = Selector('input[name="login.username"]')
        this.passwordField = Selector('input[name="login.password"]')
        this.loginButton = Selector('.btn.btn-primary')
        this.errorMessage = Selector('#login-error-message')
    }
/*
    async submitLoginForm(username, password){
        await t.typeText(this.usernameField, CREDENTIALS.VALID_USER.USERNAME)
        await t.typeText(loginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD)
        await t.click(loginPage.loginButton)
    }
*/    
}

export default new LoginPage()
