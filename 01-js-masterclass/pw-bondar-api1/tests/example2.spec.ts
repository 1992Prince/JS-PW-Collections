import { test, expect } from '@playwright/test';

/**
 * When you want to create a mock, u need to configure it inside pw framework
 * before brower make a call to certain apis. Otherwise pw will not know
 * wch apis should be intercepted.
 * to create mock, u need to use page.route() method
 * 
 * // APP: https://conduit.bondaracademy.com
   // API: https://conduit-api.bondaracademy.com

   For below mocking try to create a scenario for interview Y and how u did mocking for multipe apis
   what was the challenge and how u came up with idea that solved isses

   One can be, most of time UI use to take lots of time to load, siince apis were in developing phase and
   so u mocked those apis in your automation scripts and those mock data use to come on UI instantly 
   and u used to test UI functionality without waiting for apis to load or depend on actual APIS

   This is just one story, u can come up with more stories

   Also if u comment line - await expect(page.locator('.tag-list')).toContainText('Playwright');
   then on ui u will not be able to se mocked ui, reason u can read in example2.txt file
 */

test.beforeEach(async ({ page }) => {

    await page.route('**/api/tags', async route => {
        const tags = {
            "tags": [
                "Selenium",
                "Playwright",
                "VISA",
                "Microsoft",
                "Google"
            ]
        };

        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify(tags),
        });
    });

    await page.route('*/**/api/articles*', async route => {

        const response = await route.fetch();
        const respBody = await response.json();
        respBody.articles[0].title = "THIS IS A MOCK TITLE";
        respBody.articles[0].description = "This is a mock description";

        await route.fulfill({
            body: JSON.stringify(respBody),
        });
    })

    await page.goto('https://conduit.bondaracademy.com');
})


test("api login", async ({ page }) => {
    await expect(page.locator('.navbar-brand')).toHaveText('conduit');

    // Verify mocked tags appear in UI
    //await expect(page.locator('.tag-list')).toContainText('Playwright');

    // validating articles
    await expect(page.locator('app-article-list h1').first()).toHaveText('THIS IS A MOCK TITLE');
    await expect(page.locator('app-article-list p').first()).toHaveText('This is a mock description');
});