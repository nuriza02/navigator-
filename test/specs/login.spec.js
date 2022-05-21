const loginPage = require('../pageobjects/Login.po.js');
const params = require('./../test_params.json')

describe('login test suit', function(){
    it('schould login as admin', function(){

        loginPage.open();

        loginPage.doLogin(params.userCreds.login, params.userCreds.password);
     
    });
});