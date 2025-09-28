/**
 * REFER URL - https://playwright.dev/docs/getting-started-vscode
 * 
 * Playwright has a VS Code extension which is available when testing with Node.js
 * Extension name is - Playwright Test for VS Code
 * 
 * Go to Extension sidebar in VS Code and search for "Playwright Test for VS Code"
 * You can install it directly from there.
 * Once installed, Test Explorer will be available in the sidebar.
 * 
 * Now we need to install playwright via the extension.
 * type `>Test: Install Playwright` in the command palette (Ctrl+Shift+P)
 * This will install the Playwright library and the browsers. Once u select Test: Install Playwright
 * You will be prompted to select the browsers you want to install and add Github Actions workflow 
 * Seclect all browsers to install [Chromium, Firefox, WebKit]
 * Click on OK
 * This will install the Playwright library and the browsers.
 * 
 * Once you click OK, terminal will open and you will be below installation steps are completed 
 * 
 * 
 * PS D:\2025\17-sid-pw-course\JS-PW-Collections\01-js-masterclass\pw-test2> npm init playwright@latest --yes "--" . '--quiet' '--browser=chromium' '--browser=firefox' '--browser=webkit'

> npx
> create-playwright . --quiet --browser=chromium --browser=firefox --browser=webkit

Getting started with writing end-to-end tests with Playwright:
Initializing project in '.'
Initializing NPM project (npm init -y)…
Wrote to D:\2025\17-sid-pw-course\JS-PW-Collections\01-js-masterclass\pw-test2\package.json:

{
  "name": "pw-test2",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}



Installing Playwright Test (npm install --save-dev @playwright/test)…

added 3 packages, and audited 4 packages in 4s

found 0 vulnerabilities
Installing Types (npm install --save-dev @types/node)…

added 2 packages, and audited 6 packages in 2s

found 0 vulnerabilities
Writing playwright.config.ts.
Writing tests\example.spec.ts.
Writing tests-examples\demo-todo-app.spec.ts.
Writing package.json.
Downloading browsers (npx playwright install chromium firefox webkit)…
✔ Success! Created a Playwright Test project at D:\2025\17-sid-pw-course\JS-PW-Collections\01-js-masterclass\pw-test2

Inside that directory, you can run several commands:

  npx playwright test
    Runs the end-to-end tests.

  npx playwright test --ui
    Starts the interactive UI mode.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing:

    npx playwright test

And check out the following files:
  - .\tests\example.spec.ts - Example end-to-end test
  - .\tests-examples\demo-todo-app.spec.ts - Demo Todo App end-to-end tests
  - .\playwright.config.ts - Playwright Test configuration

Visit https://playwright.dev/docs/intro for more information. ✨

Happy hacking! 🎭


Folder structure will look like this:
node_modules
tests
test-examples
playwright.config.ts
package.json
package-lock.json
.gitignore

----------------------------------------------------------------------


Opening the testing sidebar

The testing sidebar can be opened by clicking on the testing icon in the activity bar. 
This will give you access to the test explorer, which will show you all the tests in your project 
as well as the Playwright sidebar which includes projects, settings, tools and setup.


Once u click on testing icon, you will see 2 sections:

1) TEST EXPLORER
2) PLAYWRIGHT 

Once you maximize TEST EXPLORER section

Once u click on testing icon, u will see Test Explorer sidebar with the following sections:
- TEST EXPLORER - Playwright Tests: This section shows all the tests in your project.
  TEST EXPLORER have options 
  - Refresh Tests: This button allows you to refresh the tests in the test explorer.
  - Run Tests: This button allows you to run all the tests in the test explorer.
  - Debug Tests: This button allows you to debug all the tests in the test explorer.
  - Start coninous run[eye icon]: This button allows you to start a continuous run of the tests in the test explorer.
  - a search box to search for tests in the test explorer.
  - filter icon on search box to filter tests 
    [Show only failed tests,
    Show only executed tests, 
    Show in Active File Only, 
    Show in Opened Files Only, Fuzzy Match]
  - then below u will see tests folder name/spec file name and the tests in that file.
  - suppose from project sections if u have checked all browsers then for each test file 
    you will see the tests for each browser. like
    has title 
    - chromium
    - firefox
    - webkit
  - and if from projects sections if u have checked only one browser 
    like chromium then you will see only the tests for that browser.
    and other browser options as disbaled under Test Explorer under Playwright Tests section. like
    playwright.config.ts[firefox] - disabled
    playwright.config.ts[webkit] - disabled



Once you maximize PLAYWRIGHT section :-
You will see sub sectione like
 - TOOLS
   - Pick Locator
   - Record New
   - Record at cursor
   - Reveal test output
   - Close all browsers

 - PROJECTS
   - chromium
   - firefox
   - webkit
   NOTE - If in ts-config file you have set projects to false then you will not see this section. and if 
          you have only 2 projects then you will see only those 2 projects.
          It will take projects from the ts-config file.

 - SETUP
    - Run global setup
    - Run global teardown
    - Clear cache

 - SETTINGS
    - show browser
    - show trace viewer
    - Run global setup on each run
    - Update snapshots:-
        - no override
        - all
        - changed
        - missing
        - none
    - Update method
        - no override
        - overwrite
        - patch
        - 3 way
 
 
 
Running tests

You can run a single test by clicking the green triangle next to your test block to run your test. 
Playwright will run through each line of the test and when it finishes you will see a green 
tick next to your test block as well as the time it took to run the test.

Prince run here completed spec wch have all tests -> this will run all tests in the file
run specific test "has title" and "get started link" one by one


Debugging tests
With the VS Code extension you can debug your tests right in VS Code see error messages, 
create breakpoints and live debug your tests.



Error messages
If your test fails VS Code will show you error messages right in the editor showing what was expected, 
what was received as well as a complete call log.


Run in debug mode
To set a breakpoint click next to the line number where you want the breakpoint to be until 
a red dot appears. 
Run the tests in debug mode by right clicking on the line next to the test you want to run.
A browser window will open and the test will run and pause at where the breakpoint is set. 
You can step through the tests, pause the test and rerun the tests from the menu in VS Code.

Once u put a breakpoint and run the test in debug mode, then in debug mode u will see below sections

1) VARIABLES
    - Local
    - Closure
    - Global

2) WATCH
3) CALL STACK
4) LOADED SCRIPTS
5) BREAKPOINTS

and options for continue, step over, stop into, step out, restart and stop

and also below debug console will be opened

and test will be paused at that breakpoint


 */



/**
what is default timeout for page.goto is 30 secs - if dom is not loaded etc then it will 
throw timeout exception - [🔴 PRINCE check what is exception thrown if timeout occurs]
u can pss timeout in goto as second param and override30 secs

await page.goto('https://playwright.dev/', { timeout: 90000 });
✅ timeout is in milliseconds. So, 90 seconds = 90 * 1000 = 90000.
This overrides the default 30s timeout for just this one navigation call.


expect default wait? can we modify this wait?

5000 ms is default wait for expect and 
u can add timeout of 10 or 20000 ms and run in debug mode and see if it waits for 20000ms - 
give wrong assertion
to check waiting period
To increase the expect timeout from the default 5 seconds to 20 seconds (20,000 ms), 
pass the timeout option like this:
await expect(page).toHaveTitle(/Playwright/, { timeout: 20000 });

✅ This tells Playwright to wait up to 20 seconds for the title to match the regex /Playwright/ before failing.
Here we are just increasing the expect timeout only for this particular assertion.
But if you want to set a global timeout for all expect assertions, 
you can do that in the Playwright configuration file (playwright.config.ts) like this:
[🔴 PRINCE check wch property is imp]


✔️ suppose u have some propety in ts-config with some value like reporter = html and u can overvide this value while running 
from commaond - npx and give diff value instead of html to dot line etc.


✔️ imp basic properties in ts-config wihout wch we can't proceed
    testdir
    reporter
    projects


✔️ Projects in ts-config file are mapped with Test Explorer extension

✔️ import statement explanation

✔️ test('TC_001has title') -> has title is name or descp of test

✔️ page.goto() -. goto() is asynchronous code and 
    returns promise and await waits for it to be fulfilled

✔️ pw most methods are asynchronous and returns promise

✔️ check both chromium, firefox and run  a single test -> u will see Running 2 tests using 1 worker
   2 passed (19.6s)


✔️ import { test, expect } from '@playwright/test';
    No, that specific line is not an example of destructuring — it's ES6 named imports from a module.

    This line imports named exports test and expect from the module @playwright/test.
    In the module @playwright/test, test and expect are exported using named exports, like this:

    export const test = ...
    export const expect = ...

    You're importing those names directly, which is named import syntax, not destructuring.

    What's the difference?
    | Concept           | Syntax Example               | Purpose                           |
    | ----------------- | ---------------------------- | --------------------------------- |
    | **Named Import**  | `import { a } from 'module'` | Pulls named exports from a module |
    | **Destructuring** | `const { a } = obj`          | Extracts values from an object    |


🔵 - Pending Items
    - debugging tests in VSCode
    - error messages in VSCode when in goto when page is not opened



 */