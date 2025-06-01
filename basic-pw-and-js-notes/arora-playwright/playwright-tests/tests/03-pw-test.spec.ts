import { test, expect } from '@playwright/test';

/**
 * If we need to run tests in parallel, we need to run tests from terminal level
 * 
 * in config file comment out from use
 * // browserName: 'chromium', 
    // channel: 'chrome' 

    and under projects we have 3 sections chromium, firsefox and webkit

    so if u have one test in this spec.ts and u run from terminal i.e. npx playwright test 03-pw-test.spec.ts

    then same test will run in all 3 browsers in parallel i.e. Running 3 tests using 3 workers

    and suppose u have 2 tests in this file and u run from terminal i.e. npx playwright test 03-pw-test.spec.ts

    then both tests will run in all 3 browsers in parallel means total 6 tests will run in parallel  i.e. Running 6 tests using 4 workers
 */

test('Assertions 1', async ({ page }) => {

    await page.goto('http://www.tizag.com/htmlT/htmlcheckboxes.php');
    await expect(page).toHaveURL('http://www.tizag.com/htmlT/htmlcheckboxes.php');
    await expect(page).not.toHaveURL('/error/');

    //await page.pause();

    await expect(page.getByText('Checkboxes').first()).toBeVisible();
    await expect(page.getByText('Checkboxes').first()).not.toBeHidden();
    await expect(page).toHaveTitle('HTML Tutorial - Checkboxes')


});

test('Assertions 2', async ({ page }) => {

    await page.goto('http://www.tizag.com/htmlT/htmlcheckboxes.php');
    await expect(page).toHaveURL('http://www.tizag.com/htmlT/htmlcheckboxes.php');
    await expect(page).not.toHaveURL('/error/');

    await expect(page.getByText('Checkboxes').first()).toBeVisible();
    await expect(page.getByText('Checkboxes').first()).not.toBeHidden();
    await expect(page).toHaveTitle('HTML Tutorial - Checkboxes')


});

/**
 * How to enable capture screenshot on failure
 * 
 * under use we need to add screenshot: 'only-on-failure' // on, off, or only-on-failure
 */


