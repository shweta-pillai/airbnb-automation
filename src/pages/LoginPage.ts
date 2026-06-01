import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * LoginPage - Represents the Airbnb authentication modal/page.
 *
 * Airbnb's auth flow:
 * 1. Click "Log in" → modal appears
 * 2. Choose method: Email, Google, Apple, Facebook
 * 3. Enter email → "Continue" → Enter password → "Log in"
 */
export class LoginPage extends BasePage {
  // ─── Auth Modal ────────────────────────────────────────────────────────
  readonly authModal: Locator;
  readonly modalTitle: Locator;

  // ─── Email Login ───────────────────────────────────────────────────────
  readonly emailInput: Locator;
  readonly continueButton: Locator;
  readonly passwordInput: Locator;
  readonly loginSubmitButton: Locator;

  // ─── Social Auth ───────────────────────────────────────────────────────
  readonly continueWithGoogleButton: Locator;
  readonly continueWithAppleButton: Locator;
  readonly continueWithFacebookButton: Locator;

  // ─── Error Messages ────────────────────────────────────────────────────
  readonly errorMessage: Locator;

  // ─── Navigation ────────────────────────────────────────────────────────
  readonly forgotPasswordLink: Locator;
  readonly signUpLink: Locator;

  constructor(page: Page) {
    super(page);

    this.authModal = page.locator('[data-testid="auth-modal"]')
      .or(page.locator('[aria-label="Log in or sign up modal"]'));

    this.modalTitle = page.locator('[data-testid="auth-modal"] h2')
      .or(page.locator('[aria-label="Log in or sign up modal"] h2'));

    // Email flow
    this.emailInput = page.locator('#email')
      .or(page.getByPlaceholder('Email'));

    this.continueButton = page.getByRole('button', { name: 'Continue' });

    this.passwordInput = page.locator('#password')
      .or(page.getByPlaceholder('Password'));

    this.loginSubmitButton = page.getByRole('button', { name: 'Log in' });

    // Social login
    this.continueWithGoogleButton = page.getByRole('button', { name: /continue with google/i });
    this.continueWithAppleButton = page.getByRole('button', { name: /continue with apple/i });
    this.continueWithFacebookButton = page.getByRole('button', { name: /continue with facebook/i });

    // Error handling
    this.errorMessage = page.locator('[data-testid="auth-error-message"]')
      .or(page.locator('[role="alert"]'));

    // Links
    this.forgotPasswordLink = page.getByRole('link', { name: /forgot password/i });
    this.signUpLink = page.getByText("Don't have an account?");
  }

  /**
   * Open the login modal by clicking the navigation login button.
   */
  async openLoginModal(): Promise<void> {
    const loginTrigger = this.page.getByRole('button', { name: /log in/i })
      .or(this.page.locator('[data-testid="cypress-headernav-profile"]'));
    await loginTrigger.click();

    // The menu shows — click "Log in" inside it
    const menuLoginOption = this.page.getByRole('menuitem', { name: 'Log in' });
    if (await menuLoginOption.isVisible({ timeout: 2000 }).catch(() => false)) {
      await menuLoginOption.click();
    }

    await this.authModal.waitFor({ state: 'visible', timeout: 5000 });
  }

  /**
   * Log in using email and password.
   */
  async loginWithEmail(email: string, password: string): Promise<void> {
    // Step 1: Enter email
    await this.emailInput.fill(email);
    await this.continueButton.click();

    // Step 2: Wait for password screen and enter password
    await this.passwordInput.waitFor({ state: 'visible', timeout: 5000 });
    await this.passwordInput.fill(password);
    await this.loginSubmitButton.click();

    // Wait for auth to complete (modal closes or redirects)
    await this.page.waitForTimeout(2000);
  }

  /**
   * Full login flow: open modal + authenticate.
   */
  async login(email: string, password: string): Promise<void> {
    await this.openLoginModal();
    await this.loginWithEmail(email, password);
  }

  /**
   * Get the current error message if authentication fails.
   */
  async getErrorMessage(): Promise<string> {
    await this.errorMessage.waitFor({ state: 'visible', timeout: 5000 });
    return (await this.errorMessage.textContent()) ?? '';
  }

  /**
   * Assert the auth modal is open.
   */
  async assertModalOpen(): Promise<void> {
    await expect(this.authModal).toBeVisible();
  }

  /**
   * Assert login error is visible with optional text match.
   */
  async assertLoginError(expectedText?: string): Promise<void> {
    await expect(this.errorMessage).toBeVisible();
    if (expectedText) {
      await expect(this.errorMessage).toContainText(expectedText);
    }
  }
}
