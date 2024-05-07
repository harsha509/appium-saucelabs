
import AppScreen from './AppScreen.js';

const SELECTORS = {
    SCREEN: '~test-First Name',
};

class CheckoutScreen extends AppScreen {

    constructor () {
        super(SELECTORS.SCREEN);
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

export default new CheckoutScreen();
