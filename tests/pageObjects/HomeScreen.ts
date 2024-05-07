import AppScreen from './AppScreen.js';
import CONSTANTS from '../../testData/Constants.json';

const SELECTORS = {
    SCREEN: '~test-Menu',
};

class HomeScreen extends AppScreen {
    constructor () {
        super(SELECTORS.SCREEN);
    }

    async waitForMenuButton ():Promise<boolean|void> {
        return $('~test-Menu').waitForDisplayed({
            timeout: CONSTANTS.LONG_TIMEOUT,
            interval: CONSTANTS.SHORT_POLL,
            timeoutMsg: `Unable to locate menu button under ${CONSTANTS.LONG_TIMEOUT}`
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

    get webView() {
        return $(`~test-WEBVIEW`);
    }

    async clickOnMenuBtn() {
        await this.menuBtn.waitForClickable({
            timeout: CONSTANTS.SHORT_TIMEOUT,
            interval: CONSTANTS.SHORT_POLL,
            timeoutMsg: `${this.menuBtn} is not clickable under ${CONSTANTS.SHORT_TIMEOUT}`
        });
        await this.menuBtn.click();
    }

    async clickOnWebView() {
        await this.webView.waitForClickable({
            timeout: CONSTANTS.SHORT_TIMEOUT,
            interval: CONSTANTS.SHORT_POLL,
            timeoutMsg: `${this.webView} is not clickable under ${CONSTANTS.SHORT_TIMEOUT}`
        });
        await this.webView.click();
    }

    async clickOnAllItems() {
        await this.allItems.waitForClickable({
            timeout: CONSTANTS.SHORT_TIMEOUT,
            interval: CONSTANTS.SHORT_POLL,
            timeoutMsg: `${this.allItems} is not clickable under ${CONSTANTS.SHORT_TIMEOUT}`
        });
        await this.allItems.click();
    }


    async clickOnFilterIcon() {
        await this.filterIcon.waitForClickable({
            timeout: CONSTANTS.SHORT_TIMEOUT,
            interval: CONSTANTS.SHORT_POLL,
            timeoutMsg: `${this.filterIcon} is not clickable under ${CONSTANTS.SHORT_TIMEOUT}`
        });
        await this.filterIcon.click();
    }

    async clickOnSortA2Z() {
        await this.sortByAtoZ.waitForClickable({
            timeout: CONSTANTS.SHORT_TIMEOUT,
            interval: CONSTANTS.SHORT_POLL,
            timeoutMsg: `${this.sortByAtoZ} is not clickable under ${CONSTANTS.SHORT_TIMEOUT}`
        });
        await this.sortByAtoZ.click();
    }

}

export default new HomeScreen();
