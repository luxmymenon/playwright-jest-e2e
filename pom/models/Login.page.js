const BasePage = require('./Base.page');
class LoginPage extends BasePage{
    constructor(page){
        super(page);

        this.userNameField = '#loginFrm_loginname';
        this.passwordField = '#loginFrm_password';
        this.loginButton = '//button[@title="Login"]' ; 
        this.accountLoginButton = 'a[href$="login"]';
           
    }

    async navigate(){
       await super.navigate();
       //   await Object.getPrototypeOf(Object.getPrototypeOf(this)).navigate('index.php?rt=account/login');
    }

    async clickAccountLogin(){
        await this.page.click(this.accountLoginButton);
    }

    async login(username, password){
        await this.page.fill(this.userNameField, username);
        await this.page.fill(this.passwordField, password);
        await this.page.click(this.loginButton);
    }

}
module.exports = LoginPage;