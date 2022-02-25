import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  reporter: 'html', 
  use: {
    trace: 'on',
    screenshot: 'only-on-failure'
  },
  reportSlowTests: { max: 6, threshold: 2 * 1000 },
  projects: [
    { name: 'Chromium', use: { browserName: 'chromium' } },
    { name: 'Firefox', use: { browserName: 'firefox' } },
    { name: 'Webkit', use: { browserName: 'webkit', headless: false } }
  ]
};

export default config;
