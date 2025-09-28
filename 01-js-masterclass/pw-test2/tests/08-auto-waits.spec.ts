import { test, expect } from '@playwright/test';

test('auto-wait examples for methods wch do aut-wait', async ({ page }) => {

    await page.goto('http://127.0.0.1:5500/tests/23-auto-waiting.html');

    await page.getByText('Show Button after 10s').click();
    await page.locator('#newButton').click();

    await page.getByText('Show Text after 10s').click();
    const text = await page.locator('#delayedText').textContent();
    expect(text).toBe('Hello, I appeared after 10 seconds!');
});


test('auto-wait examples2 for method wch dont do autowait', async ({ page }) => {

    await page.goto('http://127.0.0.1:5500/tests/23-auto-waiting.html');


    await page.getByText('Show Text after 10s').click();
    const loc = page.locator('#delayedText')
    await loc.waitFor(); // if we dont do this, the next line will fail bcoz allTextContents does not auto-wait
    const text = await loc.allTextContents();
    expect(text).toContain('Hello, I appeared after 10 seconds!');
});

