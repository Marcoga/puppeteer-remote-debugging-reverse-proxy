const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
	  args: [ 
      ...puppeteer.defaultArgs(),
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--remote-debugging-port=9222',
      '--remote-debugging-address=0.0.0.0'
      ]
  });
  const page = await browser.newPage();
  await page.goto('https://www.google.com');
  console.log("Up and running");
})();