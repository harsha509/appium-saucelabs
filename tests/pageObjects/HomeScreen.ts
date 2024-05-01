import AppScreen from './AppScreen.js';

const SELECTORS = {
    SCREEN: '~test-Menu',
};

class HomeScreen extends AppScreen {
    constructor () {
        super(SELECTORS.SCREEN);
    }

    async waitForMenuButton ():Promise<boolean|void> {
        return $('~test-Menu').waitForDisplayed({
            timeout: 20000,
        });
    }

    get menuBtn() {
        return $(SELECTORS.SCREEN)
    }

    get allItems() {
        return $(`~test-ALL ITEMS`)
    }

    get filterIcon() {
        return $(`//XCUIElementTypeOther[@name="test-Modal Selector Button"]/XCUIElementTypeOther/XCUIElementTypeOther`)
    }

    get sortByAtoZ() {
        return $(`~Name (A to Z)`);
    }

    get sauceLabsBikeLight() {
        return $(`//XCUIElementTypeImage[@name="assets/src/img/bike-light.jpg"]`);
    }

    get addToCartBtn() {
        return $(`~test-ADD TO CART`)
    }

    get cartBtn() {
        return $(`~test-Cart`);
    }

    get checkoutFirstName() {
        return $(`~test-First Name`);
    }

    get checkoutLastName() {
        return $(`~test-Last Name`);
    }

    get checkoutZipCode() {
        return $(`~test-Zip/Postal Code`);
    }

    get continue() {
        return $(`~test-CONTINUE`)
    }

    get shippingInfo() {
        return $(`~Shipping Information: FREE PONY EXPRESS DELIVERY!`)
    }
    get finish() {
        return $(`~test-FINISH`);
    }

    get thankYouMessage() {
        return $(`//XCUIElementTypeStaticText[@name="THANK YOU FOR YOU ORDER"]`)
    }
}

export default new HomeScreen();
