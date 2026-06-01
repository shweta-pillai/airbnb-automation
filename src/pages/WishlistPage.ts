import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * WishlistPage - Represents the saved listings (wishlists) page.
 * Requires authentication.
 */
export class WishlistPage extends BasePage {
  readonly pageTitle: Locator;
  readonly wishlistCards: Locator;
  readonly createWishlistButton: Locator;
  readonly wishlistNameInput: Locator;
  readonly createButton: Locator;
  readonly emptyStateMessage: Locator;

  constructor(page: Page) {
    super(page);

    this.pageTitle = page.locator('h1').first();
    this.wishlistCards = page.locator('[data-testid="wishlist-card"]');
    this.createWishlistButton = page.getByRole('button', { name: /create wishlist/i });
    this.wishlistNameInput = page.getByPlaceholder('Name');
    this.createButton = page.getByRole('button', { name: 'Create' });
    this.emptyStateMessage = page.locator('[data-testid="empty-wishlists"]');
  }

  async goto(): Promise<void> {
    await this.navigate('/wishlists');
    await this.waitForPageLoad();
  }

  async createWishlist(name: string): Promise<void> {
    await this.createWishlistButton.click();
    await this.wishlistNameInput.fill(name);
    await this.createButton.click();
    await this.waitForPageLoad();
  }

  async getWishlistCount(): Promise<number> {
    return this.wishlistCards.count();
  }

  async assertWishlistCreated(name: string): Promise<void> {
    const wishlist = this.page.getByText(name);
    await expect(wishlist).toBeVisible();
  }
}
