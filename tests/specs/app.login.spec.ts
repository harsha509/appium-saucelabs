
import LoginScreen from '../pageObjects/LoginScreen.js';
import HomeScreen from '../pageObjects/HomeScreen.js';
import Gestures, { DIRECTIONS } from '../helpers/Gestures.js';

describe('WebdriverIO and Appium, when interacting with a login form,', () => {
    beforeEach(async () => {
        await LoginScreen.waitForLoginButton();
        await LoginScreen.waitForIsShown(true);
    });

    it('Should be able to login', async function() {

        await LoginScreen.inputUserName.setValue("standard_user");
        await LoginScreen.inputPassword.setValue("secret_sauce");
        await LoginScreen.login.click();

        await HomeScreen.waitForMenuButton();
        await HomeScreen.menuBtn.click();
        await driver.pause(1000);
        await HomeScreen.allItems.click();
        await driver.pause(1000);
        await HomeScreen.filterIcon.click();
        await HomeScreen.sortByAtoZ.click();
        await driver.pause(1000);
        await HomeScreen.sauceLabsBikeLight.click();

        await Gestures.checkIfDisplayedWithSwipe({
            scrollContainer: await HomeScreen.sauceLabsBikeLight,
            searchableElement: await HomeScreen.addToCartBtn,
            maxScrolls: 5,
            direction: DIRECTIONS.UP,
            percentage: 0.99,
        });

        await HomeScreen.addToCartBtn.click();

    });

});
