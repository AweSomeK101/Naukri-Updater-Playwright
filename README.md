# Naukri Profile Updater

[![Playwright](https://img.shields.io/badge/Powered%20by-Playwright-45ba4b.svg)](https://playwright.dev/)

An automated Node.js solution that keeps your Naukri.com profile active by periodically updating your salary details. Built with Playwright, this tool helps maintain profile visibility to recruiters through regular updates.

## 🚀 Features

- **Configurable Settings**: Customize timeouts, browser selection, and other parameters
- **Docker Support**: Run in an isolated container for better reliability
- **Cross-Platform**: Works on Windows, macOS, and Linux
- **Security-Focused**: Secure credential handling through environment variables

## 📋 Prerequisites

- Node.js (v14 or newer)
- npm (comes with Node.js)
- Docker (optional, for containerized execution)

## 🛠️ Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/AweSomeK101/Naukri-Updater-Playwright.git
   cd Naukri-Updater-Playwright
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment**
   Create a `.env` file in the project root:
   ```env
   NAUKRI_EMAIL=your_email@example.com
   NAUKRI_PASSWORD=your_password
   FN_TIMEOUT=120000
   PAGE_TIMEOUT=20000
   BROWSER=firefox
   ```

## ⚙️ Configuration Options

| Variable          | Description                                        | Default | Required |
| ----------------- | -------------------------------------------------- | ------- | -------- |
| `NAUKRI_EMAIL`    | Your Naukri account email                          | -       | Yes      |
| `NAUKRI_PASSWORD` | Your Naukri account password                       | -       | Yes      |
| `FN_TIMEOUT`      | Function timeout (ms)                              | 120000  | No       |
| `PAGE_TIMEOUT`    | Page load timeout (ms)                             | 20000   | No       |
| `BROWSER`         | Browser engine selection (firefox/chromium/webkit) | firefox | No       |

## 📦 Usage

### Local Execution

Run the script directly with Node.js:

```bash
node index.js
```

### Docker Execution

1. **Build the Image**

   ```bash
   docker build -t naukri-updater .
   ```

2. **Run the Container**
   ```bash
   docker run --rm --env-file .env naukri-updater
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🐛 Troubleshooting

Common issues and solutions:

- **Login Failures**: Verify credentials in `.env` file
- **Timeout Errors**: Increase `FN_TIMEOUT` and `PAGE_TIMEOUT` values
- **Browser Issues**: Try switching to a different browser engine

---

**Disclaimer**: This project is not affiliated with or endorsed by Naukri.com. Use responsibly and in accordance with Naukri.com's terms of service.

**Security Note**: Never commit your `.env` file or share your credentials. Always use environment variables for sensitive information.
