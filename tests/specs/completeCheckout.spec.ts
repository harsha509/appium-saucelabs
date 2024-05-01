import LoginScreen from '../pageObjects/LoginScreen.js';
import HomeScreen from '../pageObjects/HomeScreen.js';
import CartScreen from '../pageObjects/CartScreen.js';
import CheckoutScreen from '../pageObjects/CheckoutScreen.js';
import Gestures, { DIRECTIONS } from '../helpers/Gestures.js';

const price = '$9.99';

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

    it(`should be able to add an item into the cart`, async function() {
        await HomeScreen.menuBtn.click();
        await HomeScreen.allItems.click();
        await HomeScreen.filterIcon.click();
        await HomeScreen.sortByAtoZ.click();
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
        expect(await CartScreen.sauceLabsBikeLightItem("Sauce Labs Bike Light")).toBeDisplayed();
        expect(await CartScreen.textPrice.getText()).toEqual(price);

        await Gestures.checkIfDisplayedWithSwipe({
            scrollContainer: await CartScreen.sauceLabsBikeLightItem("Sauce Labs Bike Light"),
            searchableElement: await CartScreen.checkout,
            maxScrolls: 5,
            direction: DIRECTIONS.UP,
            percentage: 0.99,
        });

        await expect(await CartScreen.checkout).toBeDisplayed();
        await CartScreen.checkout.click();
    });

    it(`should be able to enter details, checkout, and verify`, async function() {
        await CheckoutScreen.checkoutFirstName.setValue("Sri");
        await CheckoutScreen.checkoutLastName.setValue("harsha");
        await CheckoutScreen.checkoutZipCode.setValue("50085");
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
