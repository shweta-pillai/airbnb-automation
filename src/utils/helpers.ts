import { Page } from '@playwright/test';

/**
 * DateUtils - Helpers for generating test dates.
 *
 * Airbnb tests need future dates that are always valid.
 * These utils ensure dates are always in the future regardless of when tests run.
 */
export class DateUtils {
  /**
   * Get a date N days from today.
   * @param daysFromNow - Number of days to add to today
   * @returns Date object
   */
  static getFutureDate(daysFromNow: number): Date {
    const date = new Date();
    date.setDate(date.getDate() + daysFromNow);
    return date;
  }

  /**
   * Format a date for Airbnb's calendar aria-label format.
   * e.g., "June 15, 2025"
   */
  static formatForCalendar(date: Date): string {
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  }

  /**
   * Format a date as MM/DD/YYYY for input fields.
   */
  static formatForInput(date: Date): string {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${month}/${day}/${date.getFullYear()}`;
  }

  /**
   * Get check-in and check-out dates with a given stay duration.
   */
  static getStayDates(checkInDaysFromNow: number, stayNights: number) {
    const checkIn = this.getFutureDate(checkInDaysFromNow);
    const checkOut = this.getFutureDate(checkInDaysFromNow + stayNights);
    return { checkIn, checkOut };
  }
}

/**
 * WaitUtils - Smart waiting strategies beyond simple timeouts.
 */
export class WaitUtils {
  /**
   * Wait for network requests to a specific URL pattern to complete.
   */
  static async waitForAPICall(page: Page, urlPattern: string | RegExp): Promise<void> {
    await page.waitForResponse(
      (response) => {
        const url = response.url();
        if (typeof urlPattern === 'string') return url.includes(urlPattern);
        return urlPattern.test(url);
      },
      { timeout: 15_000 }
    );
  }

  /**
   * Wait for a specific number of elements to be present.
   */
  static async waitForCount(page: Page, selector: string, count: number, timeout = 10_000): Promise<void> {
    await page.waitForFunction(
      ({ sel, cnt }) => document.querySelectorAll(sel).length >= cnt,
      { sel: selector, cnt: count },
      { timeout }
    );
  }

  /**
   * Retry an action up to N times with a delay between attempts.
   * Useful for flaky animations or lazy-loading elements.
   */
  static async retry<T>(
    action: () => Promise<T>,
    retries = 3,
    delayMs = 1000
  ): Promise<T> {
    let lastError: Error | undefined;
    for (let i = 0; i < retries; i++) {
      try {
        return await action();
      } catch (err) {
        lastError = err as Error;
        if (i < retries - 1) {
          await new Promise(resolve => setTimeout(resolve, delayMs));
        }
      }
    }
    throw lastError;
  }
}

/**
 * URLUtils - Helpers for working with Airbnb URLs.
 */
export class URLUtils {
  /**
   * Build an Airbnb search URL with parameters.
   */
  static buildSearchURL(params: {
    location: string;
    checkIn?: Date;
    checkOut?: Date;
    adults?: number;
    children?: number;
  }): string {
    const base = 'https://www.airbnb.com/s';
    const query = encodeURIComponent(params.location);
    const url = new URL(`${base}/${query}/homes`);

    if (params.checkIn) {
      url.searchParams.set('checkin', DateUtils.formatForInput(params.checkIn));
    }
    if (params.checkOut) {
      url.searchParams.set('checkout', DateUtils.formatForInput(params.checkOut));
    }
    if (params.adults) {
      url.searchParams.set('adults', params.adults.toString());
    }
    if (params.children) {
      url.searchParams.set('children', params.children.toString());
    }

    return url.toString();
  }

  /**
   * Extract listing ID from an Airbnb listing URL.
   * e.g., "https://www.airbnb.com/rooms/12345678" → "12345678"
   */
  static extractListingId(url: string): string | null {
    const match = url.match(/\/rooms\/(\d+)/);
    return match ? match[1] : null;
  }
}

/**
 * StringUtils - Text processing helpers.
 */
export class StringUtils {
  /**
   * Parse a price string to a number.
   * e.g., "$150 per night" → 150
   */
  static parsePriceToNumber(priceText: string): number {
    const cleaned = priceText.replace(/[^0-9.]/g, '');
    return parseFloat(cleaned);
  }

  /**
   * Parse a rating string.
   * e.g., "4.8 out of 5 stars" → 4.8
   */
  static parseRating(ratingText: string): number {
    const match = ratingText.match(/(\d+\.?\d*)/);
    return match ? parseFloat(match[1]) : 0;
  }
}
