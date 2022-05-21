class LoginPage{
get userName() {return $('input[type="text"]')};
get password() {return $('input[type="password"]')};
get LoginButton() { return $('form button[type="submit"]')};

open(){
    browser.url(browser.options.baseUrl + '/login');
}
fillUserName(someUserName){
    this.userName.setValue(someUserName);
}
doLogin(someUserName, somePassword){
    this.userName.setValue(someUserName);
    this.password.setValue(somePassword);
    this.LoginButton.click();
    browser.pause(5000);
}
}
module.exports= new LoginPage
