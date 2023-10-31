const { test, expect } = require("@playwright/test");
const { baseURL } = require("./shared.spec");

test("Local login", async ({ request }) => {
  const url = baseURL + "/auth/local";
  const response = await request.post(url, {
    data: {
      identifier: "xiaoyu@mainnet.digital",
      password: "123456",
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const invalidJson = await response.json();
  const fixedJson = JSON.stringify(invalidJson);
  const data = JSON.parse(fixedJson);
  // console.log(data);
  const jwt = data.jwt;
  token = jwt;
  // console.log(jwt);
  expect(response.status()).toBe(200);
});
