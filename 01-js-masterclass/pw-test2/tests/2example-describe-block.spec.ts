import { test, expect } from '@playwright/test';


test.describe('Login Functionality', () => {

  test('has title', async ({ page, browserName }) => {

    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Plapqweywright/);

  });

  test('get started link', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });


});
