import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {

    // await page.goto("https://www.saucedemo.com/v1/");
    // await page.locator("#user-name").fill("standard_user");
    // await page.locator("#password").fill("secret_sauce");
    // await page.locator("#login-button").click();

});

test('Login with valid credentials', async ({ page }, testInfo) => {
    //const pageLabel = await page.locator('.product_label').textContent();
    //console.log("PageLabel - ", pageLabel);
    console.log('Running Tests: ', testInfo.title); // Running Tests:  Login with valid credentials
    console.log('Project:', testInfo.project.name);// Project: chromium
    console.log(testInfo.file);
    // D:\2025\17-sid-pw-course\JS-PW-Collections\01-js-masterclass\pw-test2\tests\12-testInfo.spec.ts
    console.log('Location:', testInfo.file, testInfo.line, testInfo.column);
    //Location: D:\2025\17-sid-pw-course\JS-PW-Collections\01-js-masterclass\pw-test2\tests\12-testInfo.spec.ts 12 5

    console.log('Worker index:', testInfo.workerIndex); // Worker index: 6
    console.log('Retry value: ', testInfo.retry); // Retry value:  0
    if (testInfo.retry > 0) {
        console.log('This is a retry attempt:', testInfo.retry);
    }

});




test('known bug', async ({ }, testInfo) => {
    test.fail(); // mark as expected to fail
    console.log('Expected:', testInfo.expectedStatus); // Expected: failed
});

test.afterEach(async ({ }, testInfo) => {
    console.log('Status:', testInfo.status); // Status: passed
});
