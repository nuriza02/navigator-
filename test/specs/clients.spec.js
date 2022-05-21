const LoginPage = require('./../pageobjects/Login.po');
const ClientPage = require('./../pageobjects/client.po')

describe('Clients page', function(){
    beforeEach(function(){
        LoginPage.open();
        LoginPage.doLogin("Admin","Admin@Navi")
    });
    afterEach(function(){
        browser.reloadSession();
    })

    it('should add client', function(){
        ClientPage.clickOnAddClienButton();
        browser.pause(2000);

        let surNameField = $('input[formcontrolname="userSurname"]');
        surNameField.setValue("Akzholova");
        browser.pause(2000);
        let nameField = $('input[formcontrolname="userName"]');
        nameField.setValue("Nuriza");
        browser.pause(2000);
        let midleNameField = $('input[formcontrolname="userMiddleName"');
        midleNameField.setValue("Akzholovna");
        browser.pause(2000);
        let sexChoice = $('//div[@class="mat-radio-inner-circle"][2]//');
        sexChoice.click();
        browser.pause(2000);
    });
    
    xit('should open first client',function(){
        let firstClientRow = $('table.crm-navigator-table tbody tr td span');
        firstClientRow.click();
        browser.pause(5000);
    });


});

