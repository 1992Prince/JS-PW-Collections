import { test, expect } from '@playwright/test';

// similarly we can have beforeALL, afterEach, afterAll hooks

test.beforeEach(async ({ page }) => {

    await page.goto("https://www.saucedemo.com/v1/");
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();

});

test('Login with valid credentials', async ({ page }) => {
    const pageLabel = await page.locator('.product_label').textContent();
    console.log("PageLabel - ", pageLabel);
});

test('Validate Products Page', async ({ page }) => {

    const productItems = await page.locator(".inventory_item_name").allTextContents();
    console.log("Product Items - ", productItems);
    await page.locator('#item_1_title_link').click();
});