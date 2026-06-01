import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * ListingDetailPage - Represents an individual property listing page.
 *
 * Contains:
 * - Photo gallery
 * - Title, rating, host info
 * - Booking widget (price, date picker, guest selector, Reserve button)
 * - Amenities list
 * - Reviews section
 * - Map
 * - House rules
 */
export class ListingDetailPage extends BasePage {
  // ─── Listing Info ──────────────────────────────────────────────────────
  readonly listingTitle: Locator;
  readonly listingRating: Locator;
  readonly listingLocation: Locator;
  readonly hostName: Locator;
  readonly photoGallery: Locator;
  readonly showAllPhotosButton: Locator;

  // ─── Booking Widget ────────────────────────────────────────────────────
  readonly bookingWidget: Locator;
  readonly pricePerNight: Locator;
  readonly checkInDateInput: Locator;
  readonly checkOutDateInput: Locator;
  readonly guestSelector: Locator;
  readonly reserveButton: Locator;
  readonly totalPrice: Locator;
  readonly nightsCount: Locator;
  readonly cleaningFee: Locator;
  readonly serviceFee: Locator;

  // ─── Amenities ─────────────────────────────────────────────────────────
  readonly amenitiesSection: Locator;
  readonly showAllAmenitiesButton: Locator;

  // ─── Reviews ───────────────────────────────────────────────────────────
  readonly reviewsSection: Locator;
  readonly reviewCount: Locator;
  readonly overallRating: Locator;
  readonly reviewCards: Locator;

  // ─── Wishlist ──────────────────────────────────────────────────────────
  readonly saveToWishlistButton: Locator;

  // ─── Share ─────────────────────────────────────────────────────────────
  readonly shareButton: Locator;

  constructor(page: Page) {
    super(page);

    this.listingTitle = page.locator('h1').first()
      .or(page.locator('[data-testid="listing-page-title"]'));

    this.listingRating = page.locator('[data-testid="pdp-reviews-highlight-banner-host-rating"]')
      .or(page.locator('[data-section-id="REVIEWS"] [aria-label*="stars"]').first());

    this.listingLocation = page.locator('[data-testid="listing-card-title"]')
      .or(page.locator('[data-section-id="LOCATION"] h2'));

    this.hostName = page.locator('[data-testid="host-profile-name"]');

    this.photoGallery = page.locator('[data-testid="photo-carousel"]')
      .or(page.locator('[data-section-id="HERO_DEFAULT"]'));

    this.showAllPhotosButton = page.getByRole('button', { name: /show all photos/i });

    // Booking widget
    this.bookingWidget = page.locator('[data-section-id="BOOK_IT_SIDEBAR"]')
      .or(page.locator('[data-testid="book-it-default"]'));

    this.pricePerNight = page.locator('[data-testid="book-it-default"] [data-testid="price-item"]')
      .or(page.locator('._tyxjp1'));

    this.checkInDateInput = page
      .locator('[data-testid="structured-search-input-field-checkin-btn"]')
      .or(page.locator('[placeholder="Add date"]').first());

    this.checkOutDateInput = page
      .locator('[data-testid="structured-search-input-field-checkout-btn"]')
      .or(page.locator('[placeholder="Add date"]').last());

    this.guestSelector = page.locator('[data-testid="GuestPicker-book_it-trigger"]');
    this.reserveButton = page.getByRole('button', { name: /reserve/i });
    this.totalPrice = page.locator('[data-testid="book-it-total-price"]');
    this.nightsCount = page.locator('[data-testid="book-it-nights-count"]');
    this.cleaningFee = page.locator('[data-testid="book-it-cleaning-fee"]');
    this.serviceFee = page.locator('[data-testid="book-it-service-fee"]');

    // Amenities
    this.amenitiesSection = page.locator('[data-section-id="AMENITIES"]');
    this.showAllAmenitiesButton = page.getByRole('button', { name: /show all amenities/i });

    // Reviews
    this.reviewsSection = page.locator('[data-section-id="REVIEWS"]');
    this.reviewCount = page.locator('[data-testid="pdp-reviews-count"]');
    this.overallRating = page.locator('[data-testid="pdp-reviews-highlight-banner-host-rating"]');
    this.reviewCards = page.locator('[data-testid="review-card"]');

    // Wishlist and share
    this.saveToWishlistButton = page.getByRole('button', { name: /save/i }).first();
    this.shareButton = page.getByRole('button', { name: /share/i });
  }

  /**
   * Wait for the listing page to fully load.
   * The booking widget is the key element we need for testing.
   */
  async waitForListingLoad(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
    await this.listingTitle.waitFor({ state: 'visible', timeout: 15_000 });
  }

  /**
   * Get the listing title text.
   */
  async getTitle(): Promise<string> {
    return (await this.listingTitle.textContent()) ?? '';
  }

  /**
   * Get price per night text (e.g., "$150 night").
   */
  async getPricePerNight(): Promise<string> {
    return (await this.pricePerNight.textContent()) ?? '';
  }

  /**
   * Select dates on the listing's booking widget.
   * @param checkInDaysFromNow - days from today for check-in
   * @param checkOutDaysFromNow - days from today for check-out
   */
  async selectDates(checkInDaysFromNow: number, checkOutDaysFromNow: number): Promise<void> {
    await this.checkInDateInput.click();
    await this.page.waitForTimeout(500);

    const checkIn = new Date();
    checkIn.setDate(checkIn.getDate() + checkInDaysFromNow);
    const checkInLabel = `${checkIn.toLocaleString('en-US', { month: 'long' })} ${checkIn.getDate()}, ${checkIn.getFullYear()}`;

    await this.page.locator(`[aria-label*="${checkInLabel}"]`).first().click();

    const checkOut = new Date();
    checkOut.setDate(checkOut.getDate() + checkOutDaysFromNow);
    const checkOutLabel = `${checkOut.toLocaleString('en-US', { month: 'long' })} ${checkOut.getDate()}, ${checkOut.getFullYear()}`;

    await this.page.locator(`[aria-label*="${checkOutLabel}"]`).first().click();
  }

  /**
   * Set number of guests from the booking widget.
   */
  async setGuests(adults: number): Promise<void> {
    await this.guestSelector.click();
    const increaseAdults = this.page.locator('[data-testid="stepper-adults-increase-button"]');
    for (let i = 0; i < adults - 1; i++) {
      await increaseAdults.click();
    }
  }

  /**
   * Click the Reserve button to proceed to checkout.
   * User must be logged in for this to work.
   */
  async clickReserve(): Promise<void> {
    await this.reserveButton.scrollIntoViewIfNeeded();
    await this.reserveButton.click();
  }

  /**
   * Open the full photo gallery.
   */
  async openPhotoGallery(): Promise<void> {
    await this.showAllPhotosButton.click();
    await this.page.waitForTimeout(1000);
  }

  /**
   * Show all amenities.
   */
  async showAllAmenities(): Promise<void> {
    await this.showAllAmenitiesButton.scrollIntoViewIfNeeded();
    await this.showAllAmenitiesButton.click();
    await this.page.waitForTimeout(500);
  }

  /**
   * Get all amenity names.
   */
  async getAmenities(): Promise<string[]> {
    await this.showAllAmenities();
    const amenityElements = await this.page
      .locator('[data-testid="amenity-row"]')
      .all();
    return Promise.all(amenityElements.map(el => el.textContent().then(t => t?.trim() ?? '')));
  }

  /**
   * Save the listing to wishlist (requires login).
   */
  async saveToWishlist(): Promise<void> {
    await this.saveToWishlistButton.click();
    await this.page.waitForTimeout(1000);
  }

  /**
   * Assert the listing page shows critical elements.
   */
  async assertListingPageLoaded(): Promise<void> {
    await expect(this.listingTitle).toBeVisible();
    await expect(this.reserveButton).toBeVisible();
  }

  /**
   * Assert the price is visible and contains a currency symbol.
   */
  async assertPriceDisplayed(): Promise<void> {
    const price = await this.getPricePerNight();
    expect(price).toMatch(/\$|€|£/);
  }
}
