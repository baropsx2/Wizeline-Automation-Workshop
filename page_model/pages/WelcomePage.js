import { Selector } from 'testcafe'

class WelcomePage {
    constructor(){
        this.loginButton = Selector('#welcome-page > p:nth-child(4) > button')
    }
}

export default new WelcomePage()