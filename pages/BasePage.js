class BasePage{

    //To hold common utility functions that can be used across all pages. 
    constructor(page) {
        this.page = page;
      }
    
      async goto(url) {
        await this.page.goto(url);
      }
    
      async click(locator) {
        await locator.click(); // ✅ this expects a Locator object
      }
    
      async type(locator, value) {
        await locator.fill(value); // ✅ works with Locator
      }
    
      async isVisible(locator) {
        return await locator.isVisible();
      }
    
      async getText(locator) {
        return await locator.textContent();
      }
    
      async getCurrentUrl() {
        return this.page.url();
      }
    
      async waitForElement(locator) {
        await locator.waitFor();
      }
    }
    
    module.exports = { BasePage };