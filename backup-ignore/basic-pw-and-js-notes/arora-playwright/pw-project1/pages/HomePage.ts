import { Page } from '@playwright/test'
import { BasePage } from './BasePage';
import allLocators from '../locators/locators.json';

export class HomePage extends BasePage {

    private locators = allLocators.HomePage;

    constructor(page: Page) {
        super(page);
    }

    async navigateToHomePage() {
        await this.navigateTo('/');
    }

    async findNewCar() {
        await this.hover(this.locators.newCarsMenu);
        await this.click(this.locators.findNewCarsMenu)
    }

}