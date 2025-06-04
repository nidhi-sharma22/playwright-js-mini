const { BasePage } = require("./BasePage");

class LoginPage extends BasePage{

    constructor(page){

        super(page);

        this.usernameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');

    }

    async goto(){
        await super.goto("https://www.saucedemo.com/");
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.click(this.loginButton);
      }
    
}
module.exports = {LoginPage};