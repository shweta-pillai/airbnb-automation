# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\homepage.spec.ts >> Homepage >> HOME-006: should display Become a Host link
- Location: tests\e2e\homepage.spec.ts:61:7

# Error details

```
Test timeout of 60000ms exceeded while running "beforeEach" hook.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('button[aria-label="Close"]').first()
    - locator resolved to <button type="button" variant="fill" aria-label="Close" class="l1ovpqvx atm_npmupv_14b5rvc_10saat9 atm_4s4swg_18xq13z_10saat9 atm_u9em2p_1r3889l_10saat9 atm_1ezpcqw_1u41vd9_10saat9 atm_fyjbsv_c4n71i_10saat9 atm_1rna0z7_1uk391_10saat9 c15yc2zx atm_1s_glywfm atm_5j_1ssbidh atm_9j_tlke0l atm_tl_1gw4zv3 atm_9s_1o8liyq atm_mk_h2mmj6 atm_l8_idpfg4 atm_gi_idpfg4 atm_3f_glywfm atm_2d_v1pa1f atm_7l_lerloo atm_vy_16ctctf atm_e2_u26bh1 atm_uc_9373uk atm_kd_glywfm atm_kd_glywfm_1w3cfyq atm_3f_glywfm_e4a3ld atm_l8…>…</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling

```

# Test source

```ts
  1   | import { Page, Locator, expect } from '@playwright/test';
  2   | 
  3   | /**
  4   |  * BasePage - The foundation for all Page Object Models.
  5   |  *
  6   |  * WHY POM? Page Object Model separates the "how to interact with a page"
  7   |  * from the "what to test". This means:
  8   |  *  - If Airbnb changes a button's selector, you fix it in ONE place
  9   |  *  - Tests are readable like English sentences
  10  |  *  - Reusable across multiple test files
  11  |  */
  12  | export abstract class BasePage {
  13  |   readonly page: Page;
  14  |   readonly baseURL: string;
  15  | 
  16  |   constructor(page: Page, baseURL = 'https://www.airbnb.com') {
  17  |     this.page = page;
  18  |     this.baseURL = baseURL;
  19  |   }
  20  | 
  21  |   /**
  22  |    * Navigate to a specific path on the site.
  23  |    * @param path - URL path relative to baseURL
  24  |    */
  25  |   async navigate(path = '/'): Promise<void> {
  26  |     await this.page.goto(`${this.baseURL}${path}`);
  27  |     await this.waitForPageLoad();
  28  |   }
  29  | 
  30  |   /**
  31  |    * Wait for the page to be in a ready state.
  32  |    * Combines network idle + DOM content loaded for reliability.
  33  |    */
  34  |   async waitForPageLoad(): Promise<void> {
  35  |     await this.page.waitForLoadState('domcontentloaded');
  36  |     // Give dynamic content a moment to settle
  37  |     await this.page.waitForTimeout(500);
  38  |   }
  39  | 
  40  |   /**
  41  |    * Get current URL
  42  |    */
  43  |   async getCurrentURL(): Promise<string> {
  44  |     return this.page.url();
  45  |   }
  46  | 
  47  |   /**
  48  |    * Get page title
  49  |    */
  50  |   async getTitle(): Promise<string> {
  51  |     return this.page.title();
  52  |   }
  53  | 
  54  |   /**
  55  |    * Take a screenshot with a descriptive name.
  56  |    * Useful for debugging and reporting.
  57  |    */
  58  |   async takeScreenshot(name: string): Promise<void> {
  59  |     await this.page.screenshot({
  60  |       path: `test-results/screenshots/${name}-${Date.now()}.png`,
  61  |       fullPage: true,
  62  |     });
  63  |   }
  64  | 
  65  |   /**
  66  |    * Scroll to an element and ensure it's visible.
  67  |    * Needed for Airbnb's dynamic/lazy-loaded content.
  68  |    */
  69  |   async scrollToElement(locator: Locator): Promise<void> {
  70  |     await locator.scrollIntoViewIfNeeded();
  71  |   }
  72  | 
  73  |   /**
  74  |    * Wait for an element to be visible with a custom timeout.
  75  |    */
  76  |   async waitForElement(locator: Locator, timeout = 10000): Promise<void> {
  77  |     await locator.waitFor({ state: 'visible', timeout });
  78  |   }
  79  | 
  80  |   /**
  81  |    * Dismiss any modal/cookie banner that might block interactions.
  82  |    * Airbnb frequently shows translation prompts or cookie consents.
  83  |    */
  84  |   async dismissModals(): Promise<void> {
  85  |     const closeSelectors = [
  86  |       '[aria-label="Close"]',
  87  |       '[data-testid="modal-close-button"]',
  88  |       'button[aria-label="Close"]',
  89  |     ];
  90  | 
  91  |     for (const selector of closeSelectors) {
  92  |       const modal = this.page.locator(selector).first();
  93  |       if (await modal.isVisible({ timeout: 2000 }).catch(() => false)) {
> 94  |         await modal.click();
      |                     ^ Error: locator.click: Test timeout of 60000ms exceeded.
  95  |         await this.page.waitForTimeout(300);
  96  |       }
  97  |     }
  98  |   }
  99  | 
  100 |   /**
  101 |    * Check if we're on a specific page by URL pattern.
  102 |    */
  103 |   async isOnPage(urlPattern: string | RegExp): Promise<boolean> {
  104 |     const url = this.page.url();
  105 |     if (typeof urlPattern === 'string') {
  106 |       return url.includes(urlPattern);
  107 |     }
  108 |     return urlPattern.test(url);
  109 |   }
  110 | 
  111 |   /**
  112 |    * Assert the page URL contains a pattern.
  113 |    */
  114 |   async assertURL(urlPattern: string | RegExp): Promise<void> {
  115 |     await expect(this.page).toHaveURL(urlPattern);
  116 |   }
  117 | 
  118 |   /**
  119 |    * Assert the page title contains text.
  120 |    */
  121 |   async assertTitle(titleText: string): Promise<void> {
  122 |     await expect(this.page).toHaveTitle(new RegExp(titleText, 'i'));
  123 |   }
  124 | }
  125 | 
```