const {test, expect} = require('../fixtures/baseTest');

test('User is able to see inventory items', async({inventoryPage}) => {

   
    
    const titles= await inventoryPage.getProductTitles();
    console.log(titles);



});