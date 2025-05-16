const {test, expect} = require('@playwright/test');
const loginPage = require('../pages/loginPage');
const LoginPage = require('../pages/loginPage')

test('User is able to login', async({page}) => {

    const login = new loginPage(page)

    await login.goto();
    await login.login('student','Password123')
    await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/')
});