import AppScreen from './AppScreen.js';

const SELECTORS = {
    SCREEN: '~test-GO TO SITE',
};

class SiteScreen extends AppScreen {
    constructor () {
        super(SELECTORS.SCREEN);
    }

    async waitForMenuButton ():Promise<boolean|void> {
        return $('~test-GO TO SITE').waitForDisplayed({
            timeout: 20000,
        });
    }

    get siteInputField() {
        return $(`~test-enter a https url here...`)
    }

    get gotoSiteBtn() {
        return $(SELECTORS.SCREEN)
    }

}

export default new SiteScreen();
