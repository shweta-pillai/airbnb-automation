import { Page, Locator, expect } from '@playwright/test';

/**
 * BasePage - The foundation for all Page Object Models.
 *
 * WHY POM? Page Object Model separates the "how to interact with a page"
 * from the "what to test". This means:
 *  - If Airbnb changes a button's selector, you fix it in ONE place
 *  - Tests are readable like English sentences
 *  - Reusable across multiple test files
 */
export abstract class BasePage {
  readonly page: Page;
  readonly baseURL: string;

  constructor(page: Page, baseURL = 'https://www.airbnb.com') {
    this.page = page;
    this.baseURL = baseURL;
  }

  /**
   * Navigate to a specific path on the site.
   * @param path - URL path relative to baseURL
   */
  async navigate(path = '/'): Promise<void> {
    await this.page.goto(`${this.baseURL}${path}`);
    await this.waitForPageLoad();
  }

  /**
   * Wait for the page to be in a ready state.
   * Combines network idle + DOM content loaded for reliability.
   */
  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState('domcontentloaded');
    // Give dynamic content a moment to settle
    await this.page.waitForTimeout(500);
  }

  /**
   * Get current URL
   */
  async getCurrentURL(): Promise<string> {
    return this.page.url();
  }

  /**
   * Get page title
   */
  async getTitle(): Promise<string> {
    return this.page.title();
  }

  /**
   * Take a screenshot with a descriptive name.
   * Useful for debugging and reporting.
   */
  async takeScreenshot(name: string): Promise<void> {
    await this.page.screenshot({
      path: `test-results/screenshots/${name}-${Date.now()}.png`,
      fullPage: true,
    });
  }

  /**
   * Scroll to an element and ensure it's visible.
   * Needed for Airbnb's dynamic/lazy-loaded content.
   */
  async scrollToElement(locator: Locator): Promise<void> {
    await locator.scrollIntoViewIfNeeded();
  }

  /**
   * Wait for an element to be visible with a custom timeout.
   */
  async waitForElement(locator: Locator, timeout = 10000): Promise<void> {
    await locator.waitFor({ state: 'visible', timeout });
  }

  /**
   * Dismiss any modal/cookie banner that might block interactions.
   * Airbnb frequently shows translation prompts or cookie consents.
   */
  async dismissModals(): Promise<void> {
    const closeSelectors = [
      '[aria-label="Close"]',
      '[data-testid="modal-close-button"]',
      'button[aria-label="Close"]',
    ];

    for (const selector of closeSelectors) {
      const modal = this.page.locator(selector).first();
      if (await modal.isVisible({ timeout: 2000 }).catch(() => false)) {
        await modal.click();
        await this.page.waitForTimeout(300);
      }
    }
  }

  /**
   * Check if we're on a specific page by URL pattern.
   */
  async isOnPage(urlPattern: string | RegExp): Promise<boolean> {
    const url = this.page.url();
    if (typeof urlPattern === 'string') {
      return url.includes(urlPattern);
    }
    return urlPattern.test(url);
  }

  /**
   * Assert the page URL contains a pattern.
   */
  async assertURL(urlPattern: string | RegExp): Promise<void> {
    await expect(this.page).toHaveURL(urlPattern);
  }

  /**
   * Assert the page title contains text.
   */
  async assertTitle(titleText: string): Promise<void> {
    await expect(this.page).toHaveTitle(new RegExp(titleText, 'i'));
  }
}
