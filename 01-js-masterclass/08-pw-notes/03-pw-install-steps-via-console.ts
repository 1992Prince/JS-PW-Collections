/**
Step-by-Step: Install Playwright with TypeScript

✅ 1. Install Node.js

node -v
npm -v

✅ 2. Create a New Project

mkdir playwright-ts-demo
cd playwright-ts-demo

✅ 3. Initialize Node Project

npm init -y

after running above command you will see a package.json file created in the root of your project directory.
and its content will be like this:
{
  "name": "playwright-ts-demo", # folder name
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}

✅ 4. Install Playwright + TypeScript

npm install -D @playwright/test typescript ts-node

once u run above command you will see a package.json file updated with the following dependencies:
{
  "name": "playwright-ts-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@playwright/test": "^1.30.0", // version may vary
    "typescript": "^4.9.5", // version may vary
    "ts-node": "^10.9.1" // version may vary
  }
}

and you will also see a new folder node_modules created in the root of your project directory and file
package-lock.json created in the root of your project directory.

✅ 5. Install Browsers

npx playwright install

// This will download the necessary browser binaries for Playwright.

✅ 6. Initialize Playwright Config (with TS)

npm init playwright@latest

This will:
        Create a basic folder structure
        Add a playwright.config.ts
        Set up tests/example.spec.ts
        Add tsconfig.json for TypeScript support


✅ 7. Folder Structure After Init

playwright-ts-demo/
├── node_modules/  # contains installed packages
├── tests/
│   └── example.spec.ts
├── tests-examples
├── test-results/   # will come after running tests
├── playwright-report/ # will come after running tests
├── playwright.config.ts
├── package.json
├── package-lock.json

✅ 8. Run the Test

npx playwright test

✅ 9. Open HTML Report

npx playwright show-report


✅ Example Test in TypeScript
tests/example.spec.ts:


import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();
// Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


✅ How to get the Playwright version?

npx playwright --version  # Version 1.54.1

✅ To update Playwright to the latest version run the following command:

npm install -D @playwright/test@latest

✅ Also download new browser binaries and their dependencies:

npx playwright install --with-deps

✅ Running the Example Test in UI Mode

npx playwright test --ui

It will open a UI where you can select tests to run, view results, and more.

✅ Running Tests in Head Mode [headless mode is default]

npx playwright test --headed


 */