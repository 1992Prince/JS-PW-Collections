import { test, expect } from '@playwright/test';

test('Assertions', async ({ page }) => {

    await page.goto('http://www.tizag.com/htmlT/htmlcheckboxes.php');
    await expect(page).toHaveURL('http://www.tizag.com/htmlT/htmlcheckboxes.php');
    await expect(page).not.toHaveURL('/error/');

    await expect(page.getByText('Checkboxes').first()).toBeVisible();
    await expect(page.getByText('Checkboxes').first()).not.toBeHidden();
    await expect(page).toHaveTitle('HTML Tutorial - Checkboxes')


});


test('Handling Web Tables', async ({ page }) => {

    await page.goto('https://money.rediff.com/indices/nse/NIFTY-50?src=moneyhome_nseindices');

    // get table rows count
    const rowsCount = await page.locator('//*[@class="dataTable"]/tbody/tr').count();
    console.log('Total Rows Count:', rowsCount);

    // get table each row columns count
    const columnsCount = await page.locator('//*[@class="dataTable"]/tbody/tr[1]/td').count();
    console.log('Total Columns Count:', columnsCount);

    // validate first row first column have text "Adani Enterprises"

    const firstRowFirstColumnText = await page.locator('//*[@class="dataTable"]/tbody/tr[1]/td[1]').textContent();
    console.log('First Row First Column Text:', firstRowFirstColumnText);
    expect(firstRowFirstColumnText).toContain('Adani Enterprises');


});

test('Shadow Root Element click - pending', async ({ page }) => {

    await page.goto('https://money.rediff.com/indices/nse/NIFTY-50?src=moneyhome_nseindices');

});

test('Mouse Hover', async ({ page }) => {

    await page.goto('https://www.way2automation.com/');

    await page.locator("//*[@id='menu-item-27580']/a/span[2]").hover();

    await page.locator("//*[@id='menu-item-27581']/a").click();

});

test('Drag and Drop', async ({ page }) => {

    await page.goto('https://jqueryui.com/resources/demos/droppable/default.html');

    const draggable = page.locator('#draggable');
    const droppable = page.locator('#droppable');

    await page.waitForTimeout(2000);
    await draggable.dragTo(droppable);

});

test('Right Click', async ({ page }) => {

    await page.goto('https://deluxe-menu.com/popup-mode-sample.html');

    await page.locator('//p[2]/img').click({ button: 'right' });

});

test('Handling JS Alert', async ({ page }) => {

    await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');

    // we need to add below listener for handing javascript alerts
    page.on('dialog', async (dialog) => {

        await page.waitForTimeout(2000);
        console.log('Dialog Type:', dialog.type());        // Dialog Type: alert
        console.log('Dialog Message:', dialog.message());  // Dialog Message: Please enter a valid user name
        await dialog.accept(); // and if you want to dismiss the alert, use dialog.dismiss()

    });

    await page.locator('.signin-btn').click();

});

test('Handling iframes', async ({ page }) => {

    await page.goto('https://testpages.eviltester.com/styled/iframes-test.html');

    // give locate framelocator 
    await page.frameLocator('#theheaderhtml').locator('[target="_top"]').click();

});

test('Handling New Tabs and Windows', async ({ page }) => {

    await page.goto('https://letcode.in/window');

    const title1 = await page.title();
    console.log("Title of the page:", title1);


    // new window or tab returns promise
    const [new_win] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('#home').click()
    ]);

    const title2 = await new_win.title();
    console.log("Title of the page:", title2);

    await new_win.locator("//*[text()=' Edit ']").click();

    // closing new tab
    await new_win.close();

    // moving to old tab
    await page.bringToFront();

    // performing click on old tab
    await page.locator('#multi').click();

    // more questions can be framed on multiple frames, windows etc. - prepare it well

});

test('Evaluating Javascripts', async ({ page }) => {

    await page.goto('https://www.google.com/');

    // give locate framelocator 
    await page.locator('#APjFqb').evaluate((el) => {
        el.style.border = '3px dashed red';
        el.style.backgroundColor = 'yellow';
    });

    /**
     * In Playwright, you can run JavaScript functions directly in the browser context using the .evaluate() function.
     * 
     * 🔍 What is .evaluate() in Playwright?
        The .evaluate() method allows you to execute a JavaScript function in the page (browser) context — meaning 
        it has access to the real DOM and behaves like you're writing code inside the browser console.
     */


});

test.only('Full Page Screenshot', async ({ page }) => {

    await page.goto('https://www.google.com/');

    // give locate framelocator 
    await page.locator('#APjFqb').evaluate((el) => {
        el.style.border = '3px dashed red';
        el.style.backgroundColor = 'yellow';
    });

    await page.screenshot({ path: 'screenshot/screenshot.png', fullPage: true });


});

test('Element level Screenshot', async ({ page }) => {

    await page.goto('https://www.google.com/');

    // give locate framelocator 
    await page.locator('#APjFqb').screenshot({ path: 'screenshot/element.png' });


});

// below see we are using browser fixture instead of page fixture
test('HTTP Basic Authentication', async ({ browser }) => {

    const context = await browser.newContext({
        httpCredentials: {
            username: 'admin',
            password: 'admin'
        }
    });   // Create new browser context

    const page = await context.newPage();         // Create new page in that context
    await page.goto("https://the-internet.herokuapp.com/basic_auth");


});

// Remember element properties must have property  type=file
test('File Upload', async ({ browser }) => {

    const context = await browser.newContext({});   // Create new browser context

    const page = await context.newPage();         // Create new page in that context
    await page.goto("https://www.way2automation.com/way2auto_jquery/registration.php#load_box");

    await page.locator("input[type='file']").setInputFiles('D:/2025/playwright/arora-playwright/playwright-tests/screenshot/element.png');

    /**
     * To upload  multiple files -
     * 
     * await page.locator("input[type='file']").setInputFiles([
                'D:/2025/playwright/arora-playwright/playwright-tests/screenshot/element.png',
                'D:/2025/playwright/arora-playwright/playwright-tests/screenshot/another-image.png'
            ]);

        🧠 Notes:
        The array can include as many file paths as needed.

        The <input type="file"> element must allow multiple uploads. Check that the HTML includes multiple attribute:
     */


});


test('Download file', async ({ browser }) => {

    // pending
});

/**
 * Video recording
 * 
 * to enable video recording in playwright, we need to add below property in playwright.config.ts
 *  
 *  use: {
 *       video: 'on',
 * }
 * 
 * and once execution will get over, videos will be stored in folder - playwright-report/data
 * 
 * and u have to execute tests from terminal level and not from vs code plugin.
 * 
 */

/**
 * To enable trace recording in playwright, we need to add below property in playwright.config.ts
 * 
 *  use: {
 *       trace: 'on',
 *  }
 * 
 * once execution will get over, traces will be stored in folder - playwright-report/trace in zip files
 * 
 */

/**
 * Playwright Code Generator
 * 
 * Via VS Code plugin, we can generate code for any action performed on browser. 
 * Go to plugin and in below option click on - Record new option
 * 
 * via terminal - npx playwright codegen demo.playwright.dev/todomvc
 */

/**
 * To do debug, we can add pause() method in the test case and we need to run script from terminal level.
 * execution will get stop at pause() and inspect window will be opened and we can inspect the elements or do debugging
 */
test('Assertions 1', async ({ page }) => {

    await page.goto('http://www.tizag.com/htmlT/htmlcheckboxes.php');
    await expect(page).toHaveURL('http://www.tizag.com/htmlT/htmlcheckboxes.php');
    await expect(page).not.toHaveURL('/error/');

    await page.pause();

    await expect(page.getByText('Checkboxes').first()).toBeVisible();
    await expect(page.getByText('Checkboxes').first()).not.toBeHidden();
    await expect(page).toHaveTitle('HTML Tutorial - Checkboxes')


});

/**
 * In this class somewhere I have added only option - check line 154
 */

