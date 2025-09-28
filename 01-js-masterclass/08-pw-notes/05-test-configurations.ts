/*
Test configuration

Playwright has many options to configure how your tests are run. 
You can specify these options in the configuration file. 
Note that test runner options are top-level, do not put them into the use section.

🧠 What does this mean:
"Test runner options are top-level, do not put them in the use section."


🔑 Explanation in simple words:
Playwright Config file (usually playwright.config.ts or .js) has two types of options:

1. 🧪 Test Runner Options → Top-level config

These control how the test runs — e.g. test directory, timeout, retries, etc.

✅ Example:

const config = {
  testDir: './tests',
  timeout: 30000,
  retries: 2,
  reporter: 'html',
};

⚠️ These must be at the top-level — not inside the use block.

2. 🌐 Browser Context Options → Inside use

These control the browser behavior or context — e.g. headless, viewport, baseURL, etc.

✅ Example:

const config = {
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    baseURL: 'https://example.com'
  }
};


NOTE:
✅ In Playwright, the config file (playwright.config.ts) defines default behavior for all tests via properties 
like screenshot, video, trace, headless, etc. These are set at the project level, but can be overridden at the test, 
project, or code level. For example, even if screenshot: "off" is set globally, you can still take a screenshot using 
page.screenshot() in code. Similar override behavior applies to video, trace, viewport, 
and other settings — Playwright prioritizes the most specific configuration (code > test > project).

https://playwright.dev/docs/test-configuration
Basic Configuration for Playwright Tests:

import { defineConfig } from '@playwright/test';   
        - testDir           -    Where Playwright looks for test files
        - fullyParallel     -   Run all tests in full parallel
        - forbidOnly        -   Prevent .only() commits on CI
        - retries           -   Set test retry attempts
        - workers           - How many workers to use (parallelism)
        - reporter          - Output format (e.g., html, list, dot)
        - use               - Default browser context settings
                - baseURL
                - headless
                - viewport
                - screenshot
                - video
                - trace
        - projects          - 	Run same test in multiple browsers/devices
        - webServer         -   Start dev server before running tests
*/