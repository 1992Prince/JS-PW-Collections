import { test, expect } from '@playwright/test';
import { getJsonArray, getJsonObject, getTestData } from '../utils/testdatareader';
import { customLogger } from '../loggers/customLogger';

test('fetch url', async ({ page }) => {

    const base_url = getTestData("base_url");
    const user = getJsonObject("user");
    const config = getJsonObject("config");
    const ids = getJsonArray("ids");


    //console.log(`User from test data: ${user}`); // User from test data: [object Object]
    console.log(`User from test data: ${JSON.stringify(user)}`);
    console.log(`Config from test data: ${JSON.stringify(config)}`);
    console.log(`IDs from test data: ${JSON.stringify(ids)}`);
    console.log(`Base URL from test data: ${base_url}`);

    console.log(`User Name: ${user.username}`);
    console.log(`Password: ${user.password}`);
    console.log(`First id: ${ids[0]}`);

    await page.goto(base_url);



    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
});


const logger = new customLogger();

test('Login test with logger', async ({ page }) => {



    logger.info('Navigating to login page');
    await page.goto('https://www.saucedemo.com/v1/');


    logger.info('Filling username and password');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');


    logger.info('Clicking login button');
    await page.click('#login-button');


    logger.info('Checking for inventory page load');

    try {
        await expect(page.locator('.product_label')).toHaveText('Products1');
        logger.info('✅ Login successful');
    } catch (error) {
        logger.error(`❌ Login failed"`);
        throw error; // if u don't add this line then test will be passed even if login failed since we used try catch block
    }


});
