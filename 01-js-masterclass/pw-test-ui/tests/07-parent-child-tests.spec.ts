import { test, expect } from '@playwright/test';

test('child element click example1', async ({ page }) => {

  await page.goto('http://127.0.0.1:5500/tests/20-parent-child.html');

  //await page.pause();

  await page.locator('nb-card nb-radio :text-is("Dark Mode")').click();

  await page.locator('[data-testid="settings-card"] nb-radio :text-is("All Notifications")').click();

  // we can also do chaining of above locators in parent child elements [below are not working - later find out]
  //await page.locator('nb-card').locator('nb-radio').locator(':text-is("Option 2")').click();
  //await page.locator('nb-card').locator('nb-radio').locator(':has-text("Option 2")').click();
});

test('locate parent element', async ({ page }) => {

  await page.goto('http://127.0.0.1:5500/tests/21-complex-parent-element.html');

  await page.pause();

  // here we are locating nb-card which has text 'User Preferences' 
  // 'User Preferences' can be anywhere inside dom of nb-card and 
  // can be direct child or grand child or any level deep child
  const parentEle = page.locator('nb-card', { hasText: 'User Preferences' });

  // now we located parent element, now we can perform action on child element
  await parentEle.locator('nb-radio :text-is("Option 1")').click();

  // there are multiple options like has, hasNot, hasNotText and  hasText wch u can pass in line 27

  // so also second parameter we can pass as locator also instead of text
  // below we are locating parent element with its unique chile element wch have text 'Special Option'
  const parentEle2 = page.locator('nb-card', { has: page.getByText('Special Option') });
  await parentEle2.locator('nb-radio :text-is("Option 2")').click();

  // also we can locate parent element by filterig with child element 
  // very similar we can pass has, hasNot, hasText and  hasNotText parameters in filter method
  // and find parent element 
  const parentEle3 = page.locator('nb-card')
    .filter({ has: page.getByText('Special Option') });

  parentEle3.locator('nb-radio :text-is("Special Option")').click();


});



test('Extracting text or values', {
  tag: '@slow',
}, async ({ page }) => {


  await page.goto('http://127.0.0.1:5500/tests/22-extracticing-txt.html');

  console.log();
  console.log("---------------------textContent()------------------------------");
  // locating nbcard object which has text 'User Information'
  const parentLoc1 = await page.locator('nb-card', { hasText: "User Information" });

  // inside nbcard we have two class with same profile name
  // we need to locate profile wch have label Name
  const subParentLoc1 = parentLoc1.locator('.profile').filter({ hasText: 'Name' });

  // now locate value class inside subParentLoc1 and fetch its text
  const text1 = await subParentLoc1.locator('.value').textContent();
  console.log(`textContent1() - Ele text wch don't have any child - : ${text1}`);

  console.log();
  console.log();
  console.log("---------------------innerText()------------------------------");


  // now locate value class inside subParentLoc1 and fetch its text
  const text2 = await subParentLoc1.locator('.value').innerText();
  console.log(`innerText() - Ele text wch don't have any child -: ${text2}`);


  console.log();

  console.log();
  console.log("---------------------allTextContents()------------------------------");
  console.log();

  // here we have nb-card element wch have count 4 means 4 locators have common nb-card
  // and we will fetch all these 4 nb-cards text at same time
  // lets fetch all text of first nb-card element

  // allTextContents will fetch all text of nb-card dom [even its child elements also]
  const allCards = page.locator('nb-card');
  const allCardsText = await allCards.allTextContents();
  console.log(`allTextContents() : ${allCardsText}`);

  console.log();
  console.log("---------------------textContent()------------------------------");

  // but if we try to fetch textContent of allCards locator since it is resolved to 4 elements
  // below code will throw below error bcoz allCards is common loc for multiple elemeents
  // Error: locator.textContent: Error: strict mode violation: locator('nb-card') resolved to 4 elements:

  // but if we do first() then it will work and nb-card element have child elements and so
  // all 4 child elements text also will be fetched
  const allCardTxtContent = await allCards.first().textContent();
  // 
  console.log("allCardsFirstTxtContent - " + allCardTxtContent);
  //console.log(`All cards text is: ${allCardsText2}`);

  console.log();

  console.log("---------------------innerText() for nb cards wch is resolved to 4 elements------------------------------");
  console.log()
  // but if we try to fetch innerText() of allCards locator since it is resolved to 4 elements
  // below code will throw below error bcoz allCards is common loc for multiple elemeents
  // Error: locator.innerText: Error: strict mode violation: locator('nb-card') resolved to 4 elements:
  // const allCardinnerTxtContent = await allCards.innerText();

  // but if we do first() then it will work and nb-card element have child elements and so
  // all 4 child elements text also will be fetched
  const allCardFirstinnerTxtContent = await allCards.first().innerText();
  console.log("allCardFirstinnerTxtContent - " + allCardFirstinnerTxtContent);

  //  allCards.first() have child elements and so all 4 child elements text also will be fetched


  console.log();
  console.log("---------------------allInnerTexts()------------------------------");
  console.log();

  const allInnerTexts = await page.locator('nb-card').allInnerTexts();
  console.log("allInnerTexts - " + allInnerTexts)

  /**
   * ---------------------textContent()------------------------------
 textContent1() - Ele text wch don't have any child - : John Doe
 
 
 ---------------------innerText()------------------------------
 innerText() - Ele text wch don't have any child -: John Doe
 
 
 ---------------------allTextContents()------------------------------
 
 allTextContents() : 
     System Settings
     
       Choose a mode:
       
         Dark Mode
       
       
         Light Mode
       
     
   ,
     User Information
     
       
         Name:
         John Doe
       
       
         Role:
         Administrator
       
     
   ,
     Feature Toggles
     
       
         Feature A - Enabled
         Feature B - Disabled
         Feature C - Enabled
       
     
   ,
     Notifications
     
       
         Info: Updates available.
       
       
         Warning: Password expires soon.
       
       
         Error: Unable to connect to server.
       
     
   
 
 ---------------------textContent()------------------------------
 allCardsFirstTxtContent - 
     System Settings
     
       Choose a mode:
       
         Dark Mode
       
       
         Light Mode
       
     
   
 
 ---------------------innerText() for nb cards wch is resolved to 4 elements------------------------------
 
 allCardFirstinnerTxtContent - System Settings
 
 Choose a mode:
 
 Dark Mode Light Mode
 
 ---------------------allInnerTexts()------------------------------
 
 allInnerTexts - System Settings
 
 Choose a mode:
 
 Dark Mode Light Mode,User Information
 Name: John Doe
 Role: Administrator,Feature Toggles
 Feature A - Enabled
 Feature B - Disabled
 Feature C - Enabled,Notifications
 
 Info: Updates available.
 
 Warning: Password expires soon.
 
 Error: Unable to connect to server.
   */

});

test.only('assertion custom message', async ({ page }) => {

  await page.goto('https://www.google.com');

  const title = "Checkout - MyStore";
  expect(title, 'page title should be correct after navigation').toBe('Checkout - MyStore');

  expect.soft(title, 'page title should be correct after navigation').toBe('Checkout - MyStore1');

  await expect.soft(page.locator('#cart-total'), 'cart total should be visible').toBeVisible();
  await expect.soft(page.locator('#discount-code'), 'discount input should exist').toBeEnabled();
  await expect(page.locator('#pay-now'), 'payment button should be enabled').toBeEnabled();


});

