import LoginScreen from '../pageObjects/LoginScreen.js';
import HomeScreen from '../pageObjects/HomeScreen.js';
import SiteScreen from '../pageObjects/SiteScreen.js';
import AmazonWebView from '../pageObjects/AmazonWebView.js';
import testData from "../../testData/testData.json";
import CONSTANTS from "../../testData/Constants.json";

describe('Login into saucelabs app, select item and complete checkout', () => {
    before(async () => {
        await LoginScreen.waitForLoginButton();
        // wait for element and handle exception/throw error using promise
        await LoginScreen.waitForIsShown(true);
    });

    it('should be able to login', async function() {
        await LoginScreen.inputUserName.setValue(testData.loginUser);
        await LoginScreen.inputPassword.setValue(testData.loginPassword);
        await LoginScreen.login.click();
        await HomeScreen.waitForMenuButton();
        expect(HomeScreen.waitForMenuButton()).toBeDisplayed();
    });

    it(`Should be able to switch to webview, enter amazon link and navigate`, async function() {
        await HomeScreen.clickOnMenuBtn();
        await HomeScreen.clickOnWebView();
        await SiteScreen.waitForMenuButton();
        await SiteScreen.siteInputField.setValue(testData.amazonUrl);
        await SiteScreen.clickOnGoToSiteBtn();
        expect(await AmazonWebView.searchInputAmazon).toBeDisplayed();
    });


    it(`should be able to very item in cart and validate proceed to checkout`, async function() {
        await AmazonWebView.waitForIsShown(true);
        await AmazonWebView.searchInputAmazon.setValue(testData.AmazonSearchInput);
        // another way to handle exceptions in WDIO instead of try catch
        await AmazonWebView.goSearch.waitForClickable({
            timeout: CONSTANTS.SHORT_TIMEOUT,
            interval: CONSTANTS.SHORT_POLL,
            timeoutMsg: `${AmazonWebView.goSearch} is not clickable under ${CONSTANTS.SHORT_TIMEOUT}`
        });
        await AmazonWebView.goSearch.click();

        await AmazonWebView.addToCart.waitForClickable({
            timeout: CONSTANTS.SHORT_TIMEOUT,
            interval: CONSTANTS.SHORT_POLL,
            timeoutMsg: `${AmazonWebView.addToCart} is not clickable under ${CONSTANTS.SHORT_TIMEOUT}`
        });

        await AmazonWebView.addToCart.click();
        expect(await AmazonWebView.cartButton.getText()).toContain("1");
        await AmazonWebView.cartButton.click();
        expect(await AmazonWebView.proceedToCheckout).toBeDisplayed();
        // Note cant proceed further as it is amazon web as it asks for payment info
    });
});
