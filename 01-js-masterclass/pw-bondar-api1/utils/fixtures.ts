import { test as base } from '@playwright/test';
import { RequestHandler } from './request-handler';
import { APILogger } from './logger';
import { setCustomExpectLogger } from './custom-expect';
import { config } from '../api-test-config';

// base → ye original Playwright ka test object hai (jisme built-in fixtures hote hain jaise page, browser).
// RequestHandler → tumhari apni custom class jo request banane ke liye use hogi.


// Yahaan tumne ek type banayi: TestOptions.
// Is type mein tum keh rahe ho:
// Mere paas ek fixture hoga jiska naam api hai, aur wo RequestHandler ka object hoga."
export type TestOptions = {
    api: RequestHandler;
    config: typeof config;
}


/**
- base.extend<TestOptions>(...) → tum apna custom fixture add kar rahe ho.
- Fixture ka naam: api
- Fixture value: ek naya RequestHandler() ka instance.
- use(requestHandler) → ye object tumhare test ke andar inject ho jayega.
- Teardown ke liye abhi kuch nahi likha, kyunki class khatam hote hi clean up auto ho jayega
  (agar resources free karne ki zarurat hoti to use() ke baad likhte).
 */
export const test = base.extend<TestOptions>({
    api: async ({ request }, use) => {
        const baseUrl = 'https://conduit-api.bondaracademy.com/api';
        const logger = new APILogger();
        setCustomExpectLogger(logger);
        const requestHandler = new RequestHandler(request, config.apiUrl, logger);
        await use(requestHandler);
    },
    config: async ({ }, use) => {
        await use(config);
    }
});