const {test, expect} = require('../fixtures/baseTest');
//const { InventoryPage } = require('../pages/InventoryPage');
const { testData } = require('../test-data/test-data');


test('User is able to login', async({loginPage, inventoryPage}) => {

   
    await loginPage.goto();
    await loginPage.login(testData.validUser.username,testData.validUser.password)
    await expect(loginPage.page).toHaveURL('https://www.saucedemo.com/inventory.html')
    await expect(loginPage.page.locator('.inventory_list')).toBeVisible();
    const titles= await inventoryPage.getProductTitles();
    console.log('Product Titles:',titles);
    await inventoryPage.addToCartByProductName('Sauce Labs Bolt T-Shirt');

    //console.log('Product Added');

});