const { test, expect } = require("@playwright/test");
const { baseURL } = require("./shared.spec");

test("Change user status", async ({ request }) => {
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
  const token = data.jwt;
  // console.log(jwt);
  expect(response.status()).toBe(200);

  const url2 = baseURL + "/users-permissions/status/181";
  const response2 = await request.put(url2, {
    data: {
      action: "APPROVE",
    },
    headers: {
      Accept: "*/*",
      Authorization: "Bearer " + token,
    },
  });

  // console.log(await response.json);
  expect(response2.status()).toBe(200);
});
