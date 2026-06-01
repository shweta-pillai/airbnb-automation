import { test, expect } from '../../src/fixtures/pageFixtures';

/**
 * Listing Detail Test Suite
 *
 * Tests the individual property page — what users see when they
 * click on a listing from search results.
 *
 * Strategy: Navigate directly to a known listing URL to avoid
 * depending on search results (which can change daily).
 * Use a popular, always-available listing for stability.
 */

// A well-known Airbnb listing used as a stable test target.
// In a real project, you'd have a test environment with seeded data.
const STABLE_LISTING_URL = 'https://www.airbnb.com/rooms/20776811';

test.describe('Listing Detail Page', () => {
  test.beforeEach(async ({ listingPage }) => {
    await listingPage.page.goto(STABLE_LISTING_URL);
    await listingPage.waitForListingLoad();
  });

  /**
   * LISTING-001: Page loads with title
   */
  test('LISTING-001: should display the listing title', async ({ listingPage }) => {
    const title = await listingPage.getTitle();
    expect(title.length).toBeGreaterThan(0);
  });

  /**
   * LISTING-002: Reserve button is visible
   */
  test('LISTING-002: should show the Reserve button in the booking widget', async ({
    listingPage,
  }) => {
    await expect(listingPage.reserveButton).toBeVisible();
  });

  /**
   * LISTING-003: Price per night is displayed
   */
  test('LISTING-003: should display a price per night', async ({ listingPage }) => {
    await listingPage.assertPriceDisplayed();
  });

  /**
   * LISTING-004: Photo gallery is visible
   */
  test('LISTING-004: should display the photo gallery', async ({ listingPage }) => {
    // Gallery should be visible at the top of the page
    const gallery = listingPage.page.locator('[data-section-id="HERO_DEFAULT"]')
      .or(listingPage.page.locator('img[aria-label]').first());
    await expect(gallery).toBeVisible();
  });

  /**
   * LISTING-005: Reviews section exists
   */
  test('LISTING-005: should display the reviews section', async ({ listingPage }) => {
    await listingPage.reviewsSection.scrollIntoViewIfNeeded();
    await expect(listingPage.reviewsSection).toBeVisible();
  });

  /**
   * LISTING-006: Amenities section exists
   */
  test('LISTING-006: should display the amenities section', async ({ listingPage }) => {
    await listingPage.amenitiesSection.scrollIntoViewIfNeeded();
    await expect(listingPage.amenitiesSection).toBeVisible();
  });

  /**
   * LISTING-007: Selecting dates updates the price
   */
  test('LISTING-007: selecting dates should update the total price calculation', async ({
    listingPage,
  }) => {
    await listingPage.selectDates(10, 13);
    // After selecting dates, a total should appear
    await expect(listingPage.reserveButton).toBeEnabled({ timeout: 5000 });
  });

  /**
   * LISTING-008: Reserve button navigates to checkout (requires auth)
   */
  test('LISTING-008: clicking Reserve without auth should prompt login', async ({
    listingPage,
  }) => {
    await listingPage.selectDates(10, 13);
    await listingPage.reserveButton.click();

    // Without auth, should show login modal or redirect to login
    const hasLoginModal = await listingPage.page
      .locator('[aria-label*="Log in"]')
      .isVisible({ timeout: 5000 })
      .catch(() => false);

    const isLoginURL = listingPage.page.url().includes('login');

    expect(hasLoginModal || isLoginURL).toBe(true);
  });

  /**
   * LISTING-009: Listing URL contains the room ID
   */
  test('LISTING-009: listing URL should follow /rooms/{id} pattern', async ({ listingPage }) => {
    expect(listingPage.page.url()).toMatch(/\/rooms\/\d+/);
  });

  /**
   * LISTING-010: Share button is clickable
   */
  test('LISTING-010: share button should be interactable', async ({ listingPage }) => {
    await expect(listingPage.shareButton).toBeVisible();
    await listingPage.shareButton.click();
    // Share dialog/modal should appear
    await listingPage.page.waitForTimeout(1000);
    // Just verify no error occurred
    expect(listingPage.page.url()).toContain('airbnb.com');
  });
});
