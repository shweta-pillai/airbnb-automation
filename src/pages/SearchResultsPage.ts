import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export interface ListingCard {
  title: string;
  price: string;
  rating: string;
  url: string;
}

/**
 * SearchResultsPage - Represents the listing results after searching.
 *
 * Key features:
 * - Filter panel (price range, rooms, amenities, etc.)
 * - Sort options
 * - Listing cards grid
 * - Map view toggle
 * - Pagination
 */
export class SearchResultsPage extends BasePage {
  // ─── Filter Locators ───────────────────────────────────────────────────
  readonly filtersButton: Locator;
  readonly priceRangeFilter: Locator;
  readonly bedroomsFilter: Locator;
  readonly amenitiesFilter: Locator;
  readonly instantBookFilter: Locator;
  readonly applyFiltersButton: Locator;
  readonly clearFiltersButton: Locator;

  // ─── Sort Locators ─────────────────────────────────────────────────────
  readonly sortButton: Locator;

  // ─── Listings Locators ─────────────────────────────────────────────────
  readonly listingCards: Locator;
  readonly listingTitles: Locator;
  readonly listingPrices: Locator;
  readonly listingRatings: Locator;
  readonly resultsCount: Locator;

  // ─── Map Locators ──────────────────────────────────────────────────────
  readonly mapToggleButton: Locator;
  readonly mapContainer: Locator;

  // ─── Pagination ────────────────────────────────────────────────────────
  readonly nextPageButton: Locator;
  readonly prevPageButton: Locator;

  constructor(page: Page) {
    super(page);

    this.filtersButton = page.locator('[data-testid="category-bar-filter-button"]')
      .or(page.getByRole('button', { name: /filters/i }));

    this.priceRangeFilter = page.locator('[data-testid="price-filter"]');
    this.bedroomsFilter = page.locator('[data-testid="rooms-and-beds-filter"]');
    this.amenitiesFilter = page.locator('[data-testid="amenities-filter"]');
    this.instantBookFilter = page.locator('[data-testid="instant-book-filter"]');
    this.applyFiltersButton = page.locator('[data-testid="apply-filters-button"]');
    this.clearFiltersButton = page.locator('[data-testid="clear-all-filter-button"]');

    this.sortButton = page.locator('[data-testid="sort-button"]');

    this.listingCards = page.locator('[data-testid="card-container"]')
      .or(page.locator('[itemprop="itemListElement"]'));
    this.listingTitles = page.locator('[data-testid="listing-card-title"]');
    this.listingPrices = page.locator('[data-testid="price-availability-row"]');
    this.listingRatings = page.locator('[aria-label*="out of 5 stars"]');
    this.resultsCount = page.locator('[data-testid="stays-page-heading"]');

    this.mapToggleButton = page.locator('[data-testid="show-map"]')
      .or(page.getByRole('button', { name: /show map/i }));
    this.mapContainer = page.locator('[data-testid="map-container"]');

    this.nextPageButton = page.getByRole('button', { name: /next/i });
    this.prevPageButton = page.getByRole('button', { name: /previous/i });
  }

  /**
   * Wait until search results have loaded.
   * We know results are ready when listing cards appear.
   */
  async waitForResults(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
    await this.listingCards.first().waitFor({ state: 'visible', timeout: 15_000 });
  }

  /**
   * Open the filters modal.
   */
  async openFilters(): Promise<void> {
    await this.filtersButton.click();
    await this.page.waitForTimeout(500);
  }

  /**
   * Apply instant book filter.
   */
  async filterByInstantBook(): Promise<void> {
    await this.openFilters();
    const instantBookToggle = this.page
      .locator('[data-testid="instant-book-filter"]')
      .or(this.page.getByLabel(/instant book/i));
    await instantBookToggle.click();
    await this.applyFiltersButton.click();
    await this.waitForResults();
  }

  /**
   * Get all listing data from the current results page.
   */
  async getListings(): Promise<ListingCard[]> {
    await this.waitForResults();
    const cards = await this.listingCards.all();
    const listings: ListingCard[] = [];

    for (const card of cards) {
      const title = await card.locator('[data-testid="listing-card-title"]')
        .textContent().catch(() => 'N/A') ?? 'N/A';

      const price = await card.locator('[data-testid="price-availability-row"]')
        .textContent().catch(() => 'N/A') ?? 'N/A';

      const ratingEl = card.locator('[aria-label*="out of 5 stars"]');
      const rating = await ratingEl.getAttribute('aria-label').catch(() => 'N/A') ?? 'N/A';

      const linkEl = card.locator('a').first();
      const href = await linkEl.getAttribute('href').catch(() => '') ?? '';
      const url = href.startsWith('http') ? href : `https://www.airbnb.com${href}`;

      listings.push({ title: title.trim(), price: price.trim(), rating, url });
    }

    return listings;
  }

  /**
   * Click on a specific listing by its index (0-based).
   */
  async clickListing(index = 0): Promise<void> {
    const card = this.listingCards.nth(index);
    await card.click();
    // Wait for navigation to the listing detail page
    await this.page.waitForLoadState('domcontentloaded');
  }

  /**
   * Toggle the map view on or off.
   */
  async toggleMap(): Promise<void> {
    await this.mapToggleButton.click();
    await this.page.waitForTimeout(1000);
  }

  /**
   * Assert that results are visible and the count is greater than 0.
   */
  async assertResultsDisplayed(): Promise<void> {
    await expect(this.listingCards.first()).toBeVisible();
    const count = await this.listingCards.count();
    expect(count).toBeGreaterThan(0);
  }

  /**
   * Assert the number of visible listings meets a minimum.
   */
  async assertMinListings(min: number): Promise<void> {
    const count = await this.listingCards.count();
    expect(count).toBeGreaterThanOrEqual(min);
  }

  /**
   * Assert the URL contains search parameters.
   */
  async assertSearchURLContains(location: string): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(encodeURIComponent(location), 'i'));
  }
}
