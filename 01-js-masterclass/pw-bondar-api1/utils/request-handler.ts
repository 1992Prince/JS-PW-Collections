import { APIRequestContext } from "@playwright/test";
import { expect } from '@playwright/test';
import { APILogger } from "./logger";
import { test } from '@playwright/test';

export class RequestHandler {

    private request: APIRequestContext;
    private logger: APILogger;
    private baseUrl: string | undefined;
    private apiPath: string;
    private defaultBaseUrl: string;
    private queryParams: object = {};
    private apiHeaders: Record<string, string> = {};
    private apiBody: object = {};

    constructor(request: APIRequestContext, apiBaseUrl: string, logger: APILogger) {
        this.request = request;
        this.defaultBaseUrl = apiBaseUrl;
        this.logger = logger;
    }


    url(url: string) {
        this.baseUrl = url;
        return this;
    }

    path(path: string) {
        this.apiPath = path;
        return this;
    }

    params(params: object) {
        this.queryParams = params;
        return this;
    }

    headers(headers: Record<string, string>) {
        this.apiHeaders = headers;
        return this;
    }

    body(body: object) {
        this.apiBody = body;
        return this;
    }

    async getRequest(statusCode: number) {
        let responseJson: any;
        const url = this.getUrl();
        await test.step(`GET request to: ${url}`, async () => {
            this.logger.logReqest('GET', url, this.apiHeaders);

            const response = await this.request.get(url, {
                headers: this.apiHeaders
            });

            this.cleanUpFields();

            const actualStatusCode = response.status();
            responseJson = await response.json();

            this.logger.logResponse(actualStatusCode, responseJson);
            this.statusCodeValidator(actualStatusCode, statusCode, this.getRequest);
        });


        return responseJson;
    }

    private getUrl() {

        const url = new URL(`${this.baseUrl ?? this.defaultBaseUrl}${this.apiPath}`);


        for (const [key, value] of Object.entries(this.queryParams)) {
            url.searchParams.append(key, value.toString());
        }
        return url.toString();
    }

    async postRequest(statusCode: number) {

        let responseJson: any;

        const url = this.getUrl();

        await test.step(`POST request to: ${url}`, async () => {
            this.logger.logReqest('POST', url, this.apiHeaders, this.apiBody);

            const response = await this.request.post(url, {
                headers: this.apiHeaders,
                data: this.apiBody
            })

            this.cleanUpFields();

            const actualStatusCode = response.status();
            responseJson = await response.json();

            this.logger.logResponse(actualStatusCode, responseJson);
            this.statusCodeValidator(actualStatusCode, statusCode, this.postRequest);
        });



        return responseJson;
    }

    async putRequest(statusCode: number) {

        const url = this.getUrl();

        let responseJson: any;

        await test.step(`PUT request to: ${url}`, async () => {
            this.logger.logReqest('PUT', url, this.apiHeaders, this.apiBody);

            const response = await this.request.put(url, {
                headers: this.apiHeaders,
                data: this.apiBody
            })

            this.cleanUpFields();

            const actualStatusCode = response.status();
            responseJson = await response.json();

            this.logger.logResponse(actualStatusCode, responseJson);
            this.statusCodeValidator(actualStatusCode, statusCode, this.putRequest);
        });



        return responseJson;
    }

    async deleteRequest(statusCode: number) {

        const url = this.getUrl();

        await test.step(`DELETE request to: ${url}`, async () => {
            this.logger.logReqest('DELETE', url, this.apiHeaders, this.apiBody);

            const response = await this.request.delete(url, {
                headers: this.apiHeaders
            })

            this.cleanUpFields();

            const actualStatusCode = response.status();

            this.logger.logResponse(actualStatusCode);
            this.statusCodeValidator(actualStatusCode, statusCode, this.deleteRequest);
        });


    }


    private statusCodeValidator(actualStatus: number, expectedStatus: number, callingMethod: Function) {
        if (actualStatus !== expectedStatus) {
            const logs = this.logger.getRecentLogs();
            const errorMessage = new Error(`Expected status code ${expectedStatus}, but got ${actualStatus}\n\nAPI Logs:\n${logs}`);
            Error.captureStackTrace(errorMessage, callingMethod);
            throw errorMessage;
        }
    }

    private cleanUpFields() {
        this.apiBody = {};
        this.apiHeaders = {};
        this.queryParams = {};
        this.apiPath = '';
        this.baseUrl = undefined;
    }
}