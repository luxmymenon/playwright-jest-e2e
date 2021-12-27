const BasePage = require('./Base.page');
class AccountHomePage extends BasePage{
    constructor(page){
        super(page);
        this.userAccountValue = '//span[@class="subtext"]';
             
    }

    async getUserName(){
        let user = await this.page.$(this.userAccountValue);
        return await user.innerText();
    }

    async navigate(){
        await super.navigate('index.php?rt=account/account'); 
    }

}
module.exports = AccountHomePage;