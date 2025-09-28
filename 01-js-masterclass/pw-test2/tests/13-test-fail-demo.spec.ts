import { test, expect } from '@playwright/test';

test('login button works', async ({ page }) => {
    test.fail(); // Marked as expected to fail

    await page.goto('https://www.saucedemo.com/v1/');

    // Deliberatily Failed Assertion
    await expect(page).toHaveURL('/dashboard');
});

test('login button works2', async ({ page }) => {
    test.fail(); // Marked as expected to fail

    await page.goto('https://www.saucedemo.com/v1/');

});

