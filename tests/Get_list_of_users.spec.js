const { test, expect } = require("@playwright/test");
const { baseURL } = require("./shared.spec");

test("Get list of users", async ({ request }) => {
  const url = `${baseURL}/users?populate=*`;
  const response = await request.get(url);

  console.log(await response.json);
  expect(response.status()).toBe(200);
});
