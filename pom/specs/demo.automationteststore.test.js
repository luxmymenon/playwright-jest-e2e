const { chromium } = require('playwright');
const AccountHomePage = require('../models/AccountHome.page');
const LoginPage = require('../models/Login.page');

describe(`UI tests for automationteststore using playwright`, () => {
    // jest timeout is by default 5000ms to run tests, with this we override this value
    jest.setTimeout(10000);


    let browser = null;
    let page = null;
    let context = null;
    // array to store element handles of the cells on the first row
    

    // runs before all tests
    beforeAll(async() =>{
      browser = await chromium.launch({headless:false, slowMo:300});
      context = await browser.newContext();
      page = await context.newPage();
      loginPage = new LoginPage(page);
      accountHomePage = new AccountHomePage(page);      
      await loginPage.navigate();
      await loginPage.clickAccountLogin();
    });

    // runs after all tests
    afterAll(async() =>{
      await context.close();
      await browser.close();
    });


    test(`Should be able to login with valid credentials`, async() =>{
        await loginPage.login('jella','password');
        expect(await page.title()).not.toBeNull();
        // an assertion could go here
    });

    test(`Should check if login is successful`, async() =>{
        
        expect(await accountHomePage.getUserName()).toBe('ella');
        
    });

    

});