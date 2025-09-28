import { test, expect, chromium } from '@playwright/test';

test('negative login test', async ({ page }) => {

  // login with incorrect credentials and validate error message
  // https://rahulshettyacademy.com/loginpagePractise
  // here error message comes after some time, so we need to wait for it and
  // it will stay for some time, so we need to handle that too
  // textContent() is a retrying method, so it will wait for the element to be visible [default - 30secs]
  // and so pw is handling both the waits for us and is reliable since auto-waiting methods waits for the element to be visible
  // and other conditions, check auto-waiting methods here - https://playwright.dev/docs/actionability
  await page.goto('https://rahulshettyacademy.com/loginpagePractise');

  await page.locator('#username').fill('rahulsshettyacademy');
  await page.locator('#password').fill('pass');
  await page.locator('#signInBtn').click();

  // below we have used textContent() which is a retrying method to fetch text and validate it
  // class=alert alert-danger col-md-12
  const loginErrTxt = await page.locator(".alert.alert-danger.col-md-12").textContent();
  console.log(loginErrTxt);
  expect(loginErrTxt).toContain("Incorrect");

  //await expect(page).toHaveTitle(/Plapqweywright/);
});

test('negative login test2', async ({ page }) => {

  // this is same above scenario but auto-wait expect to fetch text and validate it
  // and will not depend on auto-wait methods

  await page.goto('https://rahulshettyacademy.com/loginpagePractise');

  await page.locator('#username').fill('rahulsshettyacademy');
  await page.locator('#password').fill('pass');
  await page.locator('#signInBtn').click();

  // below we will not use textContent() which is a retrying method to fetch text and validate it
  // instead we will use expect which is also a retrying method to fetch text and validate it
  // NOTE: below we are using await before expect but in above test , we are not using await before expect
  // WHY?

  const loginErrLoc = await page.locator(".alert.alert-danger.col-md-12");
  await expect(loginErrLoc).toHaveText(/Incorrect/);
});

test('Grab first product title', async ({ page }) => {

  // https://rahulshettyacademy.com/loginpagePractise
  // enter incorrect username and then clear it with pw method
  // enter valid username and password and login
  // U will see lots of products on UI, grab first product text

  await page.goto('https://rahulshettyacademy.com/loginpagePractise');

  const usernameLoc = page.locator('#username');
  await usernameLoc.fill('rahulsshettyacaaademy');
  await page.pause(); // to pause the execution and see the browser
  await usernameLoc.clear(); // to clear the text box , we can use fill('') also to clear the text box
  await usernameLoc.fill('rahulshettyacademy');
  await page.locator('#password').fill('learning');
  await page.locator("#terms").check();
  await page.locator('#signInBtn').click();


  // now u made the login successfully -> validate title of the page first
  const productCardLoc = page.locator('.card-body');
  // when I use below line, it also returns text but with spaces , since a tag is also inside card-title
  // so I used a tag to get the text without spaces
  //const firstProductCardLocTxt = await productCardLoc.first().locator('card-title').textContent();
  const firstProductCardLocTxt = await productCardLoc.first().locator('a').textContent();
  const firstProductCardPrice = await productCardLoc.first().locator('h5').textContent();

  console.log("First product title is: " + firstProductCardLocTxt);
  console.log("First product price is: " + firstProductCardPrice);

  // instead of doing chaining like above , u can do page.locator('.card-body a').first().textContent(); also
  // also page.locator('.card-body'); resolves to 4 elements so, we are using first() method to get the first element
});



test('Grab all products title in list', async ({ page }) => {

  await page.goto('https://rahulshettyacademy.com/loginpagePractise');

  const usernameLoc = page.locator('#username');
  await usernameLoc.fill('rahulshettyacademy');
  await page.locator('#password').fill('learning');
  await page.locator("#terms").check();
  await page.locator('#signInBtn').click();



  const productCardLoc = page.locator('.card-body a');
  // productCardLoc will be resolved to 4 elements or more, so we can't use textContent() method directly
  // we need to use allTextContents() method to get all the text contents of the elements
  // allTextContents returns an array of strings and it is not a retrying method[it will not wait
  // for any element to be visible or any other condition], so we need to make sure that the elements are visible
  // textContent() is a retrying method, so it will wait for the element to be visible [default - 30secs]
  // and so we haven't used any wait mechanism in above test

  // if u not wait for any wait mechanism and use allTextContents() method directly then it will return empty array
  // WHY?: because allTextContents() is not a retrying method and it will not wait for any element to be visible
  // and array of strings can have 0 elements or more and so it returned empty array
  // and when allTextContexts() method is called, at that time the elements are not visible on the UI and page
  // was still loading and so it returned empty array with 0 elements
  // and this is the reason we should always use auto-waiting methods to make sure that the elements are visible on the UI

  // to handle this additional wait mechanism, we can use expect to check the count of the elements or network wait etc.

  // to check array empty return, comment line of code await expect(productCardLoc).toHaveCount(4); and execute the test 

  //await page.waitForLoadState('networkidle', { timeout: 2000 }); // wait for network to be idle[now working]
  await expect(productCardLoc).toHaveCount(4); // wait for the elements to be visible
  // or u can use
  // await productCardLoc.first().waitFor(); // wait for the first element to be visible
  const allProductTitles = await productCardLoc.allTextContents();
  console.log(`allProductTitles: ${allProductTitles}`); // it will print array of strings

  console.log()

  // now iterate the array and print each product title
  // here allProductTitles is array of strings of all product titles
  for (const productTitle of allProductTitles) {
    console.log(productTitle);
  }

  console.log()

  // there is another way of printing each product title 
  // const productCardLoc = page.locator('.card-body a'); will be resolved to 4 elements or more, so lets
  // we can use count() method to get the count of the elements and then iterate using for loop
  const productsCount = await productCardLoc.count();
  for (let i = 0; i < productsCount; i++) {
    console.log(await productCardLoc.nth(i).textContent());
  }


});

test.only('E2E assignment', async ({ page }) => {

  await page.goto('https://rahulshettyacademy.com/client/');

  await page.locator("#userEmail").fill("amrita101@mail.com");
  await page.locator("#userPassword").fill("root");
  await page.locator("#login").click();

  const products = ["ZARA COAT 3", "iphone 13 pro"];


  // here we need to add just above 2 elements to cart
  // first fetch all carts products card body locators
  const allProductsLoc = page.locator('.card-body'); //  resolves to 4 elements
  await allProductsLoc.first().waitFor(); // wait for the first element to be visible
  const prodsCount = await allProductsLoc.count();

  // now we need to iterate through all the products and check if the product title is in the products array
  // inside card we have card-body and  it have nested b tag wch have product title text


  for (let i = 0; i < prodsCount; i++) {
    const prodName = await allProductsLoc.nth(i).locator('b').textContent();
    // check if prodName is not null and is equal to given texts
    if (prodName && (products[0].includes(prodName) || products[1].includes(prodName))) {
      // click on add to cart button, here we got nth product card body locator wch we can use to click add to cart button
      // we will use nth(i) method to get the nth product card body locator
      // await page.pause();
      await allProductsLoc.nth(i).getByText(' Add To Cart').click();
      //await expect(page.locator('#alert')).toHaveText(' Product Added To Cart ');
    }
  }


  // click on cart button
  await page.locator('//button[@routerlink="/dashboard/cart"]').click();

  // fetch each product added text and validate if it is matching the given product texts
  const cartProductsText = await page.locator('.cart .cartSection h3').allTextContents();

  //expect(cartProductsText).toContain(products[0]);
  //expect(cartProductsText).toContain(products[1]);

  // after validation, click on checkout button
  await page.getByText('Checkout').click();

  // validate input email
  const emailTxtBx = page.locator('.user__name input').first();
  const emailVal = await emailTxtBx.inputValue(); // NOTE: we will not use textContent() method here because it is not an element which has text
  // and inputValue() is not a retrying method
  expect(emailVal).toBe("amrita101@mail.com");

  // input county
  await page.getByPlaceholder('Select Country').pressSequentially('ind');
  //await page.pause();
  // By default, page.getByText() does substring matching. To enforce exact matching, you should pass { exact: true }.
  await page.getByText(' India', { exact: true }).click();

  // input coupon an validate message
  await page.locator("//input[@name='coupon']").fill('rahulshettyacademy');
  await page.getByText('Apply Coupon').first().click();
  await page.getByText('* Coupon Applied').isVisible();

  // click on place order button
  await page.getByText('Place Order ').click();

  // validate "Order Places successfully" msz later once u click on above button

  // validate Thank you mssg
  await page.getByText(' Thankyou for the order. ').isVisible();

  // fetch all order ids
  const orderId = await page.locator('//label[@class="ng-star-inserted"]');
  await orderId.first().waitFor(); // wait for the first element to be visible
  console.log("before history page orderId: " + orderId.textContent); // 
  // 68b661d9f669d6cb0aad3c7b 
  // 68b661d9f669d6cb0aad3c7e

  // click on order history page
  await page.getByText(' Orders History Page ').click();

  //await page.pause();
  const fetchedOrderIds = await page.locator('//tbody/tr/th'); // resolved to 2 element
  await fetchedOrderIds.first().waitFor(); // wait for the first element to be visible
  const orderIdsCount = await fetchedOrderIds.count();

  for (let i = 0; i < orderIdsCount; i++) {
    const text = await fetchedOrderIds.nth(i).textContent();
    console.log("fetched order id: " + text);
    // here u can add contidion to match the order id also and then delete only that order
    // do it later - very good and imp question

  }





});

/**
 * <table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>28</td>
    </tr>
    <tr>
      <td>Mary</td>
      <td>32</td>
    </tr>
  </tbody>
</table>

📖 Breakdown:
| Tag       | Full Form / Meaning | Role                                                |
| --------- | ------------------- | --------------------------------------------------- |
| `<table>` | Table element       | Poora table ka wrapper.                             |
| `<tr>`    | Table Row           | Ek horizontal row (line) table ke andar.            |
| `<th>`    | Table Header Cell   | Column headings (bold + center aligned by default). |
| `<td>`    | Table Data Cell     | Actual data cells in each row.                      |

 */






