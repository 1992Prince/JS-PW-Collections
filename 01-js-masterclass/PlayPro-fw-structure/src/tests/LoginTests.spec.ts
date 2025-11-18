import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

const test = base.extend<{ loggedInPage: Page }>({
    loggedInPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
        await loginPage.verifyLoginSuccess('Swag Labs');
        await use(page); // logged-in page pass kar diya
    },
});

test('Login with valid credentials', async ({ loggedInPage }) => {
    await loggedInPage.locator("item_4_title_link").isVisible();
});

test('Validate Products Page', async ({ loggedInPage, page }) => {

    const productsPage = new ProductsPage(page);

    await productsPage.isAt("Products");
    await productsPage.printAllProductsName();
    await productsPage.validateBoltShirtPrice();
});

