const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Set path to the file
  const filePath = 'file://' + process.cwd() + '/main/scrool/dex.html';

  const viewports = [
    { width: 375, height: 667, name: 'mobile' },
    { width: 768, height: 1024, name: 'tablet' },
    { width: 1280, height: 800, name: 'desktop' }
  ];

  for (const vp of viewports) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.goto(filePath);
    await page.waitForTimeout(1000); // Wait for animations
    await page.screenshot({ path: `screenshot_${vp.name}.png` });
    console.log(`Captured ${vp.name} screenshot`);
  }

  await browser.close();
})();
