module.exports = {
  email: process.env.NAUKRI_EMAIL,
  password: process.env.NAUKRI_PASSWORD,
  TIMEOUT: process.env.TIMEOUT ?? 2 * 60 * 1000,
};
