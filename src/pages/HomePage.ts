import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * HomePage - Represents Airbnb's landing page.
 *
 * This page contains:
 * - The main search bar (destination, dates, guests)
 * - Navigation (Become a Host, Log in, Sign up)
 * - Category filters (Trending, Mansions, Beach, etc.)
 * - Featured listings grid
 */
export class HomePage extends BasePage {
  // ─── Search Bar Locators ───────────────────────────────────────────────
  readonly searchBar: Locator;
  readonly destinationInput: Locator;
  readonly checkInButton: Locator;
  readonly checkOutButton: Locator;
  readonly guestsButton: Locator;
  readonly searchSubmitButton: Locator;

  // ─── Guest Picker Locators ─────────────────────────────────────────────
  readonly adultsIncreaseBtn: Locator;
  readonly adultsDecreaseBtn: Locator;
  readonly childrenIncreaseBtn: Locator;
  readonly childrenDecreaseBtn: Locator;
  readonly infantsIncreaseBtn: Locator;
  readonly adultsCount: Locator;
  readonly childrenCount: Locator;

  // ─── Navigation Locators ───────────────────────────────────────────────
  readonly loginButton: Locator;
  readonly signupButton: Locator;
  readonly becomeHostLink: Locator;
  readonly userMenuButton: Locator;

  // ─── Category & Listings Locators ─────────────────────────────────────
  readonly categoryFilters: Locator;
  readonly listingCards: Locator;
  readonly showMapButton: Locator;

  constructor(page: Page) {
    super(page);

    // Search bar - Airbnb uses a prominent bar with multiple sections
    this.searchBar = page.locator('[data-testid="structured-search-input-field-query"]').or(
      page.locator('form[id="search-tabpanel"]').first()
    );

    this.destinationInput = page
      .getByPlaceholder('Search destinations')
      .or(page.locator('[data-testid="structured-search-input-field-query"]'));

    this.checkInButton = page
      .locator('[data-testid="structured-search-input-field-checkin-btn"]')
      .or(page.getByText('Check in').first());

    this.checkOutButton = page
      .locator('[data-testid="structured-search-input-field-checkout-btn"]')
      .or(page.getByText('Check out').first());

    this.guestsButton = page
      .locator('[data-testid="structured-search-input-field-guests-btn"]')
      .or(page.getByText('Guests').first());

    this.searchSubmitButton = page.locator('[data-testid="structured-search-input-search-button"]');

    // Guest picker stepper buttons
    this.adultsIncreaseBtn = page
      .locator('[data-testid="stepper-adults-increase-button"]');
    this.adultsDecreaseBtn = page
      .locator('[data-testid="stepper-adults-decrease-button"]');
    this.childrenIncreaseBtn = page
      .locator('[data-testid="stepper-children-increase-button"]');
    this.childrenDecreaseBtn = page
      .locator('[data-testid="stepper-children-decrease-button"]');
    this.infantsIncreaseBtn = page
      .locator('[data-testid="stepper-infants-increase-button"]');

    this.adultsCount = page.locator('[data-testid="stepper-adults-value"]');
    this.childrenCount = page.locator('[data-testid="stepper-children-value"]');

    // Navigation
    this.loginButton = page.getByRole('link', { name: 'Log in' });
    this.signupButton = page.getByRole('link', { name: 'Sign up' });
    this.becomeHostLink = page.getByRole('link', { name: /become a host/i });
    this.userMenuButton = page.locator('[data-testid="cypress-headernav-profile"]');

    // Listings
    this.categoryFilters = page.locator('[data-testid="category-bar-filter-item"]');
    this.listingCards = page.locator('[data-testid="card-container"]');
    this.showMapButton = page.locator('[data-testid="show-map"]');
  }

  /**
   * Go to Airbnb homepage
   */
  async goto(): Promise<void> {
    await this.navigate('/');
    await this.dismissModals();
  }

  /**
   * Enter a destination in the search bar.
   * Airbnb shows autocomplete suggestions — this method picks the first result.
   */
  async enterDestination(destination: string): Promise<void> {
    await this.destinationInput.click();
    await this.destinationInput.fill(destination);
    // Wait for autocomplete dropdown
    await this.page.waitForTimeout(1000);

    // Pick the first suggestion from the dropdown
    const firstSuggestion = this.page
      .locator('[data-testid="option"]')
      .or(this.page.locator('[role="option"]'))
      .first();

    if (await firstSuggestion.isVisible({ timeout: 3000 }).catch(() => false)) {
      await firstSuggestion.click();
    }
  }

  /**
   * Select a check-in date by clicking on the calendar.
   * @param daysFromNow - Number of days in the future for check-in
   */
  async selectCheckInDate(daysFromNow = 7): Promise<void> {
    await this.checkInButton.click();

    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + daysFromNow);

    const day = targetDate.getDate().toString();
    const month = targetDate.toLocaleString('en-US', { month: 'long' });
    const year = targetDate.getFullYear();

    // Find the calendar cell for the target date
    await this.page
      .locator(`[aria-label*="${month} ${day}, ${year}"]`)
      .first()
      .click();
  }

  /**
   * Select a check-out date.
   * @param daysFromNow - Number of days in the future for check-out
   */
  async selectCheckOutDate(daysFromNow = 10): Promise<void> {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + daysFromNow);

    const day = targetDate.getDate().toString();
    const month = targetDate.toLocaleString('en-US', { month: 'long' });
    const year = targetDate.getFullYear();

    await this.page
      .locator(`[aria-label*="${month} ${day}, ${year}"]`)
      .first()
      .click();
  }

  /**
   * Open the guests picker and set guest counts.
   */
  async setGuests(adults: number, children = 0, infants = 0): Promise<void> {
    await this.guestsButton.click();
    await this.page.waitForTimeout(500);

    // Set adults (default is 1, so we increment by adults - 1)
    for (let i = 0; i < adults - 1; i++) {
      await this.adultsIncreaseBtn.click();
    }

    // Set children
    for (let i = 0; i < children; i++) {
      await this.childrenIncreaseBtn.click();
    }

    // Set infants
    for (let i = 0; i < infants; i++) {
      await this.infantsIncreaseBtn.click();
    }
  }

  /**
   * Perform a complete search with all parameters.
   */
  async performSearch(params: {
    destination: string;
    checkInDaysFromNow?: number;
    checkOutDaysFromNow?: number;
    adults?: number;
    children?: number;
    infants?: number;
  }): Promise<void> {
    const {
      destination,
      checkInDaysFromNow = 7,
      checkOutDaysFromNow = 10,
      adults = 2,
      children = 0,
      infants = 0,
    } = params;

    await this.enterDestination(destination);
    await this.selectCheckInDate(checkInDaysFromNow);
    await this.selectCheckOutDate(checkOutDaysFromNow);
    await this.setGuests(adults, children, infants);
    await this.searchSubmitButton.click();
  }

  /**
   * Get all listing cards currently visible on the page.
   */
  async getListingCount(): Promise<number> {
    await this.waitForElement(this.listingCards.first());
    return this.listingCards.count();
  }

  /**
   * Click a specific category filter.
   * @param categoryName - e.g., 'Trending', 'Beach', 'Mansions'
   */
  async clickCategoryFilter(categoryName: string): Promise<void> {
    const filter = this.categoryFilters.filter({ hasText: categoryName }).first();
    await filter.click();
    await this.waitForPageLoad();
  }

  /**
   * Assert the homepage has fully loaded.
   */
  async assertPageLoaded(): Promise<void> {
    await expect(this.page).toHaveTitle(/Airbnb/i);
    await expect(this.destinationInput).toBeVisible();
  }
}
