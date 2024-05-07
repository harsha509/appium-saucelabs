import WebView from '../helpers/WebView.js';
import CONSTANTS from '../../testData/Constants.json';

class WebViewScreen extends WebView {
    /**
     * Wait for the screen to be displayed based on Xpath
     */
    async waitForWebViewIsDisplayedByXpath (isShown = true): Promise<boolean|void> {
        const selector =  browser.isAndroid ? '*//android.webkit.WebView' : '*//XCUIElementTypeWebView';

        return $(selector).waitForDisplayed({
            timeout: CONSTANTS.VERY_LONG_TIMEOUT,
            reverse: !isShown,
        });
    }
}

export default new WebViewScreen();
