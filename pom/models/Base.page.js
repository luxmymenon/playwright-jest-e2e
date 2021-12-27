class BasePage{
    constructor(page){
        this.page = page;
    }

    async navigate(path){
       await this.page.goto('https://automationteststore.com/');
        
    }

}
module.exports = BasePage;