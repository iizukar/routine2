const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.goto('http://www-microsoft.iceiy.com/', { waitUntil: 'networkidle2', timeout: 60000 });
  console.log('Visited http://www-microsoft.iceiy.com/ and keeping browser open.');
  // Keep the browser and page open indefinitely
  await new Promise(() => {});
})();
