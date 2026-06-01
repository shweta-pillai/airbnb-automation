import { test, expect } from '../../src/fixtures/pageFixtures';

/**
 * Homepage Test Suite
 *
 * Validates the landing page loads correctly and all key
 * interactive elements are present and functional.
 */
test.describe('Homepage', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.goto();
  });

  /**
   * HOME-001: Page loads with correct title
   */
  test('HOME-001: should load with Airbnb branding in title', async ({ homePage }) => {
    await homePage.assertPageLoaded();
    await homePage.assertTitle('Airbnb');
  });

  /**
   * HOME-002: Search bar is present
   */
  test('HOME-002: search bar should be visible on load', async ({ homePage }) => {
    await expect(homePage.destinationInput).toBeVisible();
  });

  /**
   * HOME-003: Destination input is interactive
   */
  test('HOME-003: destination input should accept text', async ({ homePage }) => {
    await homePage.destinationInput.click();
    await homePage.destinationInput.fill('Paris');
    await expect(homePage.destinationInput).toHaveValue('Paris');
  });

  /**
   * HOME-004: Navigation shows Log in and Sign up
   */
  test('HOME-004: navigation should show authentication options', async ({ page }) => {
    const hasLogIn = await page.getByRole('link', { name: /log in/i }).isVisible().catch(() => false);
    const hasSignUp = await page.getByRole('link', { name: /sign up/i }).isVisible().catch(() => false);
    const hasUserMenu = await page.locator('[data-testid="cypress-headernav-profile"]').isVisible().catch(() => false);

    // Either individual links or the user menu button should be present
    expect(hasLogIn || hasSignUp || hasUserMenu).toBe(true);
  });

  /**
   * HOME-005: Listing cards are shown on homepage
   */
  test('HOME-005: should display listing cards on the homepage', async ({ homePage }) => {
    const count = await homePage.getListingCount();
    expect(count).toBeGreaterThan(0);
  });

  /**
   * HOME-006: "Become a Host" link is present
   */
  test('HOME-006: should display Become a Host link', async ({ homePage }) => {
    await expect(homePage.becomeHostLink).toBeVisible();
  });

  /**
   * HOME-007: Page is responsive — mobile viewport
   */
  test('HOME-007: homepage should be responsive on mobile viewports', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 }); // iPhone 14 size
    await page.goto('https://www.airbnb.com');
    await page.waitForLoadState('domcontentloaded');

    // Page should have loaded without horizontal overflow
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    expect(bodyWidth).toBeLessThanOrEqual(420); // Slight tolerance
  });

  /**
   * HOME-008: Airbnb logo links back to homepage
   */
  test('HOME-008: clicking the logo should navigate to homepage', async ({ page }) => {
    // First navigate away
    await page.goto('https://www.airbnb.com/s/New-York/homes');
    await page.waitForLoadState('domcontentloaded');

    // Click the logo
    const logo = page.locator('[aria-label="Airbnb homepage"]')
      .or(page.locator('a[href="/"]').first());
    await logo.click();

    await page.waitForLoadState('domcontentloaded');
    expect(page.url()).toMatch(/airbnb\.com\/?$/);
  });
});
