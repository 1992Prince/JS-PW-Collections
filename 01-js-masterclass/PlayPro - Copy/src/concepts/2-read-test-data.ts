import { getTestData, getJsonObject, getJsonArray } from "../utils/testdatareader";

const base_url = getTestData("base_url");
console.log(`typeof base_url: ${typeof base_url}`); // typeof base_url: string
console.log("Base URL from test data: ", base_url); // Base URL from test data:  https://playwright.dev/
console.log()

// const prod_urls = getTestData("prod_urls"); // bug in sid code, validation is not added ask him
// console.log(`typeof prod_urls: ${typeof prod_urls}`);
// console.log("Production URLs from test data: ", prod_urls); // Production URLs from test data:  https://example.com,https://example.org
// console.log()

// fetching json object
const config = getJsonObject("config");
console.log(`config obj is - ${config}`);     // config obj is - [object Object]
console.log("config obj2 is - ", config);     // config obj2 is -  { env: 'qa', timeout: 5000 }
console.log(`config obj is via JSON.stringify() - ${JSON.stringify(config)}`); // config obj is via JSON.stringify() - {"env":"qa","timeout":5000}
console.log(`typeof config: ${typeof config}`); // typeof config: object
console.log("Config object from test data: ", config); // Config object from test data:  { env: 'qa', timeout: 5000 }
console.log(config.env); // qa

console.log()

// fetching json array
const ids = getJsonArray("ids");
console.log(`All ids are - ${ids}`);       // All ids are - 101,102,103
console.log(`typeof ids: ${typeof ids}`); // typeof ids: object
console.log(ids) // [ 101, 102, 103 ]
console.log(ids[0]); // 101

