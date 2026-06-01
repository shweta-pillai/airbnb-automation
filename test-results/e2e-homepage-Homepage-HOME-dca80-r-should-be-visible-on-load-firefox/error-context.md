# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\homepage.spec.ts >> Homepage >> HOME-002: search bar should be visible on load
- Location: tests\e2e\homepage.spec.ts:25:7

# Error details

```
Test timeout of 60000ms exceeded while running "beforeEach" hook.
```

# Test source

```ts
  1  | import { test, expect } from '../../src/fixtures/pageFixtures';
  2  | 
  3  | /**
  4  |  * Homepage Test Suite
  5  |  *
  6  |  * Validates the landing page loads correctly and all key
  7  |  * interactive elements are present and functional.
  8  |  */
  9  | test.describe('Homepage', () => {
> 10 |   test.beforeEach(async ({ homePage }) => {
     |        ^ Test timeout of 60000ms exceeded while running "beforeEach" hook.
  11 |     await homePage.goto();
  12 |   });
  13 | 
  14 |   /**
  15 |    * HOME-001: Page loads with correct title
  16 |    */
  17 |   test('HOME-001: should load with Airbnb branding in title', async ({ homePage }) => {
  18 |     await homePage.assertPageLoaded();
  19 |     await homePage.assertTitle('Airbnb');
  20 |   });
  21 | 
  22 |   /**
  23 |    * HOME-002: Search bar is present
  24 |    */
  25 |   test('HOME-002: search bar should be visible on load', async ({ homePage }) => {
  26 |     await expect(homePage.destinationInput).toBeVisible();
  27 |   });
  28 | 
  29 |   /**
  30 |    * HOME-003: Destination input is interactive
  31 |    */
  32 |   test('HOME-003: destination input should accept text', async ({ homePage }) => {
  33 |     await homePage.destinationInput.click();
  34 |     await homePage.destinationInput.fill('Paris');
  35 |     await expect(homePage.destinationInput).toHaveValue('Paris');
  36 |   });
  37 | 
  38 |   /**
  39 |    * HOME-004: Navigation shows Log in and Sign up
  40 |    */
  41 |   test('HOME-004: navigation should show authentication options', async ({ page }) => {
  42 |     const hasLogIn = await page.getByRole('link', { name: /log in/i }).isVisible().catch(() => false);
  43 |     const hasSignUp = await page.getByRole('link', { name: /sign up/i }).isVisible().catch(() => false);
  44 |     const hasUserMenu = await page.locator('[data-testid="cypress-headernav-profile"]').isVisible().catch(() => false);
  45 | 
  46 |     // Either individual links or the user menu button should be present
  47 |     expect(hasLogIn || hasSignUp || hasUserMenu).toBe(true);
  48 |   });
  49 | 
  50 |   /**
  51 |    * HOME-005: Listing cards are shown on homepage
  52 |    */
  53 |   test('HOME-005: should display listing cards on the homepage', async ({ homePage }) => {
  54 |     const count = await homePage.getListingCount();
  55 |     expect(count).toBeGreaterThan(0);
  56 |   });
  57 | 
  58 |   /**
  59 |    * HOME-006: "Become a Host" link is present
  60 |    */
  61 |   test('HOME-006: should display Become a Host link', async ({ homePage }) => {
  62 |     await expect(homePage.becomeHostLink).toBeVisible();
  63 |   });
  64 | 
  65 |   /**
  66 |    * HOME-007: Page is responsive — mobile viewport
  67 |    */
  68 |   test('HOME-007: homepage should be responsive on mobile viewports', async ({ page }) => {
  69 |     await page.setViewportSize({ width: 390, height: 844 }); // iPhone 14 size
  70 |     await page.goto('https://www.airbnb.com');
  71 |     await page.waitForLoadState('domcontentloaded');
  72 | 
  73 |     // Page should have loaded without horizontal overflow
  74 |     const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
  75 |     expect(bodyWidth).toBeLessThanOrEqual(420); // Slight tolerance
  76 |   });
  77 | 
  78 |   /**
  79 |    * HOME-008: Airbnb logo links back to homepage
  80 |    */
  81 |   test('HOME-008: clicking the logo should navigate to homepage', async ({ page }) => {
  82 |     // First navigate away
  83 |     await page.goto('https://www.airbnb.com/s/New-York/homes');
  84 |     await page.waitForLoadState('domcontentloaded');
  85 | 
  86 |     // Click the logo
  87 |     const logo = page.locator('[aria-label="Airbnb homepage"]')
  88 |       .or(page.locator('a[href="/"]').first());
  89 |     await logo.click();
  90 | 
  91 |     await page.waitForLoadState('domcontentloaded');
  92 |     expect(page.url()).toMatch(/airbnb\.com\/?$/);
  93 |   });
  94 | });
  95 | 
```