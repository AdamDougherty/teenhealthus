const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    reducedMotion: 'reduce',
  });
  const page = await ctx.newPage();
  await page.goto('http://localhost:3000/our-work', { waitUntil: 'networkidle', timeout: 15000 });
  await page.waitForTimeout(2000);

  // Impact section
  await page.evaluate(() => window.scrollTo(0, 750));
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'our-work-s1.png' });

  // Data section (homelessness columns)
  await page.evaluate(() => window.scrollTo(0, 1500));
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'our-work-s2.png' });

  // Foster care population + outcomes rings
  await page.evaluate(() => window.scrollTo(0, 2300));
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'our-work-s3.png' });

  await browser.close();
  console.log('Done');
})();
