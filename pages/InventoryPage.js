const { BasePage } = require("./BasePage");

class InventoryPage extends BasePage{

    constructor(page){

        super(page);

    }


    async getProductTitles(){

        const titles = [];
        const productTitleLocator = this.page.locator('.inventory_item_name ');
        const count = await  productTitleLocator.count();

        for(let i=0; i<count; i++){

            const title = await productTitleLocator.nth(i).textContent();
            titles.push(title.trim())

        }

        return titles;

            
        
    }

    // Find the product card (like “Sauce Labs Backpack”) and click its “Add to Cart” button.
    async addToCartByProductName(productName){

        
        const productsCards = this.page.locator('.inventory_item ')
        const count = await productsCards.count();

        for(let i=0; i<count; i++){

            const card = productsCards.nth(i)
            const title = await card.locator('.inventory_item_name').textContent();

            if(title.trim() == productName){
                  
                await card.locator('button').click();
                console.log(`✅ Added to cart: ${productName}`);
                return;
            }
            
        }

        console.log(`❌ Product not found: ${productName}`);

    }
}

module.exports = { InventoryPage };