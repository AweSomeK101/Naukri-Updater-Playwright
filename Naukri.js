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

async function changeSalary(page) {
  await page.goto("/mnjuser/profile");
  console.log("Profile page", page.url());

  await page.locator("em.icon.edit").filter({ hasText: "editOneTheme" }).click();
  const salaryInput = await page.locator("#totalAbsCtc_id");

  let salary = parseInt((await salaryInput.inputValue()).replace(/,/g, ""), 10);
  console.log("Current salary:", salary);
  salary += Math.random() > 0.5 ? -1 : 1;

  await salaryInput.fill("");
  await salaryInput.pressSequentially(salary.toString(), { delay: 350 });
  console.log("New salary:", salary);

  console.log("Saving...");
  await Promise.all([
    page.route("**/users/self/fullprofiles", (route, request) => {
      let postData = request.postDataJSON();

      postData.profile = { ...postData.profile, absoluteCtc: salary.toString() };
      postData.profileAdditional = { ...postData.profileAdditional, fixedCtc: salary.toString() };

      route.continue({ postData: JSON.stringify(postData) });
    }),
    page.evaluate(() => {
      return document.getElementById("saveBasicDetailsBtn").click();
    }),
  ]);
}

module.exports = { login, changeSalary };
