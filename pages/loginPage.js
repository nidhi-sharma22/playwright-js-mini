class loginPage{

    constructor(page){

        this.page=page;

        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#submit');

    }

    async goto(){
        await this.page.goto("https://practicetestautomation.com/practice-test-login/");
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
      }
    
}
module.exports =loginPage;