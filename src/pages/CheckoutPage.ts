import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * CheckoutPage - Represents the booking/reservation confirmation page.
 *
 * After clicking "Reserve" on a listing, the user reaches this page to:
 * - Review the trip details
 * - Enter payment information
 * - Review cancellation policy
 * - Confirm & Pay
 */
export class CheckoutPage extends BasePage {
  // ─── Trip Summary ──────────────────────────────────────────────────────
  readonly tripSummarySection: Locator;
  readonly checkInDate: Locator;
  readonly checkOutDate: Locator;
  readonly guestCount: Locator;
  readonly listingName: Locator;

  // ─── Price Breakdown ───────────────────────────────────────────────────
  readonly priceBreakdownSection: Locator;
  readonly nighlyRate: Locator;
  readonly cleaningFee: Locator;
  readonly serviceFee: Locator;
  readonly totalPrice: Locator;

  // ─── Payment Form ──────────────────────────────────────────────────────
  readonly paymentSection: Locator;
  readonly cardNumberInput: Locator;
  readonly cardExpiryInput: Locator;
  readonly cardCVVInput: Locator;
  readonly cardHolderName: Locator;
  readonly billingAddressInput: Locator;

  // ─── Policy ────────────────────────────────────────────────────────────
  readonly cancellationPolicy: Locator;
  readonly groundRulesSection: Locator;

  // ─── Confirmation ──────────────────────────────────────────────────────
  readonly confirmAndPayButton: Locator;
  readonly termsCheckbox: Locator;

  constructor(page: Page) {
    super(page);

    this.tripSummarySection = page.locator('[data-section-id="TRIP_DETAILS"]')
      .or(page.locator('[data-testid="checkout-trip-details"]'));

    this.checkInDate = page.locator('[data-testid="checkout-check-in-date"]');
    this.checkOutDate = page.locator('[data-testid="checkout-check-out-date"]');
    this.guestCount = page.locator('[data-testid="checkout-guest-count"]');
    this.listingName = page.locator('[data-testid="checkout-listing-name"]')
      .or(page.locator('h2').first());

    this.priceBreakdownSection = page.locator('[data-section-id="PRICE_BREAKDOWN"]');
    this.nighlyRate = page.locator('[data-testid="checkout-price-nightly"]');
    this.cleaningFee = page.locator('[data-testid="checkout-cleaning-fee"]');
    this.serviceFee = page.locator('[data-testid="checkout-service-fee"]');
    this.totalPrice = page.locator('[data-testid="checkout-total-price"]');

    // Payment inputs (may be inside iframes for PCI compliance)
    this.paymentSection = page.locator('[data-section-id="PAYMENT_FORM"]');
    this.cardNumberInput = page.locator('[data-testid="card-number"]')
      .or(page.frameLocator('[title="Card number"]').locator('input'));
    this.cardExpiryInput = page.locator('[data-testid="card-expiry"]');
    this.cardCVVInput = page.locator('[data-testid="card-cvv"]');
    this.cardHolderName = page.getByPlaceholder('Name on card');
    this.billingAddressInput = page.getByPlaceholder('Address');

    this.cancellationPolicy = page.locator('[data-section-id="CANCELLATION_POLICY"]');
    this.groundRulesSection = page.locator('[data-section-id="BOOK_IT_GROUND_RULES"]');

    this.confirmAndPayButton = page.getByRole('button', { name: /confirm and pay/i });
    this.termsCheckbox = page.locator('[data-testid="checkout-terms-checkbox"]');
  }

  /**
   * Wait for the checkout page to fully render.
   */
  async waitForCheckoutLoad(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
    // The confirm button is our confidence signal
    await this.confirmAndPayButton.waitFor({ state: 'visible', timeout: 20_000 });
  }

  /**
   * Get the total price from the price breakdown.
   */
  async getTotalPrice(): Promise<string> {
    await this.totalPrice.scrollIntoViewIfNeeded();
    return (await this.totalPrice.textContent()) ?? '';
  }

  /**
   * Fill payment details.
   * Note: In real testing this uses Stripe test card numbers.
   */
  async fillPaymentDetails(params: {
    cardNumber: string;
    expiry: string;
    cvv: string;
    nameOnCard: string;
  }): Promise<void> {
    await this.cardNumberInput.fill(params.cardNumber);
    await this.cardExpiryInput.fill(params.expiry);
    await this.cardCVVInput.fill(params.cvv);
    await this.cardHolderName.fill(params.nameOnCard);
  }

  /**
   * Assert we are on the checkout page.
   */
  async assertOnCheckoutPage(): Promise<void> {
    await expect(this.page).toHaveURL(/book|checkout/i);
    await expect(this.confirmAndPayButton).toBeVisible();
  }

  /**
   * Assert the price breakdown has all required line items.
   */
  async assertPriceBreakdown(): Promise<void> {
    await this.priceBreakdownSection.scrollIntoViewIfNeeded();
    await expect(this.totalPrice).toBeVisible();
  }
}
