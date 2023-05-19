import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	// playwright utilizes a firfox headless browser to test if the element is visible.
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Business Page Heading' })).toBeVisible();
});

test('index page should have welcome paragraph', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('paragraph')).toBeVisible();
});

test('Main button click works', async ({ page }) => {
	await page.goto('/');
	await page.locator('#test-id').click();
	await page.waitForURL(/\/(about)/gi);

	expect(page.url()).toContain('about');
});
