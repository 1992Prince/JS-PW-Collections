import { create } from 'domain';
import { expect } from '../utils/custom-expect';
import { test } from '../utils/fixtures';
import { createToken } from '../helpers/createToken';
import { validateSchema } from '../utils/schema-validator';
import articleReqPayload from '../request-objects/POST-article.json'
import { faker } from '@faker-js/faker';

let authToken: string;

test.beforeAll('Login to Conduit API', async ({ api, config }) => {

    authToken = await createToken(api, config.userEmail, config.userPassword);

});


test.only('Get Articles', async ({ api }) => {


    const response = await api
        //.url('https://random-api.bondaracademy.com/api')
        .path('/articles')
        .params({ limit: 10, offset: 0 })
        //.headers({ Authorization: 'authToken' })
        //.body({ article: { title: 'Test Article' } })
        .getRequest(200);

    console.log(response)
    expect(response.articles.length).shouldBeLessThanOrEqual(10);
    expect(response.articlesCount).shouldEqual(10);
    expect(response.articlesCount).shouldEqual(10);
    expect(response.articlesCount).not.shouldEqual(101);

    console.log(`${faker.person.firstName()} ${faker.person.lastName()} is testing the API`);

});

// test('Logger Test', async ({ api }) => {


//     const logger = new APILogger();
//     logger.logReqest('POST', 'https://test.com/articles', { Authorization: authToken }, { foo: 'bar' });
//     logger.logResponse(200, { message: 'Success' });
//     const logs = logger.getRecentLogs();
//     console.log(logs);

// });

test('Get Test Tags', async ({ api }) => {

    const response = await api
        .path('/tags')
        .getRequest(200);

    // refere website to create json schema - https://transform.tools/json-to-json-schema
    await validateSchema('tags', 'GET_tags', response);

    //console.log(response)
    expect(response.tags[0]).shouldEqual('Test');
    expect(response.tags.length).shouldBeLessThanOrEqual(10);

});


test('Create and Delete Article', async ({ api }) => {

    // const createArticleResponse = await api
    //     .path('/articles')
    //     .headers({ Authorization: authToken })
    //     .body({
    //         article: {
    //             title: 'Test Article',
    //             description: 'Test Description',
    //             body: 'Test Body',
    //             tagList: ['Test']
    //         }
    //     })
    //     .postRequest(201);

    // if u want to update payload data [instead of updating json file, store it in
    // memory and update it, else if u run tests in parallel, it will fail]
    const articleRequestPayload = JSON.parse(JSON.stringify(articleReqPayload));
    articleReqPayload.article.title = 'Test Article Five';
    const createArticleResponse = await api
        .path('/articles')
        .headers({ Authorization: authToken })
        .body(articleRequestPayload)
        .postRequest(201);

    expect(createArticleResponse.article.title).shouldEqual('Test Article Five');
    const slugId = createArticleResponse.article.slug;


    const articlesResponse = await api
        .path('/articles')
        .headers({ Authorization: authToken })
        .params({ limit: 10, offset: 0 })
        .getRequest(200);

    expect(articlesResponse.articles[0].title).shouldEqual('Test Article Five');

    await api
        .path(`/articles/${slugId}`)
        .headers({ Authorization: authToken })
        .deleteRequest(204);


    const articlesResponseTwo = await api
        .path('/articles')
        .headers({ Authorization: authToken })
        .params({ limit: 10, offset: 0 })
        .getRequest(200);

    expect(articlesResponseTwo.articles[0].title).not.shouldEqual('Test Article Five');

});


test('Create, Update and Delete Article', async ({ api }) => {

    const createArticleResponse = await api
        .path('/articles')
        .headers({ Authorization: authToken })
        .body({
            article: {
                title: 'Test Article',
                description: 'Test Description',
                body: 'Test Body',
                tagList: ['Test']
            }
        })
        .postRequest(201);

    expect(createArticleResponse.article.title).shouldEqual('Test Article');
    const slugId = createArticleResponse.article.slug;


    //update article
    const updateArticleResponse = await api
        .path(`/articles/${slugId}`)
        .headers({ Authorization: authToken })
        .body({
            article: {
                title: 'Updated Test Article',
                description: 'Updated Test Description',
                body: 'Updated Test Body',
                tagList: ['Test', 'Updated']
            }
        })
        .putRequest(200);
    expect(updateArticleResponse.article.title).shouldEqual('Updated Test Article');
    const updatedSlugId = updateArticleResponse.article.slug;


    const articlesResponse = await api
        .path('/articles')
        .headers({ Authorization: authToken })
        .params({ limit: 10, offset: 0 })
        .getRequest(200);

    expect(articlesResponse.articles[0].title).shouldEqual('Updated Test Article');

    await api
        .path(`/articles/${updatedSlugId}`)
        .headers({ Authorization: authToken })
        .deleteRequest(204);


    const articlesResponseTwo = await api
        .path('/articles')
        .headers({ Authorization: authToken })
        .params({ limit: 10, offset: 0 })
        .getRequest(200);

    expect(articlesResponseTwo.articles[0].title).not.shouldEqual('Updated Test Article');

});

