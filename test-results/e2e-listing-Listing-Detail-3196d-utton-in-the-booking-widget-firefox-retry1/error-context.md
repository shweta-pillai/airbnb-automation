# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\listing.spec.ts >> Listing Detail Page >> LISTING-002: should show the Reserve button in the booking widget
- Location: tests\e2e\listing.spec.ts:35:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('button', { name: /reserve/i })
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByRole('button', { name: /reserve/i })

```

```yaml
- link "Skip to content":
  - /url: "#site-content"
- alert
- banner:
  - link " Airbnb":
    - /url: /
- heading "Oops!" [level=1]
- heading "We can't seem to find the page you're looking for." [level=2]
- 'heading "Error code: 404" [level=3]'
- list:
  - listitem: "Here are some helpful links instead:"
  - listitem:
    - link "Home":
      - /url: /
  - listitem:
    - link "Search":
      - /url: /search
  - listitem:
    - link "Help":
      - /url: /help
  - listitem:
    - link "Travelling on Airbnb":
      - /url: /help/getting-started/how-to-travel
  - listitem:
    - link "Hosting on Airbnb":
      - /url: /info/why_host
  - listitem:
    - link "Trust & Safety":
      - /url: /trust
  - listitem:
    - link "Sitemap":
      - /url: /sitemaps
- img "Girl has dropped her ice cream."
```

# Test source

```ts
  1   | import { test, expect } from '../../src/fixtures/pageFixtures';
  2   | 
  3   | /**
  4   |  * Listing Detail Test Suite
  5   |  *
  6   |  * Tests the individual property page — what users see when they
  7   |  * click on a listing from search results.
  8   |  *
  9   |  * Strategy: Navigate directly to a known listing URL to avoid
  10  |  * depending on search results (which can change daily).
  11  |  * Use a popular, always-available listing for stability.
  12  |  */
  13  | 
  14  | // A well-known Airbnb listing used as a stable test target.
  15  | // In a real project, you'd have a test environment with seeded data.
  16  | const STABLE_LISTING_URL = 'https://www.airbnb.com/rooms/20776811';
  17  | 
  18  | test.describe('Listing Detail Page', () => {
  19  |   test.beforeEach(async ({ listingPage }) => {
  20  |     await listingPage.page.goto(STABLE_LISTING_URL);
  21  |     await listingPage.waitForListingLoad();
  22  |   });
  23  | 
  24  |   /**
  25  |    * LISTING-001: Page loads with title
  26  |    */
  27  |   test('LISTING-001: should display the listing title', async ({ listingPage }) => {
  28  |     const title = await listingPage.getTitle();
  29  |     expect(title.length).toBeGreaterThan(0);
  30  |   });
  31  | 
  32  |   /**
  33  |    * LISTING-002: Reserve button is visible
  34  |    */
  35  |   test('LISTING-002: should show the Reserve button in the booking widget', async ({
  36  |     listingPage,
  37  |   }) => {
> 38  |     await expect(listingPage.reserveButton).toBeVisible();
      |                                             ^ Error: expect(locator).toBeVisible() failed
  39  |   });
  40  | 
  41  |   /**
  42  |    * LISTING-003: Price per night is displayed
  43  |    */
  44  |   test('LISTING-003: should display a price per night', async ({ listingPage }) => {
  45  |     await listingPage.assertPriceDisplayed();
  46  |   });
  47  | 
  48  |   /**
  49  |    * LISTING-004: Photo gallery is visible
  50  |    */
  51  |   test('LISTING-004: should display the photo gallery', async ({ listingPage }) => {
  52  |     // Gallery should be visible at the top of the page
  53  |     const gallery = listingPage.page.locator('[data-section-id="HERO_DEFAULT"]')
  54  |       .or(listingPage.page.locator('img[aria-label]').first());
  55  |     await expect(gallery).toBeVisible();
  56  |   });
  57  | 
  58  |   /**
  59  |    * LISTING-005: Reviews section exists
  60  |    */
  61  |   test('LISTING-005: should display the reviews section', async ({ listingPage }) => {
  62  |     await listingPage.reviewsSection.scrollIntoViewIfNeeded();
  63  |     await expect(listingPage.reviewsSection).toBeVisible();
  64  |   });
  65  | 
  66  |   /**
  67  |    * LISTING-006: Amenities section exists
  68  |    */
  69  |   test('LISTING-006: should display the amenities section', async ({ listingPage }) => {
  70  |     await listingPage.amenitiesSection.scrollIntoViewIfNeeded();
  71  |     await expect(listingPage.amenitiesSection).toBeVisible();
  72  |   });
  73  | 
  74  |   /**
  75  |    * LISTING-007: Selecting dates updates the price
  76  |    */
  77  |   test('LISTING-007: selecting dates should update the total price calculation', async ({
  78  |     listingPage,
  79  |   }) => {
  80  |     await listingPage.selectDates(10, 13);
  81  |     // After selecting dates, a total should appear
  82  |     await expect(listingPage.reserveButton).toBeEnabled({ timeout: 5000 });
  83  |   });
  84  | 
  85  |   /**
  86  |    * LISTING-008: Reserve button navigates to checkout (requires auth)
  87  |    */
  88  |   test('LISTING-008: clicking Reserve without auth should prompt login', async ({
  89  |     listingPage,
  90  |   }) => {
  91  |     await listingPage.selectDates(10, 13);
  92  |     await listingPage.reserveButton.click();
  93  | 
  94  |     // Without auth, should show login modal or redirect to login
  95  |     const hasLoginModal = await listingPage.page
  96  |       .locator('[aria-label*="Log in"]')
  97  |       .isVisible({ timeout: 5000 })
  98  |       .catch(() => false);
  99  | 
  100 |     const isLoginURL = listingPage.page.url().includes('login');
  101 | 
  102 |     expect(hasLoginModal || isLoginURL).toBe(true);
  103 |   });
  104 | 
  105 |   /**
  106 |    * LISTING-009: Listing URL contains the room ID
  107 |    */
  108 |   test('LISTING-009: listing URL should follow /rooms/{id} pattern', async ({ listingPage }) => {
  109 |     expect(listingPage.page.url()).toMatch(/\/rooms\/\d+/);
  110 |   });
  111 | 
  112 |   /**
  113 |    * LISTING-010: Share button is clickable
  114 |    */
  115 |   test('LISTING-010: share button should be interactable', async ({ listingPage }) => {
  116 |     await expect(listingPage.shareButton).toBeVisible();
  117 |     await listingPage.shareButton.click();
  118 |     // Share dialog/modal should appear
  119 |     await listingPage.page.waitForTimeout(1000);
  120 |     // Just verify no error occurred
  121 |     expect(listingPage.page.url()).toContain('airbnb.com');
  122 |   });
  123 | });
  124 | 
```