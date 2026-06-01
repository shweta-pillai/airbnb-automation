import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { chromium, Browser, Page, BrowserContext, expect } from '@playwright/test';
import { ListingDetailPage } from '../../src/pages/ListingDetailPage';

let browser: Browser;
let context: BrowserContext;
let page: Page;
let listingPage: ListingDetailPage;

const STABLE_LISTING_URL = 'https://www.airbnb.com/rooms/20776811';

Before({ tags: '@listing' }, async () => {
  browser = await chromium.launch({ headless: true });
  context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  page = await context.newPage();
  listingPage = new ListingDetailPage(page);
});

After({ tags: '@listing' }, async () => {
  await page?.close();
  await context?.close();
  await browser?.close();
});

// ─── Given ───────────────────────────────────────────────────────────────────

Given('I am viewing a listing detail page', async () => {
  await page.goto(STABLE_LISTING_URL);
  await listingPage.waitForListingLoad();
});

// ─── When ────────────────────────────────────────────────────────────────────

When('I scroll to the reviews section', async () => {
  await listingPage.reviewsSection.scrollIntoViewIfNeeded();
});

When('I scroll to the amenities section', async () => {
  await listingPage.amenitiesSection.scrollIntoViewIfNeeded();
});

When('I click the Reserve button', async () => {
  await listingPage.clickReserve();
});

// ─── Then ────────────────────────────────────────────────────────────────────

Then('the listing title should be displayed', async () => {
  const title = await listingPage.getTitle();
  expect(title.length).toBeGreaterThan(0);
});

Then('the Reserve button should be visible in the booking widget', async () => {
  await expect(listingPage.reserveButton).toBeVisible();
});

Then('the price per night should be displayed with a currency symbol', async () => {
  await listingPage.assertPriceDisplayed();
});

Then('the photo gallery should be visible', async () => {
  const gallery = page.locator('[data-section-id="HERO_DEFAULT"]')
    .or(page.locator('img[aria-label]').first());
  await expect(gallery).toBeVisible();
});

Then('the reviews section should be visible', async () => {
  await expect(listingPage.reviewsSection).toBeVisible();
});

Then('the amenities section should be visible', async () => {
  await expect(listingPage.amenitiesSection).toBeVisible();
});

Then('the Reserve button should be enabled', async () => {
  await expect(listingPage.reserveButton).toBeEnabled({ timeout: 5000 });
});
