✅ Playwright Command to Run a Particular suite File - npx playwright test path/to/your/test-file.spec.ts
    e.g. npx playwright test tests/example.spec.ts

✅ Run by Folder (a group of specs): npx playwright test tests/auth/
    Runs all .spec.ts files inside the tests/auth/ folder.

✅ Bonus: Run Specific Test Inside a File:
If your test file has multiple test() blocks and you want to run just one, you can use .only:

✅ Run a Specific Test by Name in Playwright
Use the -g or --grep flag followed by the test title (or part of it) in quotes: npx playwright test -g "your test name"

🧪 Example:
Suppose your test file dashboard.spec.ts has this test:

test('should show user profile on dashboard', async ({ page }) => {
  // test logic
});

You can run only this test like this: npx playwright test -g "should show user profile on dashboard"

✅ Run test in specific project - npx playwright test --project=Chrome

NOTE - it is mandatory to keep spec file name as  - locators.spec.ts then your npx playwright test tests/3-locators.spec.ts
       will find these tests

       If u don't add .spec.ts extension then npx will not identfy them as tests


