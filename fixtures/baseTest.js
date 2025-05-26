const base = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage')
const { HomePage } = require('../pages/HomePage')

const test = base.test.extend({

loginPage: async({page}, use) => {

    const login = new LoginPage(page);
    await use(login);
},

homePage: async({page}, use) => {
        
    await use(new HomePage(page))
}

});

const expect = base.expect;


module.exports = { test, expect };