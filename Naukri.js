const { password, email } = require("./constants.js");

async function login(page) {
  await page.goto("/nlogin/login");
  console.log("login page", page.url());

  await page.locator("#usernameField").fill(email);
  await page.locator("#passwordField").fill(password);

  console.log("Logging in...");
  await page.getByRole("button", { name: "Login", exact: true }).click();

  await page.waitForTimeout(15000);
  await page.waitForURL("**/mnjuser/homepage", { timeout: 30000, waitUntil: "load" });
  console.log("Logged in!", page.url());
}

module.exports = { login };
