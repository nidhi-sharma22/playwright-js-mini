const {test, expect} = require('../fixtures/baseTest');

test('User is able to logout', async({loginPage, homePage}) => {

    
    await loginPage.goto();
    await loginPage.login('standard_user','secret_sauce')
    await expect(loginPage.page).toHaveURL('https://www.saucedemo.com/inventory.html')
    await expect(loginPage.page.locator('.inventory_list')).toBeVisible();
    await homePage.logout();
    await expect(loginPage.loginButton).toBeVisible();
});