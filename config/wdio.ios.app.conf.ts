import { join } from 'node:path';
import { config as baseConfig } from './wdio.shared.local.appium.conf.js';

const isGhActions = process.env.GITHUB_ACTION;

export const config: WebdriverIO.Config = {
    ...baseConfig,

    // ============
    // Specs
    // ============
    specs: ['../tests/specs/**/app.login.spec.ts'],

    // ============
    // Capabilities
    // ============
    // For all capabilities please check
    // http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
    capabilities: [
        {
            // The defaults you need to have in your config
            platformName: 'iOS',
            'wdio:maxInstances': 1,
            'appium:deviceName': 'iPhone 15',
            //
            // NOTE: Change this version according to the Simulator Version you have created on your local machine
            'appium:platformVersion': '17.4',
            'appium:orientation': 'PORTRAIT',
            'appium:automationName': 'XCUITest',
            // The path to the apps
            'appium:app': join(
                process.cwd(),
                'apps',
                // Change this name according to the apps version you downloaded
                'iOS.Simulator.SauceLabs.Mobile.Sample.app.2.7.1.zip'
            ),
            'appium:newCommandTimeout': 240,
            // This is needed to wait for the webview context to become available
            'appium:webviewConnectTimeout': 5000,
        }
    ]
};
