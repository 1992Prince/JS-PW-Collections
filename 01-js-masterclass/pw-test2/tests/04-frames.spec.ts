import { test, expect } from '@playwright/test';

test('frame Practice', async ({ page, browserName }) => {

    await page.goto('http://127.0.0.1:5500/tests/08_frames_practice.html');

    await page.pause(); // this will only work from terminal npx command and not from VS Code extension
    // find a way to how to pause at specific point if u r running from VS Code extension

    const frame2 = page.frameLocator('[src="frame2.html"]');
    await frame2.locator('#name').fill('John Doe1');
    await frame2.locator('#submit-btn').click();
});


test('frame dialog Practice', async ({ page }) => {

    await page.goto('http://127.0.0.1:5500/tests/08_frames_practice.html');

    const frame1 = page.frameLocator('[src="frame1.html"]');
    page.once('dialog', async dialog => {
        console.log(dialog.message()); // "Enter your name:"
        await dialog.accept("Playwright User");
    });
    await frame1.locator('#open-dialog').click();
});

