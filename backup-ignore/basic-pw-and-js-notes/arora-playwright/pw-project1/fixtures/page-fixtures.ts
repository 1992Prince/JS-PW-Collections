import { Page } from '@playwright/test'
import { HomePage } from '../pages/HomePage';
import { NewCarsPage } from '../pages/NewCarsPage';
import { BMWPage } from '../pages/BMWPage';
import { HondaPage } from '../pages/HondaPage';
import { HyundaiPage } from '../pages/HyundaiPage';
import { ToyotaPage } from '../pages/ToyotaPage';


export class PageFixtures {

    readonly homePage: HomePage;
    readonly newCarsPage: NewCarsPage;
    readonly bmwPage: BMWPage;
    readonly hondaPage: HondaPage;
    readonly hyundaiPage: HyundaiPage;
    readonly toyotaPage: ToyotaPage;

    constructor(page: Page) {
        this.homePage = new HomePage(page);
        this.newCarsPage = new NewCarsPage(page);
        this.bmwPage = new BMWPage(page);
        this.hondaPage = new HondaPage(page);
        this.hyundaiPage = new HyundaiPage(page);
        this.toyotaPage = new ToyotaPage(page);
    }
}