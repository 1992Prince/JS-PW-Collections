import { TestDataGenerator } from "../utils/TestDataGenerator";
import { faker } from '@faker-js/faker';

const randomString: string = TestDataGenerator.generateRandomString(10);
const randomAlphaNumericStr: string = TestDataGenerator.generateRandomAlphanumeric(10);
const randomNum: number = TestDataGenerator.generateRandomInteger(1, 10);
const email: string = TestDataGenerator.generateRandomEmail();
const phoneno = TestDataGenerator.generateRandomPhone();
const randomDate = TestDataGenerator.generateRandomDate(new Date('2020-01-01'), new Date('2025-12-31'));


console.log("randomString - ", randomString);
console.log("randomAlphaNumericStr - ", randomAlphaNumericStr);
console.log("randomNum - ", randomNum);
console.log("email - ", email);
console.log("phoneno - ", phoneno);
console.log('Random Date:', randomDate);

/**
randomString -  RmbchMjJBS
randomAlphaNumericStr -  5lF7Vpwuwl
randomNum -  10
email -  EmhprfEC@hotmail.com
phoneno -  +15199486631
Random Date: 2024-05-12T00:13:20.626Z
 */

// JS Faker Library
// https://fakerjs.dev/guide/
//npm install @faker-js/faker --save-dev
// You installed @faker-js/faker with --save-dev, so it went into your devDependencies in package.json.

console.log();
console.log();

const articleTitle = faker.animal.lion();
const bookGenre = faker.book.genre();
const bookAuthor = faker.book.author();
const personFirstName = faker.person.firstName();
const personLastName = faker.person.lastName();
const personPhoneNum = faker.phone.number();

console.log("articleTitle: ", articleTitle);
console.log("bookGenre: ", bookGenre);
console.log("bookAuthor: ", bookAuthor);
console.log("personFirstName: ", personFirstName);
console.log("personLastName: ", personLastName);
console.log("personPhoneNum: ", personPhoneNum);