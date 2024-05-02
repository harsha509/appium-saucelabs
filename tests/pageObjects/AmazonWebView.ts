import AppScreen from './AppScreen.js';

const SELECTORS = {
    SCREEN: '~banner',
};

class AmazonWebViewScreen extends AppScreen {
    constructor () {
        super(SELECTORS.SCREEN);
    }

    get searchInputAmazon() {
        return $(`~Search Amazon.in`)
    }

    get goSearch() {
        return $(`~Go`)
    }

    get webview() {
        return $(`XCUIElementTypeWebView`)
    }

    get addToCart() {
        return $(`~Add to cart`)
    }

    get cartButton() {
        return $(`//XCUIElementTypeStaticText[@name="Cart"]`);
    }

    get proceedToCheckout() {
        return $(`//XCUIElementTypeButton[@name="Proceed to Buy (1 item)"]`)
    }
}

export default new AmazonWebViewScreen();
