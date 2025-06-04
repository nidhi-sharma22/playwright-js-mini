const testData = {
    validUser: {
      username: 'standard_user',
      password: 'secret_sauce',
    },
    invalidUser: {
      username: 'locked_out_user',
      password: 'wrong_pass',
    },
    urls: {
      login: 'https://www.saucedemo.com/',
      inventory: 'https://www.saucedemo.com/inventory.html',
    }
    // messages: {
    //   loginError: 'Epic sadface: Username and password do not match any user',
    // },
  };
  
  module.exports = { testData };
  