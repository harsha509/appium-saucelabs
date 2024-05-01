import AppScreen from './AppScreen.js';

const SELECTORS = {
    SCREEN: '~test-LOGIN',
};

class LoginScreen extends AppScreen {
    constructor () {
        super(SELECTORS.SCREEN);
    }

    async waitForLoginButton ():Promise<boolean|void> {
        return $('~test-LOGIN').waitForDisplayed({
            timeout: 20000,
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
