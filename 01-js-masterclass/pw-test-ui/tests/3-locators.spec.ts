import { test, expect } from '@playwright/test';

test('getByRole Practice', async ({ page, browserName }) => {

  // 01-getByRole-practice.html

  await page.goto('http://127.0.0.1:5500/tests/01-getByRole-practice.html');

  // creating a locator - via html semantic tag [below u see inside getByRole we are passing role, attribute and value]
  const submitBtnlocator = page.getByRole('button', { name: 'Submit' });
  await submitBtnlocator.click();

  // creating a locator - via aria-label and role
  const chkoutBtnlocator = page.getByRole('button', { name: 'Checkout Button' });
  await chkoutBtnlocator.click();

});


test('iframe Practice', async ({ page, browserName }) => {

  await page.goto('https://letcode.in/frame#google_vignette');

  // below is best example of locator chaining -
  // first we locate the iframe using its id, then we use frameLocator to get the frame inside the page
  // then we can use the frame locator to find elements inside the iframe
  // note that we are using the id of the iframe, not the src or name
  const iframeLoc = page.frameLocator('#firstFr');
  const inputBxLoc = iframeLoc.getByPlaceholder('Enter name');
  await inputBxLoc.fill('John Doe');

});



test('getByLabel Practice', async ({ page }) => {


  await page.goto('http://127.0.0.1:5500/tests/02-label-practice.html');

  // Explicit association
  const usernameLoc = page.getByLabel('Username');
  await usernameLoc.fill('John Doe');
  await page.getByLabel('Password').fill('secret123');

  // Implicit association (checkbox wrapped in label)
  await page.getByLabel('Remember Me').check();

  // Dropdown by label
  await page.getByLabel('Country').selectOption('USA');

});



test('getByPlaceholder', async ({ page }) => {


  await page.goto('http://127.0.0.1:5500/tests/02-label-practice.html');

  await page.getByPlaceholder('Enter username').fill('John Doe');

});



test('locateByText', async ({ page }) => {


  await page.goto('http://127.0.0.1:5500/tests/03-text-practice.html');

  // 1. Strict text match
  await page.getByText('Login').click();

  // 2. Substring: [below one will give 2 locators and so it will throw strict violation error]
  await page.getByText('Submit').first().click(); // Matches first "Submit"
  await page.getByText('Submit Order').click(); // Matches longer text


  // 3. Regex matches
  await page.getByText(/loading/i).isVisible(); // Case-insensitive "Loading..."
  await page.getByText(/^loaded/).isVisible(); // Text starts with "loaded"
  await page.getByText(/successfully$/).isVisible(); // Text ends with "successfully"

  // 4. Nested text
  await page.getByText('Welcome, User!').isVisible();

  // 5. Hidden text (⚠️ will NOT match)
  await page.getByText('You cannot see me!').click(); // ❌ Playwright will not find this

});



test('shadowDomRootPractice', async ({ page }) => {


  await page.goto('http://127.0.0.1:5500/tests/04-shadow-root-practice.html');

  await page.getByText('Increment').click();
  await page.locator('#inc').click();

  await page.locator('#closed1').locator('#inc').click(); // this is closed shadow root and so here it will failed



});

test('filtersTest', async ({ page }) => {


  await page.goto('http://127.0.0.1:5500/tests/05-filters-practice.html');

  // ✅ 1. Filter by Text
  // 👉 Select the list item with Product 2 and click its button

  await page
    .getByRole('listitem')
    .filter({ hasText: 'Product 2' })
    .getByRole('button', { name: 'Add to cart' })
    .click();

  // ❌ 2. Filter by Not Having Text
  // 👉 Get all items except out-of-stock ones
  await expect(
    page.getByRole('listitem').filter({ hasNotText: 'Out of stock' })
  ).toHaveCount(3); // Product 1, 3, 4


  // 🧒 3. Filter by Child/Descendant
  // 👉 Click the button inside the <li> that has heading "Product 3"
  await page
    .getByRole('listitem')
    .filter({ has: page.getByRole('heading', { name: 'Product 3' }) })
    .getByRole('button', { name: 'Add to cart' })
    .click();

  //🚫 4. Filter by Not Having Child/Descendant
  //👉 Select all <li> except the one containing "Product 2"
  // it is for negative testting like chek all eleemnts count that should not have ths text
  await expect(
    page.getByRole('listitem').filter({ hasNot: page.getByText('Product 2') })
  ).toHaveCount(3); // Product 1, 3, 4

});

test('Chaining + Filter', async ({ page }) => {


  await page.goto('http://127.0.0.1:5500/tests/06-locators-chaining.html');

  // 1. Chaining + Filter
  // 👉 Product 2 ka button click karna.

  // pehle "listitem" lo
  const product = page.getByRole('listitem').filter({ hasText: 'Product 2' });

  // ab us product ke andar ka button pakadke click karo
  await product.getByRole('button', { name: 'Add to cart' }).click();

  // check karo ki sirf ek hi "Product 2" hai
  await expect(product).toHaveCount(1);

  //2. Nested Locators
  // 👉 "Save" button sirf dialog ke andar ka click karna.
  const dialog = page.getByTestId('settings-dialog');
  const saveButton = page.getByRole('button', { name: 'Save' });

  // dialog ke andar wala save button
  await dialog.locator(saveButton).click();

  //3. AND Operator
  // 👉 Button ko role bhi "button" hona chahiye aur title bhi "Subscribe" (maan le agar HTML me aisa hota).
  const button = page.getByRole('button').and(page.getByTitle('Subscribe'));

  //4. OR Operator
  //👉 Agar "New email" button ya security dialog dono me se kuch bhi aa jaye.
  const newEmail = page.getByRole('button', { name: 'New' });
  const dialog2 = page.getByText('Confirm security settings');

  await expect(newEmail.or(dialog2).first()).toBeVisible();

  if (await dialog2.isVisible()) {
    await page.getByRole('button', { name: 'Dismiss' }).click();
  }

  await newEmail.click();

  //5. Sirf Visible Elements
  // 👉 Page pe 2 button hain (ek hidden, ek visible). Tu sirf visible ko click karega.
  await page.locator('button').filter({ visible: true }).click();

});

test.only('all-count-nth-evaluateAll', async ({ page }) => {


  await page.goto('http://127.0.0.1:5500/tests/07_list-example.html');

  // 1. Using .all()
  const items = await page.getByRole('listitem').all();
  for (const item of items) {
    console.log(await item.textContent());
  }
  // Output: apple, banana, orange, grapes, mango


  // 2. Using .count() + .nth(i)
  const rows = page.getByRole('listitem');
  const count = await rows.count();
  console.log("Total items:", count);

  for (let i = 0; i < count; i++) {
    console.log(await rows.nth(i).textContent());
  }
  // Output: apple, banana, orange, grapes, mango

  // 3. Using .evaluateAll()
  const texts = await page.getByRole('listitem').evaluateAll(
    list => list.map(element => element.textContent)
  );

  console.log(texts);
  // Output: [ 'apple', 'banana', 'orange', 'grapes', 'mango' ]



});