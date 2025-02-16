const playwright = require("playwright");
const random_useragent = require("random-useragent");
require("dotenv").config();
const { login, changeSalary, logout } = require("./Naukri");
const { FN_TIMEOUT, PAGE_TIMEOUT, BROWSER } = require("./constants");

const BASE_URL = "https://naukri.com";
const USER_AGENT = random_useragent.getRandom();

async function main() {
  console.log("---------Script Start----------");

  const browser = await playwright[BROWSER].launch({ headless: true });
  const context = await browser.newContext({
    bypassCSP: true,
    baseURL: BASE_URL,
    userAgent: USER_AGENT,
    viewport: { width: 800, height: 600 },
    isMobile: false,
    hasTouch: false,
  });
  const page = await context.newPage();
  page.setDefaultTimeout(PAGE_TIMEOUT);

  await login(page);

  await changeSalary(page);

  await logout(page);

  await browser.close();

  console.log("---------Script End----------");
}

async function runWithTimeout(fn, timeoutMs) {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("⏳ Timeout reached! Exiting...")), timeoutMs)
  );
  return Promise.race([fn(), timeout]);
}

runWithTimeout(main, FN_TIMEOUT).catch((error) => {
  console.error("!!ERROR!!", error);
  process.exit(1);
});
