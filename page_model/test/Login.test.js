import WelcomePage from '../pages/WelcomePage'
import LoginPage from '../pages/LoginPage'
import MyNotesPage from '../pages/MyNotesPage'
import { CREDENTIALS } from '../data/Constants'

fixture('Login feature testing')
    .page `http://testapp.galenframework.com/`

test('Login with a valid user', async t => {
    await t
        .click(WelcomePage.loginButton)
        .typeText(LoginPage.usernameField, CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)

    await t.expect(MyNotesPage.pageTitle.exist).ok()
})

test('Login with an invalid user', async t => {
    await t
        .click(WelcomePage.loginButton)
        .typeText(LoginPage.usernameField, CREDENTIALS.INVALID_USER.USERNAME)
        .typeText(LoginPage.loginButton)
    
    await t.expect(LoginPage.errorMessage.exist).ok()
    await t.expect(LoginPage.errorMessage.innerText).eql("The username or password are incorrect")
})

test('Logout from product´s page')
//Expected: Validate user navigates to the login page.

test('Navigate to the shoping cart')
//Expected: Validate user navigates to the shopping cart page.

test('Add a single item to the shopping cart')
//Expected: Validate the item has been added to the shopping cart.

test('Add multiple items to the shopping cart')
//Expected: Validate all the items have been added to the shopping cart.

test('Continue with missing mail information')
//Expected: Validate error message is displayed in the user's information page.

test('Fill user´s information')
//Expected: Validate the user navigates to the overview page once his data has been filled.

test('Final order items')
//Expected: Validate items in the overview page match with the added items.

test('Complete a purchase')
//Expected: Validate the user navigates to the confirmation page.

/*
.beforeEach(async t => {
        await t.click(welcomePage.loginButton)
    })


test.only('Users can login using valid credentials', async t => {
    await t
        .click(WelcomePage.loginButton)
        .typeText(loginPage.usernameField, CREDENTIALS.VALID_USER.USERNAME)
        .typeText(loginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD)
        .click(loginPage.loginButton)

    await t.expect(MyNotesPage.pageTitle.exist).ok()
    await t.expect(LoginPage.errorMessage.innerText.eql('The username or password are incorrect'))

})*/