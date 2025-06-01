import { test, expect } from '@playwright/test';

test('First PW Test', async ({ page }) => {

    await page.goto('http://way2automation.com');
    const title = await page.title();
    console.log('Page Title:', title);
    expect(title).toBe('Get Online Selenium Certification Course | Way2Automation');
    expect(title).toContain('Way2Automation');

    await page.goto("http://gmail.com");
    await page.goBack();
    await page.goForward();

    await page.waitForTimeout(2000); // wait for 2 seconds - hardwait
    await page.reload(); // reload the page or refresh the page
});

test('Finding Elements', async ({ page }) => {

    // await page.setViewportSize({ width: 1600, height: 800 });
    await page.goto('http://gmail.com');
    // await page.getByLabel('Email or phone').fill("pandit@mishra.com");
    // using css
    // await page.locator('#identifierId').fill("pandit@mishra.com");
    // using xpath
    await page.locator('//*[@id="identifierId"]').fill("mishra@gmail.com")

    // now we need to click on button with text 'Next' and element tagname is  'button' . Here we can use filter method
    /**
     * page.locator('button') -> will locate all buttons on page and after that we can filter the button with text 'Next'
     */
    // await page.locator('button', { hasText: 'Next' }).click();
    // or
    await page.locator('button').filter({ hasText: 'Next' }).click();


    // fetching text of element
    const text = await page.locator('#headingSubtext').innerText();
    console.log('Text:', text);

});

/**
 * Handling select dropdowns and values are present in option tag
 */
test('Handling Dropdowns', async ({ page }) => {

    await page.goto('https://www.wikipedia.org/');

    // select by value
    await page.selectOption('#searchLanguage', { value: 'de' });

    await page.waitForTimeout(2000); // wait for 2 seconds - hardwait

    // select by index
    await page.selectOption('#searchLanguage', { index: 2 });

    await page.waitForTimeout(2000); // wait for 2 seconds - hardwait

    // select by label
    await page.selectOption('#searchLanguage', { label: 'Nederlands' });

    /**
     * Now we need to get all options elements from the dropdown i.e. returning multiple elements
     * 
     * //*[@id='searchLanguage']/option will return all the options elements
     */

    const drpDownOptions = await page.locator('//*[@id="searchLanguage"]/option').all();

    // fetch the total no of options present in dropdown
    const totalOptions = drpDownOptions.length;
    console.log('Total Options:', totalOptions);

    // fetch the text of each option
    for (let i = 0; i < totalOptions; i++) {
        const text = await drpDownOptions[i].innerText();
        // console.log('Text:', text);
    }

    // another way of fetching text of each option using of
    // this will work bcoz drpDownOptions is an array of elements
    console.log("drpDownOptions type is :", (typeof drpDownOptions));
    for (const option of drpDownOptions) {
        const text = await option.textContent(); // option.innerText();
        console.log('Text:', text);
    }

    /**
     * How to confirm if we can use for of loop to iterate each option of dropdown
     * we are using code - const drpDownOptions = await page.locator('//*[@id="searchLanguage"]/option').all();
     * You're calling .all() on a Locator, which returns a Promise<ElementHandle[]>, an array of ElementHandle objects 
     * representing each <option> element inside the dropdown.
     * ✅ So yes, you can use a for...of loop like this:
     * for (const option of drpDownOptions) {
            const text = await option.textContent();
            console.log(text);
                }
     */

});

test('Handling Links', async ({ page }) => {

    await page.goto('https://www.wikipedia.org/');

    // find number of links on the page
    const links = await page.locator('a').all();
    const totalLinks = links.length;
    console.log('Total Links:', totalLinks);

    // print the text of each link
    for (const link of links) {
        const text = await link.textContent(); // link.innerText();
        // console.log('Text:', text);
    }

    // print the href of each link
    for (const link of links) {
        const href = await link.getAttribute('href');
        console.log('Href:', href);
    }


});

test('Handling Links of fotter section', async ({ page }) => {

    await page.goto('https://www.wikipedia.org/');

    // find number of links on the page
    const fotterSec = await page.locator('.other-projects');
    const fotterSecLinks = await fotterSec.locator('a').all();
    const totalLinks = fotterSecLinks.length;
    console.log('Total Fotter Sec Links:', totalLinks);

    // print the href of each link
    for (const link of fotterSecLinks) {
        const href = await link.getAttribute('href');
        console.log('Href:', href);
    }

    /**
     * Also Once u get no of elements, u can use first(), last(), nth() methods to get the element
     */


});

test('Handling checkboxes', async ({ page }) => {

    await page.goto('http://www.tizag.com/htmlT/htmlcheckboxes.php');

    // fetching checkboxes element count [diff way from above one]
    const checkBoxes = await page.locator('input[type="checkbox"]');
    const totalCheckBoxes = await checkBoxes.count();
    console.log('Total CheckBoxes:', totalCheckBoxes);

    // check if first checkbox is checked or not
    const isChecked = await checkBoxes.first().isChecked();
    console.log('Is first checkbox checked:', isChecked);
    // check the first checkbox
    await checkBoxes.first().check();

    // check the last checkbox
    await checkBoxes.last().check();

    // check the checkbox with index 2
    await checkBoxes.nth(2).check();

    await page.waitForTimeout(2000); // wait for 2 seconds - hardwait
    // uncheck the first checkbox
    await checkBoxes.first().uncheck();

    // to iterate all checkboxes we can use normal for loop but can't use for of loop
    // bcoz page.locator('selector') returns a Locator object (not an array).
    // Locator is a Playwright construct that represents a group of elements but doesn't behave like a typical array or iterable.

    for (let i = 0; i < totalCheckBoxes; i++) {
        const isChecked = await checkBoxes.nth(i).isChecked();
        console.log('Checkbox', i, 'is checked:', isChecked);
    }


});