import LoginScreen from '../pageObjects/LoginScreen.js';
import HomeScreen from '../pageObjects/HomeScreen.js';
import CartScreen from '../pageObjects/CartScreen.js';
import CheckoutScreen from '../pageObjects/CheckoutScreen.js';
import Gestures, { DIRECTIONS } from '../helpers/Gestures.js';
import testData from "../../testData/testData.json";
import CONSTANTS from "../../testData/Constants.json";

describe('Login into saucelabs app, select item and complete checkout', () => {
    before(async () => {
        await LoginScreen.waitForLoginButton();
        await LoginScreen.waitForIsShown(true);
    });

    it('should be able to login', async function() {
        await LoginScreen.inputUserName.setValue(testData.loginUser);
        await LoginScreen.inputPassword.setValue(testData.loginPassword);
        await LoginScreen.login.click();
        await HomeScreen.waitForMenuButton();
        expect(HomeScreen.menuBtn).toBeDisplayed();
    });

    it(`should be able to add an item into the cart`, async function() {
        await HomeScreen.clickOnMenuBtn();
        await HomeScreen.clickOnAllItems();
        await HomeScreen.clickOnFilterIcon();
        await HomeScreen.clickOnSortA2Z();

        await HomeScreen.sauceLabsBikeLight.waitForClickable({
            timeout: CONSTANTS.SHORT_TIMEOUT,
            interval: CONSTANTS.SHORT_POLL,
            timeoutMsg: `${HomeScreen.sauceLabsBikeLight} is not clickable under ${CONSTANTS.SHORT_TIMEOUT}`
        });

        await HomeScreen.sauceLabsBikeLight.click();

        await Gestures.checkIfDisplayedWithSwipe({
            scrollContainer: await HomeScreen.sauceLabsBikeLight,
            searchableElement: await HomeScreen.addToCartBtn,
            maxScrolls: 3,
            direction: DIRECTIONS.UP,
            percentage: 0.99,
        });

        await HomeScreen.addToCartBtn.click();
        expect(await HomeScreen.cartBtn.getText()).toContain("1");
        await HomeScreen.cartBtn.click();
    });

    it(`should be able to see the added item in the cart page, check the price, and continue to checkout`, async function() {
        expect(await CartScreen.sauceLabsBikeLightItem(testData.SauceLabsItem)).toBeDisplayed();
        expect(await CartScreen.textPrice.getText()).toEqual(testData.CartPrice);

        await Gestures.checkIfDisplayedWithSwipe({
            scrollContainer: await CartScreen.sauceLabsBikeLightItem(testData.SauceLabsItem),
            searchableElement: await CartScreen.checkout,
            maxScrolls: 5,
            direction: DIRECTIONS.UP,
            percentage: 0.99,
        });

        await expect(await CartScreen.checkout).toBeDisplayed();
        await CartScreen.checkout.click();
    });

    it(`should be able to enter details, checkout, and verify`, async function() {
        // wait for shown and throw error if not found
        await CheckoutScreen.waitForIsShown(true);
        await CheckoutScreen.checkoutFirstName.setValue(testData.CheckOutFirstName);
        await CheckoutScreen.checkoutLastName.setValue(testData.CheckoutLastName);
        await CheckoutScreen.checkoutZipCode.setValue(testData.CheckoutZipCode);
        if (await driver.isKeyboardShown()) {
            await CheckoutScreen.checkoutFirstName.click();
        }
        await CheckoutScreen.continue.click();
        await Gestures.checkIfDisplayedWithSwipe({
            scrollContainer: await CheckoutScreen.shippingInfo,
            searchableElement: await CheckoutScreen.finish,
            maxScrolls: 15,
            direction: DIRECTIONS.UP,
            percentage: 0.99,
        });

        await CheckoutScreen.finish.click();
        await expect(CheckoutScreen.thankYouMessage).toBeDisplayed();
    });
});
