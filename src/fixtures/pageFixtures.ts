import { test as base, Page } from '@playwright/test';
import {
  HomePage,
  SearchResultsPage,
  ListingDetailPage,
  LoginPage,
  CheckoutPage,
  WishlistPage,
} from '../pages';

/**
 * Custom Fixtures - Extend Playwright's base test with pre-instantiated Page Objects.
 *
 * WHY FIXTURES?
 * Instead of creating `new HomePage(page)` in every single test, fixtures
 * inject them automatically. This is the professional way to share state
 * across tests and reduces boilerplate dramatically.
 *
 * Usage in tests:
 *   test('my test', async ({ homePage, searchPage }) => {
 *     await homePage.goto();
 *     await homePage.performSearch({ destination: 'Paris' });
 *     await searchPage.assertResultsDisplayed();
 *   });
 */

// Define the types for our custom fixtures
type AirbnbFixtures = {
  homePage: HomePage;
  searchPage: SearchResultsPage;
  listingPage: ListingDetailPage;
  loginPage: LoginPage;
  checkoutPage: CheckoutPage;
  wishlistPage: WishlistPage;
  authenticatedPage: Page; // A page that's already logged in
};

// Extend base test with all our Page Object fixtures
export const test = base.extend<AirbnbFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },

  searchPage: async ({ page }, use) => {
    const searchPage = new SearchResultsPage(page);
    await use(searchPage);
  },

  listingPage: async ({ page }, use) => {
    const listingPage = new ListingDetailPage(page);
    await use(listingPage);
  },

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  checkoutPage: async ({ page }, use) => {
    const checkoutPage = new CheckoutPage(page);
    await use(checkoutPage);
  },

  wishlistPage: async ({ page }, use) => {
    const wishlistPage = new WishlistPage(page);
    await use(wishlistPage);
  },

  // Authenticated page fixture — uses stored auth state
  // Run `npx playwright test tests/auth.setup.ts` first to generate this
  authenticatedPage: async ({ browser }, use) => {
    const context = await browser.newContext({
      storageState: 'playwright/.auth/user.json',
    });
    const page = await context.newPage();
    await use(page);
    await context.close();
  },
});

// Re-export expect so tests only import from this file
export { expect } from '@playwright/test';
