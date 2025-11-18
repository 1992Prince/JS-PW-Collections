import { test as base, expect, Page } from '@playwright/test';

/**
🔹 Sabse pehle — Fixture ka funda

Fixture ka kaam hai test ke liye resource prepare karna (jaise page, API client, DB, etc.)
Aur us resource ko test ko pass karna use() ke through.
Jab test khatam ho jaata hai → use() ke baad ka cleanup run hota hai (agar likha ho)
 */
type MyFixtures = {
    loggedInPage: Page;
};


/**

In below code:
Yahan tu ek fixture bana raha hai jiska naam hai loggedInPage.
Ye fixture depend karta hai built-in page pe (jo Playwright already deta hai).
Fir tu us page pe login steps kar raha hai.
Ab woh page already logged in hai ✅

🔹 Ab sawal: use(page) kyun? aur use(loggedInPage) kyun nahi?
👉 Fixture ka naam (loggedInPage) sirf label hai.
Par actual value jo tu test ko dena chahta hai, woh tu use() ke andar pass karta hai.

Agar tu use(page) likhta hai → iska matlab test ko ek page object milega jo login ke baad ready hai.

Agar tu use(loggedInPage) likhne ki koshish karega → error aayega, kyunki loggedInPage variable exist hi nahi karta yahan.

⚡ Yad rakh:

Left side: Fixture ka naam define karte ho → loggedInPage

Right side: Fixture ko jo value deni hai → use(value)

Toh value kuch bhi ho sakti hai: string, object, ya page.
Yahan hum page (jo login ke baad ready hai) pass kar rahe hain.
 */
export const test = base.extend<MyFixtures>({
    loggedInPage: async ({ page }, use) => {
        // Login steps
        await page.goto("https://www.saucedemo.com/v1/");
        await page.locator("#user-name").fill("standard_user");
        await page.locator("#password").fill("secret_sauce");
        await page.locator("#login-button").click();

        // Pass logged-in page to test
        await use(page);
    },
});

test('Login with valid credentials', async ({ loggedInPage }) => {
    const pageLabel = await loggedInPage.locator('.product_label').textContent();
    console.log("PageLabel - ", pageLabel);
});

test('Validate Products Page', async ({ loggedInPage }) => {

    const productItems = await loggedInPage.locator(".inventory_item_name").allTextContents();
    console.log("Product Items - ", productItems);
    await loggedInPage.locator('#item_1_title_link').click();
});


/*
🔹 Example to make it crystal clear

Maan le humne fixture banaya randomNumber:

const test = base.extend<{ randomNumber: number }>({
  randomNumber: async ({}, use) => {
    const num = Math.floor(Math.random() * 100);
    await use(num);
  },
});

Yahan fixture ka naam hai randomNumber
Humne num banaya inside function
Aur await use(num) kiya → test ke andar { randomNumber } available ho gaya

🔹 Tere case me
Fixture ka naam: loggedInPage
Value jo deni hai: page (jo login ke baad ready hai)
Isliye await use(page)

Ab test me:
test('Validate Products Page', async ({ loggedInPage }) => {
  await loggedInPage.locator('.inventory_item_name').first().click();
});

✅ Short formula to remember
Fixture banate time: Naam left side = jo test me dikhega.
use(value) = jo actual resource test ko milega
*/