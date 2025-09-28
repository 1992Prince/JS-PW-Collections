import { test, expect } from '@playwright/test';

test('Dialogs Practice', async ({ page, browserName }) => {

    await page.goto('http://127.0.0.1:5500/tests/09-dialogs.html');

    // Alert
    console.log('Alert Dialogs Practice');
    page.once('dialog', async dialog => {
        console.log(dialog.message()); // "This is an Alert dialog!"
        await dialog.accept();
    });
    await page.getByText('Show Alert').click();
    console.log();


    // Confirm
    console.log('Confirm Dialogs Practice');
    page.once('dialog', async dialog => {
        console.log(dialog.message()); // "Do you want to continue?"
        await dialog.dismiss();        // Click Cancel
    });
    await page.getByText('Show Confirm').click();
    console.log();


    // Prompt
    console.log('Promt Dialogs Practice');
    page.once('dialog', async dialog => {
        console.log(dialog.message()); // "Enter your name:"
        await dialog.accept("Playwright User");
    });
    await page.getByText('Show Prompt').click();
    console.log();


    // BeforeUnload
    console.log('BeforeUnload Dialogs Practice');
    page.once('dialog', async dialog => {
        console.log(dialog.type()); // alert
        console.log(dialog.message()); // Now try closing or refreshing the page. A beforeunload dialog will appear.
        await dialog.dismiss();     // Stay on page
    });
    await page.getByText('Enable BeforeUnload Dialog').click();
    await page.close({ runBeforeUnload: true });
    console.log();



});

test('Dialogs Print Practice', async ({ page, browserName }) => {

    await page.goto('http://127.0.0.1:5500/tests/09-dialogs.html');

    console.log('Print Dialogs Practice');
    await page.evaluate('(() => { window.waitForPrintDialog = new Promise(f => window.print = f); })()');
    await page.getByText('Show Print Dialog').click();
    await page.waitForFunction('window.waitForPrintDialog');


});

