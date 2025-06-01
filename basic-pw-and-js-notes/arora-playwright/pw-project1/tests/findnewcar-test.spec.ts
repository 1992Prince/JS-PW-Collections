import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { NewCarsPage } from '../pages/NewCarsPage';

test.describe('Find New Car Tests', () => {
    let homePage: HomePage;
    let newCarsPage: NewCarsPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        newCarsPage = new NewCarsPage(page);
        await homePage.navigateToHomePage();
    });

    test('should navigate to Find New Cars page', async ({ page }) => {
        await homePage.findNewCar();
        await expect(page).toHaveURL(/.*new-cars/);

        expect(await newCarsPage.getHeaderText()).toContain('New Cars');

        await newCarsPage.goToBMWPage();
        await expect(page).toHaveURL(/.*bmw-cars/);
    });
});