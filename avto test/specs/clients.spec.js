const LoginPage = require('../pageobjects/Login.po');
const ClientPage = require('../pageobjects/client.po')

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
        surNameField.setValue("Матураимова");
        browser.pause(2000);
        let nameField = $('input[formcontrolname="userName"]');
        nameField.setValue("Марьям");
        browser.pause(2000);
        let midleNameField = $('input[formcontrolname="userMiddleName"]');
        midleNameField.setValue("Матураимовна");
        browser.pause(2000);
        let sexChoice = $('div.add-user-modal mat-radio-group[formcontrolname="sex"] mat-radio-button:nth-child(2)');
        sexChoice.click();
        browser.pause(2000);
        let emailField = $('input[formcontrolname="email"]');
        emailField.setValue("mary24.12@gmail.com");
        browser.pause(2000);
        let phoneField = $('input[formcontrolname="phone"]');
        phoneField.setValue("996708865675");
        browser.pause(2000);
        let professionField = $('mat-select[formcontrolname="profession"]');
        professionField.click();
        let professionFieldOption = $('mat-option[id="mat-option-2"]');
        professionFieldOption.click();
        browser.pause(2000);
        let birthdayField = $('input[formcontrolname="birthday"]');
        birthdayField.setValue("02/02/2000");
        browser.pause(2000);
        let saveField = $('button[name="save"]');
        saveField.click();
        browser.pause(5000);
        let searchField =$('input[name="search"]');
        searchField.setValue("Марьям");
        browser.pause(5000);
        let knopkaField =$('tr[class="crm-navigator-table__row ng-star-inserted"]');
        knopkaField.click();
        browser.pause(2000);
        let surName2Field = $('input[placeholder="Фамилия"]');
        surName2Field.setValue("Нарбекова");
        browser.pause(2000);
        let name2Field = $('input[placeholder="Имя"]');
        name2Field.setValue("Наргиля");
        browser.pause(2000);
        let midleName2Field = $('input[placeholder="Отчество"]');
        midleName2Field.setValue("Маликовна");
        browser.pause(2000);
        let birthday2Field = $('input[placeholder="Дата рождения"]');
        birthday2Field.setValue("26/06/2002");
        browser.pause(2000);

        
        
        let sohranitField = $('button[name="save"]');
        sohranitField.click();
        browser.pause(2000);



    
        
    });
    
    xit('should open first client',function(){
        let firstClientRow = $('table.crm-navigator-table tbody tr td span');
        firstClientRow.click();
        browser.pause(5000);
    });


});

