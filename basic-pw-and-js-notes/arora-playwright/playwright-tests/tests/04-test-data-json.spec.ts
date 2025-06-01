import { test, expect } from '@playwright/test';
import testData from '../test-data/test-data.json';

test('Assertions 1', async ({ page }) => {

    await page.goto('https://www.google.com/');
    const srchBx = page.locator("#APjFqb");
    await srchBx.fill(testData[0].username);

    await page.waitForTimeout(2000);
    await srchBx.clear();
    await srchBx.fill(testData[1].password);
    await page.waitForTimeout(2000);

    await page.pause();

    await page.waitForTimeout(2000);
    await srchBx.clear();
    await srchBx.fill(testData[2].mobile);
    await page.waitForTimeout(2000);


});
