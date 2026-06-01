# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\auth.spec.ts >> Authentication >> Login Modal >> AUTH-004: should validate email format before continuing
- Location: tests\e2e\auth.spec.ts:66:9

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: /log in/i }).or(locator('[data-testid="cypress-headernav-profile"]'))
    - locator resolved to <button type="button" aria-expanded="false" aria-label="Main navigation menu" data-testid="cypress-headernav-profile" data-tooltip-anchor-id="guest-header-dropdownmenu" class="l1ovpqvx atm_npmupv_14b5rvc_10saat9 atm_4s4swg_18xq13z_10saat9 atm_u9em2p_1r3889l_10saat9 atm_1ezpcqw_1u41vd9_10saat9 atm_fyjbsv_c4n71i_10saat9 atm_1rna0z7_1uk391_10saat9 c11lr9v9 atm_1s_glywfm atm_5j_1ssbidh atm_9j_tlke0l atm_tl_1gw4zv3 atm_l8_idpfg4 atm_gi_idpfg4 atm_3f_glywfm atm_2d_v1pa1f atm_7l_lerloo atm_uc_9373uk atm_kd_g…>…</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling

```

# Test source

```ts
  1   | import { Page, Locator, expect } from '@playwright/test';
  2   | import { BasePage } from './BasePage';
  3   | 
  4   | /**
  5   |  * LoginPage - Represents the Airbnb authentication modal/page.
  6   |  *
  7   |  * Airbnb's auth flow:
  8   |  * 1. Click "Log in" → modal appears
  9   |  * 2. Choose method: Email, Google, Apple, Facebook
  10  |  * 3. Enter email → "Continue" → Enter password → "Log in"
  11  |  */
  12  | export class LoginPage extends BasePage {
  13  |   // ─── Auth Modal ────────────────────────────────────────────────────────
  14  |   readonly authModal: Locator;
  15  |   readonly modalTitle: Locator;
  16  | 
  17  |   // ─── Email Login ───────────────────────────────────────────────────────
  18  |   readonly emailInput: Locator;
  19  |   readonly continueButton: Locator;
  20  |   readonly passwordInput: Locator;
  21  |   readonly loginSubmitButton: Locator;
  22  | 
  23  |   // ─── Social Auth ───────────────────────────────────────────────────────
  24  |   readonly continueWithGoogleButton: Locator;
  25  |   readonly continueWithAppleButton: Locator;
  26  |   readonly continueWithFacebookButton: Locator;
  27  | 
  28  |   // ─── Error Messages ────────────────────────────────────────────────────
  29  |   readonly errorMessage: Locator;
  30  | 
  31  |   // ─── Navigation ────────────────────────────────────────────────────────
  32  |   readonly forgotPasswordLink: Locator;
  33  |   readonly signUpLink: Locator;
  34  | 
  35  |   constructor(page: Page) {
  36  |     super(page);
  37  | 
  38  |     this.authModal = page.locator('[data-testid="auth-modal"]')
  39  |       .or(page.locator('[aria-label="Log in or sign up modal"]'));
  40  | 
  41  |     this.modalTitle = page.locator('[data-testid="auth-modal"] h2')
  42  |       .or(page.locator('[aria-label="Log in or sign up modal"] h2'));
  43  | 
  44  |     // Email flow
  45  |     this.emailInput = page.locator('#email')
  46  |       .or(page.getByPlaceholder('Email'));
  47  | 
  48  |     this.continueButton = page.getByRole('button', { name: 'Continue' });
  49  | 
  50  |     this.passwordInput = page.locator('#password')
  51  |       .or(page.getByPlaceholder('Password'));
  52  | 
  53  |     this.loginSubmitButton = page.getByRole('button', { name: 'Log in' });
  54  | 
  55  |     // Social login
  56  |     this.continueWithGoogleButton = page.getByRole('button', { name: /continue with google/i });
  57  |     this.continueWithAppleButton = page.getByRole('button', { name: /continue with apple/i });
  58  |     this.continueWithFacebookButton = page.getByRole('button', { name: /continue with facebook/i });
  59  | 
  60  |     // Error handling
  61  |     this.errorMessage = page.locator('[data-testid="auth-error-message"]')
  62  |       .or(page.locator('[role="alert"]'));
  63  | 
  64  |     // Links
  65  |     this.forgotPasswordLink = page.getByRole('link', { name: /forgot password/i });
  66  |     this.signUpLink = page.getByText("Don't have an account?");
  67  |   }
  68  | 
  69  |   /**
  70  |    * Open the login modal by clicking the navigation login button.
  71  |    */
  72  |   async openLoginModal(): Promise<void> {
  73  |     const loginTrigger = this.page.getByRole('button', { name: /log in/i })
  74  |       .or(this.page.locator('[data-testid="cypress-headernav-profile"]'));
> 75  |     await loginTrigger.click();
      |                        ^ Error: locator.click: Test timeout of 60000ms exceeded.
  76  | 
  77  |     // The menu shows — click "Log in" inside it
  78  |     const menuLoginOption = this.page.getByRole('menuitem', { name: 'Log in' });
  79  |     if (await menuLoginOption.isVisible({ timeout: 2000 }).catch(() => false)) {
  80  |       await menuLoginOption.click();
  81  |     }
  82  | 
  83  |     await this.authModal.waitFor({ state: 'visible', timeout: 5000 });
  84  |   }
  85  | 
  86  |   /**
  87  |    * Log in using email and password.
  88  |    */
  89  |   async loginWithEmail(email: string, password: string): Promise<void> {
  90  |     // Step 1: Enter email
  91  |     await this.emailInput.fill(email);
  92  |     await this.continueButton.click();
  93  | 
  94  |     // Step 2: Wait for password screen and enter password
  95  |     await this.passwordInput.waitFor({ state: 'visible', timeout: 5000 });
  96  |     await this.passwordInput.fill(password);
  97  |     await this.loginSubmitButton.click();
  98  | 
  99  |     // Wait for auth to complete (modal closes or redirects)
  100 |     await this.page.waitForTimeout(2000);
  101 |   }
  102 | 
  103 |   /**
  104 |    * Full login flow: open modal + authenticate.
  105 |    */
  106 |   async login(email: string, password: string): Promise<void> {
  107 |     await this.openLoginModal();
  108 |     await this.loginWithEmail(email, password);
  109 |   }
  110 | 
  111 |   /**
  112 |    * Get the current error message if authentication fails.
  113 |    */
  114 |   async getErrorMessage(): Promise<string> {
  115 |     await this.errorMessage.waitFor({ state: 'visible', timeout: 5000 });
  116 |     return (await this.errorMessage.textContent()) ?? '';
  117 |   }
  118 | 
  119 |   /**
  120 |    * Assert the auth modal is open.
  121 |    */
  122 |   async assertModalOpen(): Promise<void> {
  123 |     await expect(this.authModal).toBeVisible();
  124 |   }
  125 | 
  126 |   /**
  127 |    * Assert login error is visible with optional text match.
  128 |    */
  129 |   async assertLoginError(expectedText?: string): Promise<void> {
  130 |     await expect(this.errorMessage).toBeVisible();
  131 |     if (expectedText) {
  132 |       await expect(this.errorMessage).toContainText(expectedText);
  133 |     }
  134 |   }
  135 | }
  136 | 
```