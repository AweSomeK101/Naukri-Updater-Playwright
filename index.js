const { firefox } = require("playwright");
const random_useragent = require("random-useragent");
require("dotenv").config();
const { login, changeSalary, logout } = require("./Naukri");

const BASE_URL = "https://naukri.com";
const USER_AGENT = random_useragent.getRandom(function (ua) {
  return ua.browserName === "Firefox";
});

async function main() {
  console.log("---------Script Start----------");

  const browser = await firefox.launch({ headless: false });
  const context = await browser.newContext({
    bypassCSP: true,
    baseURL: BASE_URL,
    userAgent: USER_AGENT,
    viewport: { width: 800, height: 600 },
    isMobile: false,
    hasTouch: false,
  });
  const page = await context.newPage();
  page.setDefaultTimeout(30000);

  await login(page);

  await changeSalary(page);

  await logout(page);

  await browser.close();

  console.log("---------Script End----------");
}

main().catch((error) => {
  console.error("!!ERROR!!", error);
  process.exit(1);
});
