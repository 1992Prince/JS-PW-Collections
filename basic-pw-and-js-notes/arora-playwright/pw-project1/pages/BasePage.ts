import { Page } from '@playwright/test'

export class BasePage {

    protected page: Page;

    constructor(page: Page) {
        this.page = page

    }

    async click(selector: string) {
        await this.page.locator(selector).click();
    }

    async fill(selector: string, text: string) {
        await this.page.locator(selector).fill(text);
    }

    async getText(selector: string) {
        return this.page.locator(selector).innerText();
    }

    async getAttribute(selector: string, attribute: string) {
        return this.page.locator(selector).getAttribute(attribute);
    }

    async isVisible(selector: string) {
        return this.page.locator(selector).isVisible();
    }

    async isChecked(selector: string) {
        return this.page.locator(selector).isChecked();
    }

    async check(selector: string) {
        await this.page.locator(selector).check();
    }

    async hover(selector: string) {
        await this.page.locator(selector).hover();
    }

    async navigateTo(url: string) {
        await this.page.goto(url);
    }

}