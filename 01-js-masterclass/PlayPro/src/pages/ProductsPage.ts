import { expect, Page } from '@playwright/test';
import { customLogger } from '../loggers/customLogger';
import locators from '../resources/locators/productsPage.json';

export class ProductsPage {

    readonly page: Page;
    readonly productsPageLabel;
    readonly productsItems;
    readonly boltTshirt;
    readonly onesieSweatShirt;
    logger = new customLogger();

    constructor(page: Page) {
        this.page = page;
        this.productsPageLabel = page.locator(locators.productsPageLabel);
        this.productsItems = page.locator(locators.productsItems);
        this.boltTshirt = page.locator(locators.boltTshirt);
        this.onesieSweatShirt = page.locator(locators.onesieSweatShirt);
    }


    async isAt(pageLabel: string) {
        this.logger.info("Validating Products Page Label");
        expect(await this.productsPageLabel.textContent()).toBe(pageLabel);
    }

    async printAllProductsName() {
        this.logger.info("Printing all product names");
        const prodNames = await this.productsItems.allTextContents();
        this.logger.info("prodNames : ", prodNames);
    }

    async validateBoltShirtPrice() {
        this.logger.info("validating bolt shirt price");
        await this.boltTshirt.click();
    }
}
