# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\auth.spec.ts >> Authentication >> Navigation Guards >> AUTH-006: accessing wishlists without auth should prompt login
- Location: tests\e2e\auth.spec.ts:106:9

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Skip to content" [ref=e2] [cursor=pointer]:
    - /url: "#site-content"
    - text: Skip to content
    - img [ref=e3]
  - alert
  - generic [ref=e12]:
    - generic [ref=e13]:
      - banner [ref=e16]:
        - generic [ref=e17]:
          - link "Airbnb Homepage" [ref=e19] [cursor=pointer]:
            - /url: /
            - img [ref=e21]
          - navigation "Profile" [ref=e24]:
            - generic [ref=e25]:
              - button "Become a host" [ref=e26] [cursor=pointer]:
                - generic [ref=e27]: Become a host
              - button "Choose a language and currency" [ref=e29] [cursor=pointer]:
                - img [ref=e31]
            - button "Main navigation menu" [ref=e35] [cursor=pointer]:
              - img [ref=e37]
      - main [ref=e41]:
        - generic [ref=e44]:
          - heading "Wishlists" [level=1] [ref=e49]
          - generic [ref=e51]:
            - heading "Log in to view your wishlists" [level=2] [ref=e52]:
              - generic [ref=e53]: Log in to view your wishlists
            - paragraph [ref=e54]: You can create, view, or edit wishlists once you’ve logged in.
            - button "Log in" [ref=e55] [cursor=pointer]:
              - generic: Log in
    - contentinfo [ref=e59]:
      - generic [ref=e61]:
        - heading "Site Footer" [level=2] [ref=e63]
        - generic [ref=e64]:
          - generic [ref=e65]:
            - heading "Support" [level=3] [ref=e66]
            - list [ref=e67]:
              - listitem [ref=e68]:
                - link "Help Centre" [ref=e69] [cursor=pointer]:
                  - /url: /help/home?from=footer
              - listitem [ref=e70]:
                - link "Get help with a safety issue" [ref=e71] [cursor=pointer]:
                  - /url: /help/contact-us?entry=DESKTOP_FOOTER_SAFETY
              - listitem [ref=e72]:
                - link "AirCover" [ref=e73] [cursor=pointer]:
                  - /url: /aircover
              - listitem [ref=e74]:
                - link "Anti-discrimination" [ref=e75] [cursor=pointer]:
                  - /url: /against-discrimination
              - listitem [ref=e76]:
                - link "Disability support" [ref=e77] [cursor=pointer]:
                  - /url: /accessibility
              - listitem [ref=e78]:
                - link "Cancellation options" [ref=e79] [cursor=pointer]:
                  - /url: /help/article/2701/extenuating-circumstances-policy-and-the-coronavirus-covid19
              - listitem [ref=e80]:
                - link "Report neighbourhood concern" [ref=e81] [cursor=pointer]:
                  - /url: /neighbors
          - generic [ref=e82]:
            - heading "Hosting" [level=3] [ref=e83]
            - list [ref=e84]:
              - listitem [ref=e85]:
                - link "Airbnb your home" [ref=e86] [cursor=pointer]:
                  - /url: /host/homes?from_footer=1
              - listitem [ref=e87]:
                - link "Airbnb your experience" [ref=e88] [cursor=pointer]:
                  - /url: /host/experiences
              - listitem [ref=e89]:
                - link "Airbnb your service" [ref=e90] [cursor=pointer]:
                  - /url: /host/services
              - listitem [ref=e91]:
                - link "AirCover for Hosts" [ref=e92] [cursor=pointer]:
                  - /url: /aircover-for-hosts
              - listitem [ref=e93]:
                - link "Hosting resources" [ref=e94] [cursor=pointer]:
                  - /url: /resources
              - listitem [ref=e95]:
                - link "Community forum" [ref=e96] [cursor=pointer]:
                  - /url: https://community.withairbnb.com/t5/Community-Center/ct-p/community-center
              - listitem [ref=e97]:
                - link "Hosting responsibly" [ref=e98] [cursor=pointer]:
                  - /url: /help/responsible-hosting
              - listitem [ref=e99]:
                - link "Join a free hosting class" [ref=e100] [cursor=pointer]:
                  - /url: /e/intro-to-hosting
              - listitem [ref=e101]:
                - link "Find a co‑host" [ref=e102] [cursor=pointer]:
                  - /url: /host/co-hosts
              - listitem [ref=e103]:
                - link "Refer a host" [ref=e104] [cursor=pointer]:
                  - /url: /refer
          - generic [ref=e105]:
            - heading "Airbnb" [level=3] [ref=e106]
            - list [ref=e107]:
              - listitem [ref=e108]:
                - link "2026 Summer Release" [ref=e109] [cursor=pointer]:
                  - /url: /release
              - listitem [ref=e110]:
                - link "Newsroom" [ref=e111] [cursor=pointer]:
                  - /url: /press/news
              - listitem [ref=e112]:
                - link "Careers" [ref=e113] [cursor=pointer]:
                  - /url: /careers
              - listitem [ref=e114]:
                - link "Investors" [ref=e115] [cursor=pointer]:
                  - /url: https://investors.airbnb.com
              - listitem [ref=e116]:
                - link "Airbnb.org emergency stays" [ref=e117] [cursor=pointer]:
                  - /url: https://www.airbnb.org?locale=en-IN
        - generic [ref=e118]:
          - generic [ref=e119]: Footer section
          - generic [ref=e121]:
            - generic [ref=e123]:
              - generic [ref=e124]: © 2026 Airbnb, Inc.
              - generic [ref=e125]:
                - generic [ref=e127]: ·
                - list [ref=e129]:
                  - listitem [ref=e130]:
                    - link "Privacy" [ref=e131] [cursor=pointer]:
                      - /url: /terms/privacy_policy
                    - generic [ref=e132]:
                      - generic:
                        - generic: ·
                  - listitem [ref=e133]:
                    - link "Terms" [ref=e134] [cursor=pointer]:
                      - /url: /terms
                    - generic [ref=e135]:
                      - generic:
                        - generic: ·
                  - listitem [ref=e136]:
                    - link "Company details" [ref=e137] [cursor=pointer]:
                      - /url: /about/company-details
            - generic [ref=e138]:
              - generic [ref=e140]:
                - button "Choose a language" [ref=e142] [cursor=pointer]:
                  - generic [ref=e143]:
                    - generic:
                      - img
                      - text: English (IN)
                - button "Choose a currency" [ref=e145] [cursor=pointer]:
                  - generic [ref=e147]:
                    - generic [ref=e148]: ₹
                    - generic [ref=e149]: INR
              - list [ref=e151]:
                - listitem [ref=e152]:
                  - link "Navigate to Facebook" [ref=e153] [cursor=pointer]:
                    - /url: https://www.facebook.com/AirbnbIndia
                    - img [ref=e155]
                - listitem [ref=e157]:
                  - link "Navigate to Twitter" [ref=e158] [cursor=pointer]:
                    - /url: https://twitter.com/airbnb_in
                    - img [ref=e160]
                - listitem [ref=e162]:
                  - link "Navigate to Instagram" [ref=e163] [cursor=pointer]:
                    - /url: https://instagram.com/airbnb
                    - img [ref=e165]
```

# Test source

```ts
  15  | test.describe('Authentication', () => {
  16  |   test.describe('Login Modal', () => {
  17  |     /**
  18  |      * AUTH-001: Login modal opens when clicking "Log in"
  19  |      */
  20  |     test('AUTH-001: should open login modal from homepage nav', async ({ homePage, loginPage }) => {
  21  |       await homePage.goto();
  22  |       await loginPage.openLoginModal();
  23  |       await loginPage.assertModalOpen();
  24  |     });
  25  | 
  26  |     /**
  27  |      * AUTH-002: Email field accepts input
  28  |      */
  29  |     test('AUTH-002: should accept email address in the email field', async ({
  30  |       homePage,
  31  |       loginPage,
  32  |     }) => {
  33  |       await homePage.goto();
  34  |       await loginPage.openLoginModal();
  35  | 
  36  |       await loginPage.emailInput.fill('test@example.com');
  37  |       await expect(loginPage.emailInput).toHaveValue('test@example.com');
  38  |     });
  39  | 
  40  |     /**
  41  |      * AUTH-003: Invalid credentials show error
  42  |      * This tests that the system correctly rejects wrong passwords.
  43  |      */
  44  |     test('AUTH-003: should show error message with invalid credentials', async ({
  45  |       homePage,
  46  |       loginPage,
  47  |     }) => {
  48  |       await homePage.goto();
  49  |       await loginPage.openLoginModal();
  50  | 
  51  |       // Try to log in with invalid credentials
  52  |       await loginPage.emailInput.fill(TEST_USERS.invalidUser.email);
  53  |       await loginPage.continueButton.click();
  54  | 
  55  |       // Either "email not found" error OR we proceed to password step
  56  |       // Both are valid flows — we just verify no crash occurs
  57  |       const hasError = await loginPage.errorMessage.isVisible({ timeout: 5000 }).catch(() => false);
  58  |       const hasPassword = await loginPage.passwordInput.isVisible({ timeout: 5000 }).catch(() => false);
  59  | 
  60  |       expect(hasError || hasPassword).toBe(true);
  61  |     });
  62  | 
  63  |     /**
  64  |      * AUTH-004: Malformed email shows validation error
  65  |      */
  66  |     test('AUTH-004: should validate email format before continuing', async ({
  67  |       homePage,
  68  |       loginPage,
  69  |     }) => {
  70  |       await homePage.goto();
  71  |       await loginPage.openLoginModal();
  72  | 
  73  |       await loginPage.emailInput.fill(TEST_USERS.malformedEmail.email);
  74  |       await loginPage.continueButton.click();
  75  | 
  76  |       // Expect either a browser validation or application-level error
  77  |       const isInvalid = await loginPage.emailInput.evaluate(
  78  |         (el) => !(el as HTMLInputElement).validity.valid
  79  |       );
  80  |       const hasAppError = await loginPage.errorMessage.isVisible({ timeout: 3000 }).catch(() => false);
  81  | 
  82  |       expect(isInvalid || hasAppError).toBe(true);
  83  |     });
  84  | 
  85  |     /**
  86  |      * AUTH-005: Social login buttons are displayed
  87  |      */
  88  |     test('AUTH-005: should display social login options', async ({ homePage, loginPage }) => {
  89  |       await homePage.goto();
  90  |       await loginPage.openLoginModal();
  91  | 
  92  |       // Check for at least one social login option
  93  |       const hasFacebook = await loginPage.continueWithFacebookButton.isVisible().catch(() => false);
  94  |       const hasGoogle = await loginPage.continueWithGoogleButton.isVisible().catch(() => false);
  95  |       const hasApple = await loginPage.continueWithAppleButton.isVisible().catch(() => false);
  96  | 
  97  |       expect(hasFacebook || hasGoogle || hasApple).toBe(true);
  98  |     });
  99  |   });
  100 | 
  101 |   test.describe('Navigation Guards', () => {
  102 |     /**
  103 |      * AUTH-006: Protected routes redirect to login
  104 |      * Wishlist, trips, and inbox require authentication.
  105 |      */
  106 |     test('AUTH-006: accessing wishlists without auth should prompt login', async ({ page }) => {
  107 |       await page.goto('https://www.airbnb.com/wishlists');
  108 |       await page.waitForLoadState('domcontentloaded');
  109 | 
  110 |       // Should either redirect to login or show a login prompt
  111 |       const isLoginPage = page.url().includes('login') || page.url().includes('auth');
  112 |       const hasLoginModal = await page.locator('[aria-label*="Log in"]').isVisible({ timeout: 3000 }).catch(() => false);
  113 |       const isRedirected = await page.locator('text=/log in/i').isVisible({ timeout: 3000 }).catch(() => false);
  114 | 
> 115 |       expect(isLoginPage || hasLoginModal || isRedirected).toBe(true);
      |                                                            ^ Error: expect(received).toBe(expected) // Object.is equality
  116 |     });
  117 |   });
  118 | });
  119 | 
```