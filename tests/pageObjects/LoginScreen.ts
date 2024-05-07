import AppScreen from './AppScreen.js';
import CONSTANTS from "../../testData/Constants.json";

const SELECTORS = {
    SCREEN: '~test-LOGIN',
};

class LoginScreen extends AppScreen {
    constructor () {
        super(SELECTORS.SCREEN);
    }

    async waitForLoginButton ():Promise<boolean|void> {
        return $('~test-LOGIN').waitForDisplayed({
            timeout: CONSTANTS.LONG_TIMEOUT,
            interval: CONSTANTS.SHORT_POLL,
            timeoutMsg: `Unable to locate login button under ${CONSTANTS.LONG_TIMEOUT}`
        });
    }

    get inputUserName() {
        return $(`~test-Username`)
    }

    get inputPassword() {
        return $(`~test-Password`)
    }

    get login() {
        return $(SELECTORS.SCREEN)
    }
}

export default new LoginScreen();
