import { expect, Page } from '@playwright/test';
import { customLogger } from '../loggers/customLogger';
import locators from '../resources/locators/loginPage.json';

export class LoginPage {

    readonly page: Page;
    readonly usernameInput;
    readonly passwordInput;
    readonly loginButton;
    readonly homePageTitle;
    logger = new customLogger();

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator(locators.usernameInput);
        this.passwordInput = page.locator(locators.passwordInput);
        this.loginButton = page.locator(locators.loginButton);
        this.homePageTitle = page.locator(locators.homePageTitle);
    }


    async goto() {
        this.logger.info("launched the application");
        await this.page.goto('https://www.saucedemo.com/v1/');
    }

    async login(username: string, password: string) {
        this.logger.info("entering username");
        await this.usernameInput.fill(username);
        this.logger.info("entering password");
        await this.passwordInput.fill(password);
        this.logger.info("login button is clicking");
        await this.loginButton.click();
    }

    async verifyLoginSuccess(title: string) {
        this.logger.info("validating homepage title");
        expect(await this.homePageTitle.textContent()).toBe(title);
    }
}
