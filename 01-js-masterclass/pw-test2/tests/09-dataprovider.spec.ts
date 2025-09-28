import { test, expect } from '@playwright/test';

const testCases = [
    { username: "rahul", password: "pass123", expected: "Login successful!" },
    { username: "wrong", password: "wrong", expected: "Invalid username or password!" },
];

//  👉 Yaha correct credentials = rahul / pass123

testCases.forEach(({ username, password, expected }) => {
    test(`Login test for user=${username}`, async ({ page }) => {
        await page.goto("http://127.0.0.1:5500/tests/25-dataprovider-practice.html");

        await page.fill("#username", username);
        await page.fill("#password", password);
        await page.click("button");

        const msg = page.locator("#message");
        await expect(msg).toHaveText(expected);
    });
});
