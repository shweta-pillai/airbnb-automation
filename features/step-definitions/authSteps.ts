import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { chromium, Browser, Page, BrowserContext, expect } from '@playwright/test';
import { HomePage } from '../../src/pages/HomePage';
import { LoginPage } from '../../src/pages/LoginPage';

let browser: Browser;
let context: BrowserContext;
let page: Page;
let homePage: HomePage;
let loginPage: LoginPage;

Before({ tags: '@authentication' }, async () => {
  browser = await chromium.launch({ headless: true });
  context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  page = await context.newPage();
  homePage = new HomePage(page);
  loginPage = new LoginPage(page);
});

After({ tags: '@authentication' }, async () => {
  await page?.close();
  await context?.close();
  await browser?.close();
});

// ─── Given ───────────────────────────────────────────────────────────────────

Given('the login modal is open', async () => {
  await loginPage.openLoginModal();
  await loginPage.assertModalOpen();
});

// ─── When ────────────────────────────────────────────────────────────────────

When('I click the {string} button', async (buttonName: string) => {
  if (buttonName === 'Log in') {
    await loginPage.openLoginModal();
  }
});

When('I enter {string} as my email', async (email: string) => {
  await loginPage.emailInput.fill(email);
});

When('I click the Continue button', async () => {
  await loginPage.continueButton.click();
});

// ─── Then ────────────────────────────────────────────────────────────────────

Then('the login modal should be displayed', async () => {
  await loginPage.assertModalOpen();
});

Then('I should see an error or be prompted for a password', async () => {
  const hasError = await loginPage.errorMessage.isVisible({ timeout: 5000 }).catch(() => false);
  const hasPassword = await loginPage.passwordInput.isVisible({ timeout: 5000 }).catch(() => false);
  expect(hasError || hasPassword).toBe(true);
});

Then('I should see a validation error for the email field', async () => {
  const isInvalid = await loginPage.emailInput.evaluate(
    (el) => !(el as HTMLInputElement).validity.valid
  );
  const hasAppError = await loginPage.errorMessage.isVisible({ timeout: 3000 }).catch(() => false);
  expect(isInvalid || hasAppError).toBe(true);
});

Then('I should see social login options', async () => {
  const hasFacebook = await loginPage.continueWithFacebookButton.isVisible().catch(() => false);
  const hasGoogle = await loginPage.continueWithGoogleButton.isVisible().catch(() => false);
  const hasApple = await loginPage.continueWithAppleButton.isVisible().catch(() => false);
  expect(hasFacebook || hasGoogle || hasApple).toBe(true);
});
