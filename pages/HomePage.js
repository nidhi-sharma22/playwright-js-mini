class HomePage{

    constructor(page){

        this.page=page;
    }
    async logout(){

        await this.page.locator('#react-burger-menu-btn').click();
        await this.page.waitForSelector('#logout_sidebar_link', {state: 'visible'});
        await this.page.locator('#logout_sidebar_link').click();
    }
}
module.exports= {HomePage};