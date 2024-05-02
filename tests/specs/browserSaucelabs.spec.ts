import LoginScreen from '../pageObjects/LoginScreen.js';
import HomeScreen from '../pageObjects/HomeScreen.js';
import SiteScreen from '../pageObjects/SiteScreen.js';
import AmazonWebView from '../pageObjects/AmazonWebView.js';

describe('Login into saucelabs app, select item and complete checkout', () => {
    before(async () => {
        await LoginScreen.waitForLoginButton();
        await LoginScreen.waitForIsShown(true);
    });

    it('should be able to login', async function() {
        await LoginScreen.inputUserName.setValue("standard_user");
        await LoginScreen.inputPassword.setValue("secret_sauce");
        await LoginScreen.login.click();
        await HomeScreen.waitForMenuButton();
        expect(HomeScreen.waitForMenuButton()).toBeDisplayed();
    });

    it(`Should be able to switch to webview, enter amazon link and navigate`, async function() {
        await HomeScreen.menuBtn.click();
        await HomeScreen.webView.click();
        await driver.pause(2000);
        await SiteScreen.siteInputField.setValue("https://www.amazon.in");
        await SiteScreen.gotoSiteBtn.click();
        await driver.pause(15000);
        expect(await AmazonWebView.searchInputAmazon).toBeDisplayed();
    });


    it(`should be able to very item in cart and validate procced to cehckout`, async function() {
        await driver.pause(1000);
        await AmazonWebView.searchInputAmazon.setValue("Samsung");
        await AmazonWebView.goSearch.click();
        await AmazonWebView.addToCart.click();
        expect(await AmazonWebView.cartButton.getText()).toContain("1");
        await AmazonWebView.cartButton.click();
        expect(await AmazonWebView.proceedToCheckout).toBeDisplayed();
        // Note cant proceed further as it is amazon web as it asks for payment info
    });
});
