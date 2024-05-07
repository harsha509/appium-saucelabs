
import CONSTANTS from '../../testData/Constants.json';

export default class AppScreen {
    private selector: string;

    constructor (selector: string) {
        this.selector = selector;
    }

    /**
     * Wait for the login screen to be visible
     *
     * @param {boolean} isShown
     */
    async waitForIsShown (isShown = true): Promise<boolean | void> {
        return $(this.selector).waitForDisplayed({
            reverse: !isShown,
            timeout: CONSTANTS.MEDIUM_TIMEOUT,
            interval:CONSTANTS.SHORT_POLL,
            timeoutMsg: `Unable to find ${this.selector}, waited for ${CONSTANTS.MEDIUM_TIMEOUT} with poll ${CONSTANTS.SHORT_POLL}`
        });
    }
}
