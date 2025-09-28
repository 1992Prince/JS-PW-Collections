import { test, expect } from '@playwright/test';

// NOTE: Before performing any validation on json resp, first understand how the json response structure looks like.
// https://conduit.bondaracademy.com/

test.beforeAll('Login to Conduit API', async ({ }) => {
  console.log('This is executed before all tests in this file');
});

test.afterAll('Logout to Conduit API', async ({ }) => {
  console.log('This is executed after all tests in this file');
});

test.beforeEach('Login to Conduit API before each test', async ({ }) => {
  console.log('This is executed before each test in this file');
});

test.afterEach('Logout to Conduit API after each test', async ({ }) => {
  console.log('This is executed after each test in this file');
});

/**
 * Task for u Prince - creating token is common in all tests, so keep that in beforeAll and call it in each test
 *                     instead of creating token for each test.
 */

// GET Req examples
test('Get Articles Tags', async ({ request }) => {

  // get fun returns promise
  const tagsResp = await request.get('https://conduit-api.bondaracademy.com/api/tags');
  // console.log('Tags Response Status:', tagsResp);
  const tagsRespJson = await tagsResp.json();
  console.log('Tags Response:', tagsRespJson);

  // fetch status code and validate
  console.log('Tags Response Status:', tagsResp.status());
  expect(tagsResp.status()).toEqual(200);


  // validate first tag value
  // tagsRespJson.tags returns array of tags i.e. {tags:['Test', 'Example',... 'Playwright']}
  expect(tagsRespJson.tags[0]).toEqual('Test');

  // we can get count of tags present in array and validate is tags count should be less than or equal to 10
  expect(tagsRespJson.tags.length).toBeLessThanOrEqual(10);
});



test('Get All Articles', async ({ request }) => {

  const articlesResp = await request.get('https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0');

  const articlesRespJson = await articlesResp.json();
  console.log('Tags Response:', articlesRespJson);

  expect(articlesResp.status()).toEqual(200);
  expect(articlesRespJson.articles.length).toBeLessThanOrEqual(10);
  expect(articlesRespJson.articlesCount).toEqual(10);
});


// POST Req examples


test('Create An Article', async ({ request }) => {

  const loginResp = await request.post('https://conduit-api.bondaracademy.com/api/users/login', {
    data: {
      "user": {
        "email": "testbondar1@gmail.com",
        "password": "testbondar1"
      }
    }
  });

  expect(loginResp.status()).toEqual(200);

  const loginRespJson = await loginResp.json();
  console.log('Login Response:', loginRespJson);
  const token = loginRespJson.user.token; // save token for further use
  console.log('Token:', token);
  console.log();


  // creatng an article
  const createArticleResp = await request.post('https://conduit-api.bondaracademy.com/api/articles', {
    data: {
      "article": {
        "title": "DelME2",
        "description": "DelMe2",
        "body": "DelME2",
        "tagList": []
      }
    },
    headers: {
      'Authorization': `Token ${token}` // use token from login response
    }
  });

  const newArticleJsonResp = await createArticleResp.json();
  console.log('Create Article Response:', newArticleJsonResp);

  expect(createArticleResp.status()).toEqual(201);
  expect(newArticleJsonResp.article.title).toEqual('DelME2');



  // now fetch created article 
  // If u don't pass token in header, then it will only return public articles and not the one created by the user

  const articlesResp = await request.get('https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0',
    {
      headers: {
        'Authorization': `Token ${token}` // use token from login response
      }
    }
  );

  console.log();
  const articlesRespJson = await articlesResp.json();
  console.log('Tags Response:', articlesRespJson);


});


// DELETE Article

test('Delete An Article', async ({ request }) => {

  const loginResp = await request.post('https://conduit-api.bondaracademy.com/api/users/login', {
    data: {
      "user": {
        "email": "testbondar1@gmail.com",
        "password": "testbondar1"
      }
    }
  });

  expect(loginResp.status()).toEqual(200);

  const loginRespJson = await loginResp.json();
  console.log('Login Response:', loginRespJson);
  const token = loginRespJson.user.token; // save token for further use
  console.log('Token:', token);
  console.log();


  // creating an article
  const createArticleResp = await request.post('https://conduit-api.bondaracademy.com/api/articles', {
    data: {
      "article": {
        "title": "DelME2",
        "description": "DelMe2",
        "body": "DelME2",
        "tagList": []
      }
    },
    headers: {
      'Authorization': `Token ${token}` // use token from login response
    }
  });

  const newArticleJsonResp = await createArticleResp.json();
  console.log('Create Article Response:', newArticleJsonResp);

  expect(createArticleResp.status()).toEqual(201);
  expect(newArticleJsonResp.article.title).toEqual('DelME2');



  // now delete created article
  // If u don't pass token in header, then it will only return public articles and not the one created by the user

  const deleteArticleResp = await request.delete('https://conduit-api.bondaracademy.com/api/articles/DelME2-32006',
    {
      headers: {
        'Authorization': `Token ${token}` // use token from login response
      }
    }
  );

  console.log();
  expect(deleteArticleResp.status()).toEqual(204);
  // delete response will not return any body, so we can't validate anything in response body


});


// PUT req

test('Update an Article', async ({ request }) => {

  const loginResp = await request.post('https://conduit-api.bondaracademy.com/api/users/login', {
    data: {
      "user": {
        "email": "testbondar1@gmail.com",
        "password": "testbondar1"
      }
    }
  });

  expect(loginResp.status()).toEqual(200);

  const loginRespJson = await loginResp.json();
  const token = loginRespJson.user.token; // save token for further use
  console.log();


  // creating an article
  const createArticleResp = await request.post('https://conduit-api.bondaracademy.com/api/articles', {
    data: {
      "article": {
        "title": "TPM 1",
        "description": "TPM 1",
        "body": "TPM 1",
        "tagList": []
      }
    },
    headers: {
      'Authorization': `Token ${token}` // use token from login response
    }
  });

  const newArticleJsonResp = await createArticleResp.json();
  console.log('Create Article Response:', newArticleJsonResp);

  expect(createArticleResp.status()).toEqual(201);
  expect(newArticleJsonResp.article.title).toEqual('TPM 1');

  // fetch article slug
  const articleSlug = newArticleJsonResp.article.slug;



  // now update article title

  const updateArticleResp = await request.put(`https://conduit-api.bondaracademy.com/api/articles/${articleSlug}`, // use article slug from create response
    {
      data: {
        "article": {
          "title": "TPM 4",
          "description": "TPM 4",
          "body": "TPM 4",
          "tagList": [
            "TPM 4"
          ],
          "slug": "TPM-4-32006"
        }
      },
      headers: {
        'Authorization': `Token ${token}` // use token from login response
      }
    }
  );

  const updateArticleJsonResp = await updateArticleResp.json();
  const newSlugId = updateArticleJsonResp.article.slug;

  console.log();
  expect(updateArticleResp.status()).toEqual(200);


  // now delete this article
  const deleteArticleResp = await request.delete(`https://conduit-api.bondaracademy.com/api/articles/${newSlugId}`,
    {
      headers: {
        'Authorization': `Token ${token}` // use token from login response
      }
    }
  );

  console.log();
  expect(deleteArticleResp.status()).toEqual(204);

});


