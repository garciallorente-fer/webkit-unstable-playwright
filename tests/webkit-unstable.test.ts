import { test } from '@playwright/test';
import { readFileSync } from 'fs';

test('Wbkit unstable elements out of viewport', async ({ page }) => {

  await page.setContent(readFileSync('./webkit-unstable.html', 'utf8'));
  await page.addStyleTag({ path: './webkit-unstable.css' });

  await page.locator('input[type=text][id=SalePrice]').fill('12345');

  await page.locator('input[type=radio][id=CheckboxYes1] ~ span').setChecked(true);

  await page.locator('input[type=radio][id=CheckboxYes2] ~ span').setChecked(true);

  await page.locator('input[type=radio][id=CheckboxYes3] ~ span').setChecked(true);

  await page.locator('input[type=radio][id=CheckboxYes4] ~ span').setChecked(true);
});
