module.exports = {
  email: process.env.NAUKRI_EMAIL,
  password: process.env.NAUKRI_PASSWORD,
  FN_TIMEOUT: process.env.FN_TIMEOUT ?? 2 * 60 * 1000,
  PAGE_TIMEOUT: process.env.PAGE_TIMEOUT ?? 20 * 1000,
  BROWSER: process.env.BROWSER ?? "firefox",
};
