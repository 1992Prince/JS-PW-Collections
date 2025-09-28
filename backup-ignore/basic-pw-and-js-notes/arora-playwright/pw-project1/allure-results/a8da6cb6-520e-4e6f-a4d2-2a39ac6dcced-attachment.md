# Test info

- Name: Find New Car Tests >> should navigate to Find New Cars page
- Location: D:\2025\playwright\arora-playwright\pw-project1\tests\findnewcar-test.spec.ts:15:9

# Error details

```
Error: locator.innerText: Error: strict mode violation: locator('//*[text()=\'New Cars\']') resolved to 2 elements:
    1) <h1 data-skin="text" class="o-js o-jJ o-j5 o-jl o-j6 o-jm o-cg">New Cars</h1> aka getByRole('heading', { name: 'New Cars' })
    2) <span itemprop="name" class="o-cA o-c4 o-d o-j o-C o-o o-kH o-kJ otqhMg">New Cars</span> aka locator('span').filter({ hasText: 'New Cars' })

Call log:
  - waiting for locator('//*[text()=\'New Cars\']')

    at NewCarsPage.getText (D:\2025\playwright\arora-playwright\pw-project1\pages\BasePage.ts:21:44)
    at NewCarsPage.getHeaderText (D:\2025\playwright\arora-playwright\pw-project1\pages\NewCarsPage.ts:16:27)
    at D:\2025\playwright\arora-playwright\pw-project1\tests\findnewcar-test.spec.ts:19:34
```

# Page snapshot

```yaml
- banner:
  - link "CarWale":
    - /url: /
    - img "CarWale"
  - navigation:
    - list:
      - listitem: NEW CARS
      - listitem: USED CARS
      - listitem: REVIEWS & NEWS
  - textbox "Input field"
- heading "New Cars" [level=1]
- text: Are you planning on buying a new car? Well, we know that with so many car options available out there, it gets really difficult to find a good car which suits your need. Hence, we have put together a complete list of new cars. Maruti Suzuki, Mahindra and Tata are the 3 most popular car brands. These popular car brands cater to a wide spectrum of budgets and needs, offering a variety of cars from fuel-efficient hatchbacks to spacious SUVs. The 5 most popular cars are
- link "Mahindra XUV700":
  - /url: /mahindra-cars/xuv700/
- text: ","
- link "Mahindra XUV 3XO":
  - /url: /mahindra-cars/xuv-3xo/
- text: ","
- link "Hyundai Creta":
  - /url: /hyundai-cars/creta/
- text: ","
- link "Skoda Kylaq":
  - /url: /skoda-cars/kylaq/
- text: and
- link "Toyota Urban Cruiser Hyryder":
  - /url: /toyota-cars/hyryder/
- text: . Explore the complete list of cars by exploring different brands or by applying multiple filters such as budget, fuel type, body type etc. You can find the car that suits you best from the list of cars below.
- button "Read More"
- heading "All Brands" [level=2]
- list:
  - listitem:
    - link "Maruti Suzuki Cars Maruti Suzuki":
      - /url: /maruti-suzuki-cars/
      - img "Maruti Suzuki Cars"
      - text: Maruti Suzuki
  - listitem:
    - link "Mahindra Cars Mahindra":
      - /url: /mahindra-cars/
      - img "Mahindra Cars"
      - text: Mahindra
  - listitem:
    - link "Tata Cars Tata":
      - /url: /tata-cars/
      - img "Tata Cars"
      - text: Tata
  - listitem:
    - link "Hyundai Cars Hyundai":
      - /url: /hyundai-cars/
      - img "Hyundai Cars"
      - text: Hyundai
  - listitem:
    - link "Toyota Cars Toyota":
      - /url: /toyota-cars/
      - img "Toyota Cars"
      - text: Toyota
  - listitem:
    - link "Kia Cars Kia":
      - /url: /kia-cars/
      - img "Kia Cars"
      - text: Kia
  - listitem:
    - link "BMW Cars BMW":
      - /url: /bmw-cars/
      - img "BMW Cars"
      - text: BMW
  - listitem:
    - link "Skoda Cars Skoda":
      - /url: /skoda-cars/
      - img "Skoda Cars"
      - text: Skoda
  - listitem:
    - link "Mercedes-Benz Cars Mercedes-Benz":
      - /url: /mercedes-benz-cars/
      - img "Mercedes-Benz Cars"
      - text: Mercedes-Benz
  - listitem:
    - link "Land Rover Cars Land Rover":
      - /url: /land-rover-cars/
      - img "Land Rover Cars"
      - text: Land Rover
  - listitem:
    - link "Honda Cars Honda":
      - /url: /honda-cars/
      - img "Honda Cars"
      - text: Honda
  - listitem:
    - link "MG Cars MG":
      - /url: /mg-cars/
      - img "MG Cars"
      - text: MG
  - listitem:
    - link "Volkswagen Cars Volkswagen":
      - /url: /volkswagen-cars/
      - img "Volkswagen Cars"
      - text: Volkswagen
  - listitem:
    - link "Renault Cars Renault":
      - /url: /renault-cars/
      - img "Renault Cars"
      - text: Renault
  - listitem:
    - link "Jeep Cars Jeep":
      - /url: /jeep-cars/
      - img "Jeep Cars"
      - text: Jeep
  - listitem:
    - link "Audi Cars Audi":
      - /url: /audi-cars/
      - img "Audi Cars"
      - text: Audi
  - listitem:
    - link "Citroen Cars Citroen":
      - /url: /citroen-cars/
      - img "Citroen Cars"
      - text: Citroen
  - listitem:
    - link "Nissan Cars Nissan":
      - /url: /nissan-cars/
      - img "Nissan Cars"
      - text: Nissan
  - listitem:
    - link "BYD Cars BYD":
      - /url: /byd-cars/
      - img "BYD Cars"
      - text: BYD
  - listitem:
    - link "Volvo Cars Volvo":
      - /url: /volvo-cars/
      - img "Volvo Cars"
      - text: Volvo
  - listitem:
    - link "Porsche Cars Porsche":
      - /url: /porsche-cars/
      - img "Porsche Cars"
      - text: Porsche
  - listitem:
    - link "Jaguar Cars Jaguar":
      - /url: /jaguar-cars/
      - img "Jaguar Cars"
      - text: Jaguar
  - listitem:
    - link "Lamborghini Cars Lamborghini":
      - /url: /lamborghini-cars/
      - img "Lamborghini Cars"
      - text: Lamborghini
  - listitem:
    - link "Lexus Cars Lexus":
      - /url: /lexus-cars/
      - img "Lexus Cars"
      - text: Lexus
  - listitem:
    - link "Rolls-Royce Cars Rolls-Royce":
      - /url: /rolls-royce-cars/
      - img "Rolls-Royce Cars"
      - text: Rolls-Royce
  - listitem:
    - link "MINI Cars MINI":
      - /url: /mini-cars/
      - img "MINI Cars"
      - text: MINI
  - listitem:
    - link "Maserati Cars Maserati":
      - /url: /maserati-cars/
      - img "Maserati Cars"
      - text: Maserati
  - listitem:
    - link "Ferrari Cars Ferrari":
      - /url: /ferrari-cars/
      - img "Ferrari Cars"
      - text: Ferrari
  - listitem:
    - link "Force Motors Cars Force Motors":
      - /url: /force-motors-cars/
      - img "Force Motors Cars"
      - text: Force Motors
  - listitem:
    - link "Isuzu Cars Isuzu":
      - /url: /isuzu-cars/
      - img "Isuzu Cars"
      - text: Isuzu
  - listitem:
    - link "Aston Martin Cars Aston Martin":
      - /url: /aston-martin-cars/
      - img "Aston Martin Cars"
      - text: Aston Martin
  - listitem:
    - link "McLaren Cars McLaren":
      - /url: /mclaren-cars/
      - img "McLaren Cars"
      - text: McLaren
  - listitem:
    - link "Bentley Cars Bentley":
      - /url: /bentley-cars/
      - img "Bentley Cars"
      - text: Bentley
  - listitem:
    - link "Lotus Cars Lotus":
      - /url: /lotus-cars/
      - img "Lotus Cars"
      - text: Lotus
- button "[object Object]": View More Brands
- text: AD
- heading "Find The Cars Of Your Choice" [level=2]
- list:
  - listitem: Budget
  - listitem: Body Type
  - listitem: Fuel Type
  - listitem: Transmission
  - listitem: Seating Capacity
- link "Under 5 Lakh":
  - /url: /new/best-cars-under-5-lakh/
- link "Under 6 Lakh":
  - /url: /new/best-cars-under-6-lakh/
- link "Under 7 Lakh":
  - /url: /new/best-cars-under-7-lakh/
- link "Under 8 Lakh":
  - /url: /new/best-cars-under-8-lakh/
- link "Under 10 Lakh":
  - /url: /new/best-cars-under-10-lakh/
- link "Under 15 Lakh":
  - /url: /new/best-cars-under-15-lakh/
- link "Under 20 Lakh":
  - /url: /new/best-cars-under-20-lakh/
- link "Under 25 Lakh":
  - /url: /new/best-cars-under-25-lakh/
- link "Under 30 Lakh":
  - /url: /new/best-cars-under-30-lakh/
- link "Luxury Cars":
  - /url: /new/best-luxury-cars/
- text: AD
- list:
  - listitem:
    - link "Home":
      - /url: /
  - listitem: New Cars
- text: Buying a New Car? Ask the Experts 08068441441 (Toll free)
- contentinfo:
  - text: Language:English
  - link "हिंदी":
    - /url: /hi/new-cars/
  - link "About Us":
    - /url: /about-us/
  - link "Careers":
    - /url: /career/
  - link "Terms & Conditions":
    - /url: /used/sell/terms/
  - link "Advertise":
    - /url: /contactus/
  - paragraph: Connect with us
  - link "Facebook":
    - /url: https://www.facebook.com/CarWale/
  - link "Twitter":
    - /url: https://twitter.com/carwale/
  - link "YouTube":
    - /url: https://www.youtube.com/user/CARWALE/featured
  - link "LinkedIn":
    - /url: https://in.linkedin.com/company/automotive-exchange-private-limited-carwale-com-
  - link "Instagram":
    - /url: https://www.instagram.com/carwaleindia/?hl=en
  - paragraph: Download Mobile App
  - list:
    - listitem:
      - link "CarWale Android App Download CarWale iOS App":
        - /url: https://apps.apple.com/in/app/carwale-buy-new-used-cars/id910137745
        - text: CarWale Android App
        - img "Download CarWale iOS App"
    - listitem:
      - link "CarWale Android App Download CarWale Android App":
        - /url: https://play.google.com/store/apps/details?id=com.carwale&referrer=utm_source%3DCarWaleMsite%26utm_medium%3DFooter%26utm_campaign=CarWale%2520MobilesiteFooter
        - text: CarWale Android App
        - img "Download CarWale Android App"
  - list:
    - listitem: CarWale
    - listitem:
      - link "BikeWale":
        - /url: https://www.bikewale.com/
    - listitem:
      - link "CarTrade":
        - /url: https://www.cartrade.com/
    - listitem:
      - link "Mobility Outlook":
        - /url: https://www.mobilityoutlook.com/
    - listitem:
      - link "OLX":
        - /url: https://www.olx.in/
    - listitem: abSure
  - paragraph: ©CarTrade Tech.
  - link "Visitor Agreement":
    - /url: /visitor-agreement/
  - text: "&"
  - link "Privacy Policy":
    - /url: /privacy-policy/
- paragraph: Login to CarWale
- paragraph: Login to CarWale for a more personalised experience
- button "Close Popup"
- text: Contact Number* +91
- textbox "Input field"
- group "Contact Number*"
- button "Get OTP"
- text: Or Continue with
- img "Whatsapp"
- text: Whatsapp
```

# Test source

```ts
   1 | import { Page } from '@playwright/test'
   2 |
   3 | export class BasePage {
   4 |
   5 |     protected page: Page;
   6 |
   7 |     constructor(page: Page) {
   8 |         this.page = page
   9 |
  10 |     }
  11 |
  12 |     async click(selector: string) {
  13 |         await this.page.locator(selector).click();
  14 |     }
  15 |
  16 |     async fill(selector: string, text: string) {
  17 |         await this.page.locator(selector).fill(text);
  18 |     }
  19 |
  20 |     async getText(selector: string) {
> 21 |         return this.page.locator(selector).innerText();
     |                                            ^ Error: locator.innerText: Error: strict mode violation: locator('//*[text()=\'New Cars\']') resolved to 2 elements:
  22 |     }
  23 |
  24 |     async getAttribute(selector: string, attribute: string) {
  25 |         return this.page.locator(selector).getAttribute(attribute);
  26 |     }
  27 |
  28 |     async isVisible(selector: string) {
  29 |         return this.page.locator(selector).isVisible();
  30 |     }
  31 |
  32 |     async isChecked(selector: string) {
  33 |         return this.page.locator(selector).isChecked();
  34 |     }
  35 |
  36 |     async check(selector: string) {
  37 |         await this.page.locator(selector).check();
  38 |     }
  39 |
  40 |     async hover(selector: string) {
  41 |         await this.page.locator(selector).hover();
  42 |     }
  43 |
  44 |     async navigateTo(url: string) {
  45 |         await this.page.goto(url);
  46 |     }
  47 |
  48 | }
```