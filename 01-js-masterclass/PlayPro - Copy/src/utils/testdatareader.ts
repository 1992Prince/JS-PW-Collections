import fs from 'fs';
import { TEST_DATA_PATH } from '../constants/constants';


const testDataPath = TEST_DATA_PATH;
//const testDataPath = "D://2025//17-sid-pw-course//JS-PW-Collections//01-js-masterclass//PlayPro//src//utils//testdatareader.ts";
// TEST_DATA_PATH value is coming from constants file


// Utility to load and parse JSON once
function loadTestData(): any {
    if (!fs.existsSync(testDataPath)) {
        throw new Error(`Test data file not found: ${testDataPath}`);
    }

    const rawData = fs.readFileSync(testDataPath, "utf-8"); // json data is stored as string in rawData
    return JSON.parse(rawData); // converting string to json object via JSON.parse
}

// method to get json value [simple json like {"base_url": "https://example.com"}];
export function getTestData(key: string): string {

    const testData = loadTestData();

    if (!(key in testData)) {
        throw new Error(`Key "${key}" not found in test data`);
    }

    if (typeof testData[key] !== "string") {
        throw new Error(`Key "${key}" does not contain a string value`);
    }


    return testData[key];
}

// Method to get JSON object
export function getJsonObject(key: string): Record<string, any> {

    const testData = loadTestData();

    if (!(key in testData)) {
        throw new Error(`Key "${key}" not found in test data`);
    }

    const value = testData[key];
    if (typeof value !== "object" || Array.isArray(value)) {
        throw new Error(`Key "${key}" does not contain a JSON object`);
    }

    return value;
}

// Method to get JSON array
export function getJsonArray(key: string): any[] {
    const testData = loadTestData();

    if (!(key in testData)) {
        throw new Error(`Key "${key}" not found in test data`);
    }

    const value = testData[key];
    if (!Array.isArray(value)) {
        throw new Error(`Key "${key}" does not contain a JSON array`);
    }

    return value;
}


