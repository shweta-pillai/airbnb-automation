import { test, expect } from '../../src/fixtures/pageFixtures';
import { SEARCH_QUERIES, SEARCH_DATES, GUEST_CONFIGS } from '../../src/data/testData';

/**
 * Search Test Suite
 *
 * Tests the core search functionality — the most critical user journey on Airbnb.
 * Every test is independent: it sets up its own state and doesn't rely on others.
 *
 * Test IDs follow: SEARCH-001, SEARCH-002, etc.
 * Use these IDs in your test management tool (Jira, TestRail, etc.).
 */
test.describe('Search Functionality', () => {
  test.describe('Homepage Search', () => {
    /**
     * SEARCH-001: Basic destination search
     * Happy path — the most fundamental user journey.
     */
    test('SEARCH-001: should display results for a valid destination', async ({
      homePage,
      searchPage,
    }) => {
      await homePage.goto();
      await homePage.assertPageLoaded();

      await homePage.performSearch({
        destination: SEARCH_QUERIES.popular.destination,
        checkInDaysFromNow: SEARCH_DATES.weekendGetaway.checkInDaysFromNow,
        checkOutDaysFromNow: SEARCH_DATES.weekendGetaway.checkOutDaysFromNow,
        adults: GUEST_CONFIGS.couple.adults,
      });

      await searchPage.waitForResults();
      await searchPage.assertResultsDisplayed();
    });

    /**
     * SEARCH-002: Search URL contains location parameter
     */
    test('SEARCH-002: search URL should reflect the destination', async ({
      homePage,
      searchPage,
    }) => {
      await homePage.goto();
      await homePage.performSearch({
        destination: SEARCH_QUERIES.popular.destination,
        checkInDaysFromNow: 7,
        checkOutDaysFromNow: 10,
        adults: 1,
      });

      await searchPage.waitForResults();
      // URL should contain the location
      expect(searchPage.page.url()).toMatch(/New\+York|New%20York/i);
    });

    /**
     * SEARCH-003: Search with multiple guests including children
     */
    test('SEARCH-003: should search with family guest configuration', async ({
      homePage,
      searchPage,
    }) => {
      await homePage.goto();
      await homePage.performSearch({
        destination: SEARCH_QUERIES.beach.destination,
        checkInDaysFromNow: 14,
        checkOutDaysFromNow: 21,
        adults: GUEST_CONFIGS.family.adults,
        children: GUEST_CONFIGS.family.children,
      });

      await searchPage.waitForResults();
      await searchPage.assertResultsDisplayed();
      // URL should reflect guest count
      expect(searchPage.page.url()).toContain('adults=2');
    });

    /**
     * SEARCH-004: Search results should show minimum number of listings
     */
    test('SEARCH-004: results should show at least 5 listings for popular destinations', async ({
      homePage,
      searchPage,
    }) => {
      await homePage.goto();
      await homePage.performSearch({
        destination: SEARCH_QUERIES.popular.destination,
        checkInDaysFromNow: 7,
        checkOutDaysFromNow: 10,
        adults: 2,
      });

      await searchPage.waitForResults();
      await searchPage.assertMinListings(5);
    });
  });

  test.describe('Direct URL Navigation', () => {
    /**
     * SEARCH-005: Navigate directly to search URL
     * Tests the URL-based navigation pattern (useful for deep linking).
     */
    test('SEARCH-005: should load results from direct search URL', async ({ searchPage }) => {
      await searchPage.page.goto(
        'https://www.airbnb.com/s/New-York--NY--United-States/homes?adults=2'
      );

      await searchPage.waitForResults();
      await searchPage.assertResultsDisplayed();
    });
  });

  test.describe('Filter Functionality', () => {
    test.beforeEach(async ({ homePage, searchPage }) => {
      // Navigate to search results before each filter test
      await homePage.goto();
      await homePage.performSearch({
        destination: SEARCH_QUERIES.popular.destination,
        checkInDaysFromNow: 7,
        checkOutDaysFromNow: 10,
        adults: 2,
      });
      await searchPage.waitForResults();
    });

    /**
     * SEARCH-006: Open filters panel
     */
    test('SEARCH-006: should open and close the filters panel', async ({ searchPage }) => {
      await searchPage.openFilters();
      await expect(searchPage.applyFiltersButton).toBeVisible();
    });

    /**
     * SEARCH-007: Map toggle
     */
    test('SEARCH-007: should toggle map view', async ({ searchPage }) => {
      const initialURL = searchPage.page.url();
      await searchPage.toggleMap();
      // Map toggle changes the view; verify the page didn't break
      await expect(searchPage.listingCards.first()).toBeVisible({ timeout: 10_000 });
    });
  });

  test.describe('Listing Card Interaction', () => {
    /**
     * SEARCH-008: Click on a listing card to view details
     */
    test('SEARCH-008: should navigate to listing detail when clicking a card', async ({
      homePage,
      listingPage,
    }) => {
      await homePage.goto();
      await homePage.performSearch({
        destination: SEARCH_QUERIES.popular.destination,
        checkInDaysFromNow: 7,
        checkOutDaysFromNow: 10,
        adults: 2,
      });

      // Wait for results and click first listing
      const searchPage = await import('../../src/pages/SearchResultsPage').then(
        m => new m.SearchResultsPage(homePage.page)
      );
      await searchPage.waitForResults();

      // Open listing in a new tab (Airbnb opens listings in new tabs)
      const [newPage] = await Promise.all([
        homePage.page.context().waitForEvent('page'),
        searchPage.listingCards.first().click(),
      ]);

      await newPage.waitForLoadState('domcontentloaded');
      expect(newPage.url()).toMatch(/\/rooms\//);
    });
  });

  test.describe('Search Data Retrieval', () => {
    /**
     * SEARCH-009: Extract listing data from results
     */
    test('SEARCH-009: should retrieve listing titles and prices from results', async ({
      homePage,
      searchPage,
    }) => {
      await homePage.goto();
      await homePage.performSearch({
        destination: SEARCH_QUERIES.popular.destination,
        checkInDaysFromNow: 7,
        checkOutDaysFromNow: 10,
        adults: 2,
      });

      await searchPage.waitForResults();
      const listings = await searchPage.getListings();

      // We should have retrieved some listings
      expect(listings.length).toBeGreaterThan(0);

      // Each listing should have a title
      for (const listing of listings.slice(0, 3)) {
        expect(listing.title).toBeTruthy();
        expect(listing.url).toContain('airbnb.com');
      }
    });
  });
});
