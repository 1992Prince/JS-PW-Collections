import { TestDataGenerator } from "../utils/TestDataGenerator";

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