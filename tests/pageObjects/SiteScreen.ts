import AppScreen from './AppScreen.js';
import CONSTANTS from "../../testData/Constants.json";

const SELECTORS = {
    SCREEN: '~test-GO TO SITE',
};

class SiteScreen extends AppScreen {
    constructor () {
        super(SELECTORS.SCREEN);
    }

    async waitForMenuButton ():Promise<boolean|void> {
        return $('~test-GO TO SITE').waitForDisplayed({
            timeout: CONSTANTS.LONG_TIMEOUT,
            interval: CONSTANTS.SHORT_POLL,
            timeoutMsg: `Unable to locate Go TO Site button under ${CONSTANTS.LONG_TIMEOUT}`
        });
    }

    get siteInputField() {
        return $(`~test-enter a https url here...`)
    }

    get gotoSiteBtn() {
        return $(SELECTORS.SCREEN)
    }

    async clickOnGoToSiteBtn() {
        await this.gotoSiteBtn.waitForClickable({
            timeout: CONSTANTS.SHORT_TIMEOUT,
            interval: CONSTANTS.SHORT_POLL,
            timeoutMsg: `${this.gotoSiteBtn} is not clickable under ${CONSTANTS.SHORT_TIMEOUT}`
        });
        await this.gotoSiteBtn.click();
    }

}

export default new SiteScreen();
