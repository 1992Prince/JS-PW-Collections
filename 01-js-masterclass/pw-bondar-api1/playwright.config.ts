import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',

  fullyParallel: false,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : 1,

  reporter: [['html'], ['list']],

  use: {

    // trace: 'on-first-retry',
  },


  projects: [
    {
      name: 'api-testing',
      testMatch: 'example*',
      //dependencies: ['smoke-tests'],
    },
    {
      name: 'smoke-tests',
      testMatch: 'smoke*'
    },

  ],

});
