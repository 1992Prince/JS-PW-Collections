import { test, expect } from '@playwright/test';

// https://conduit.bondaracademy.com
// NOTE: Before performing any validation on json resp, first understand how the json response structure looks like.

let token: string;

test.beforeAll('Login to Conduit API', async ({ request }) => {

  const loginResp = await request.post('https://conduit-api.bondaracademy.com/api/users/login', {
    data: {
      "user": {
        "email": "testbondar1@gmail.com",
        "password": "testbondar1"
      }
    }
  });

  const loginRespJson = await loginResp.json();
  token = loginRespJson.user.token;

});


// GET Req examples
test('Get Articles Tags', async ({ request, page }) => {


  const tagsResp = await request.get('https://conduit-api.bondaracademy.com/api/tags');

  const tagsRespJson = await tagsResp.json();
  console.log('Tags Response:', tagsRespJson);


  console.log('Tags Response Status:', tagsResp.status());
  expect(tagsResp.status()).toEqual(200);
  expect(tagsRespJson.tags[0]).toEqual('Test');
  expect(tagsRespJson.tags.length).toBeLessThanOrEqual(10);


});



test('Get All Articles', async ({ request, page }) => {

  const articlesResp = await request.get('https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0');

  const articlesRespJson = await articlesResp.json();
  console.log('Tags Response:', articlesRespJson);

  expect(articlesResp.status()).toEqual(200);
  expect(articlesRespJson.articles.length).toBeLessThanOrEqual(10);
  expect(articlesRespJson.articlesCount).toEqual(10);

});


// POST Req examples


test('Create An Article', async ({ request, page }) => {


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
      'Authorization': `Token ${token}`
    }
  });

  const newArticleJsonResp = await createArticleResp.json();
  console.log('Create Article Response:', newArticleJsonResp);

  expect(createArticleResp.status()).toEqual(201);
  expect(newArticleJsonResp.article.title).toEqual('DelME2');




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

  await page.waitForTimeout(1000);

  const deleteArticleResp = await request.delete('https://conduit-api.bondaracademy.com/api/articles/DelME2-32006',
    {
      headers: {
        'Authorization': `Token ${token}`
      }
    }
  );

  console.log();
  expect(deleteArticleResp.status()).toEqual(204);

});


// DELETE Article

test('Delete An Article', async ({ request, page }) => {


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
      'Authorization': `Token ${token}`
    }
  });

  const newArticleJsonResp = await createArticleResp.json();
  console.log('Create Article Response:', newArticleJsonResp);

  expect(createArticleResp.status()).toEqual(201);
  expect(newArticleJsonResp.article.title).toEqual('DelME2');

  await page.waitForTimeout(1000);

  const deleteArticleResp = await request.delete('https://conduit-api.bondaracademy.com/api/articles/DelME2-32006',
    {
      headers: {
        'Authorization': `Token ${token}`
      }
    }
  );

  console.log();
  expect(deleteArticleResp.status()).toEqual(204);

});


// PUT req

test('Update an Article', async ({ request, page }) => {

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
      'Authorization': `Token ${token}`
    }
  });

  const newArticleJsonResp = await createArticleResp.json();
  console.log('Create Article Response:', newArticleJsonResp);

  expect(createArticleResp.status()).toEqual(201);
  expect(newArticleJsonResp.article.title).toEqual('TPM 1');

  const articleSlug = newArticleJsonResp.article.slug;


  const updateArticleResp = await request.put(`https://conduit-api.bondaracademy.com/api/articles/${articleSlug}`,
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
        'Authorization': `Token ${token}`
      }
    }
  );

  const updateArticleJsonResp = await updateArticleResp.json();
  const newSlugId = updateArticleJsonResp.article.slug;

  console.log();
  expect(updateArticleResp.status()).toEqual(200);


  await page.waitForTimeout(1000);

  // now delete this article
  const deleteArticleResp = await request.delete(`https://conduit-api.bondaracademy.com/api/articles/${newSlugId}`,
    {
      headers: {
        'Authorization': `Token ${token}`
      }
    }
  );

  console.log();
  expect(deleteArticleResp.status()).toEqual(204);

  await page.waitForTimeout(3000);

});


