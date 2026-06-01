# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\auth.spec.ts >> Authentication >> Navigation Guards >> AUTH-006: accessing wishlists without auth should prompt login
- Location: tests\e2e\auth.spec.ts:106:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - link [ref=e2] [cursor=pointer]:
    - /url: "#site-content"
    - text: Skip to content
    - img [ref=e3]
  - generic [ref=e12]:
    - generic [ref=e13]:
      - banner [ref=e16]:
        - generic [ref=e17]:
          - link [ref=e19] [cursor=pointer]:
            - /url: /
            - img [ref=e21]
          - navigation [ref=e24]:
            - generic [ref=e25]:
              - button [ref=e26] [cursor=pointer]:
                - generic [ref=e27]: Become a host
              - button [ref=e29] [cursor=pointer]:
                - img [ref=e31]
            - button [ref=e35] [cursor=pointer]:
              - img [ref=e37]
      - main [ref=e41]:
        - generic [ref=e44]:
          - heading [level=1] [ref=e49]: Wishlists
          - generic [ref=e51]:
            - heading [level=2] [ref=e52]:
              - generic [ref=e53]: Log in to view your wishlists
            - paragraph [ref=e54]: You can create, view, or edit wishlists once you’ve logged in.
            - button [ref=e55] [cursor=pointer]:
              - generic: Log in
    - contentinfo [ref=e59]:
      - generic [ref=e61]:
        - heading [level=2] [ref=e63]: Site Footer
        - generic [ref=e64]:
          - generic [ref=e65]:
            - heading [level=3] [ref=e66]: Support
            - list [ref=e67]:
              - listitem [ref=e68]:
                - link [ref=e69] [cursor=pointer]:
                  - /url: /help/home?from=footer
                  - text: Help Centre
              - listitem [ref=e70]:
                - link [ref=e71] [cursor=pointer]:
                  - /url: /help/contact-us?entry=DESKTOP_FOOTER_SAFETY
                  - text: Get help with a safety issue
              - listitem [ref=e72]:
                - link [ref=e73] [cursor=pointer]:
                  - /url: /aircover
                  - text: AirCover
              - listitem [ref=e74]:
                - link [ref=e75] [cursor=pointer]:
                  - /url: /against-discrimination
                  - text: Anti-discrimination
              - listitem [ref=e76]:
                - link [ref=e77] [cursor=pointer]:
                  - /url: /accessibility
                  - text: Disability support
              - listitem [ref=e78]:
                - link [ref=e79] [cursor=pointer]:
                  - /url: /help/article/2701/extenuating-circumstances-policy-and-the-coronavirus-covid19
                  - text: Cancellation options
              - listitem [ref=e80]:
                - link [ref=e81] [cursor=pointer]:
                  - /url: /neighbors
                  - text: Report neighbourhood concern
          - generic [ref=e82]:
            - heading [level=3] [ref=e83]: Hosting
            - list [ref=e84]:
              - listitem [ref=e85]:
                - link [ref=e86] [cursor=pointer]:
                  - /url: /host/homes?from_footer=1
                  - text: Airbnb your home
              - listitem [ref=e87]:
                - link [ref=e88] [cursor=pointer]:
                  - /url: /host/experiences
                  - text: Airbnb your experience
              - listitem [ref=e89]:
                - link [ref=e90] [cursor=pointer]:
                  - /url: /host/services
                  - text: Airbnb your service
              - listitem [ref=e91]:
                - link [ref=e92] [cursor=pointer]:
                  - /url: /aircover-for-hosts
                  - text: AirCover for Hosts
              - listitem [ref=e93]:
                - link [ref=e94] [cursor=pointer]:
                  - /url: /resources
                  - text: Hosting resources
              - listitem [ref=e95]:
                - link [ref=e96] [cursor=pointer]:
                  - /url: https://community.withairbnb.com/t5/Community-Center/ct-p/community-center
                  - text: Community forum
              - listitem [ref=e97]:
                - link [ref=e98] [cursor=pointer]:
                  - /url: /help/responsible-hosting
                  - text: Hosting responsibly
              - listitem [ref=e99]:
                - link [ref=e100] [cursor=pointer]:
                  - /url: /e/intro-to-hosting
                  - text: Join a free hosting class
              - listitem [ref=e101]:
                - link [ref=e102] [cursor=pointer]:
                  - /url: /host/co-hosts
                  - text: Find a co‑host
              - listitem [ref=e103]:
                - link [ref=e104] [cursor=pointer]:
                  - /url: /refer
                  - text: Refer a host
          - generic [ref=e105]:
            - heading [level=3] [ref=e106]: Airbnb
            - list [ref=e107]:
              - listitem [ref=e108]:
                - link [ref=e109] [cursor=pointer]:
                  - /url: /release
                  - text: 2026 Summer Release
              - listitem [ref=e110]:
                - link [ref=e111] [cursor=pointer]:
                  - /url: /press/news
                  - text: Newsroom
              - listitem [ref=e112]:
                - link [ref=e113] [cursor=pointer]:
                  - /url: /careers
                  - text: Careers
              - listitem [ref=e114]:
                - link [ref=e115] [cursor=pointer]:
                  - /url: https://investors.airbnb.com
                  - text: Investors
              - listitem [ref=e116]:
                - link [ref=e117] [cursor=pointer]:
                  - /url: https://www.airbnb.org?locale=en-IN
                  - text: Airbnb.org emergency stays
        - generic [ref=e118]:
          - generic [ref=e119]: Footer section
          - generic [ref=e121]:
            - generic [ref=e123]:
              - generic [ref=e124]: © 2026 Airbnb, Inc.
              - generic [ref=e125]:
                - generic [ref=e127]: ·
                - list [ref=e129]:
                  - listitem [ref=e130]:
                    - link [ref=e131] [cursor=pointer]:
                      - /url: /terms/privacy_policy
                      - text: Privacy
                    - generic [ref=e132]:
                      - generic:
                        - generic: ·
                  - listitem [ref=e133]:
                    - link [ref=e134] [cursor=pointer]:
                      - /url: /terms
                      - text: Terms
                    - generic [ref=e135]:
                      - generic:
                        - generic: ·
                  - listitem [ref=e136]:
                    - link [ref=e137] [cursor=pointer]:
                      - /url: /about/company-details
                      - text: Company details
            - generic [ref=e138]:
              - generic [ref=e140]:
                - button [ref=e142] [cursor=pointer]:
                  - generic [ref=e143]:
                    - generic:
                      - img
                      - text: English (IN)
                - button [ref=e145] [cursor=pointer]:
                  - generic [ref=e147]:
                    - generic [ref=e148]: ₹
                    - generic [ref=e149]: INR
              - list [ref=e151]:
                - listitem [ref=e152]:
                  - link [ref=e153] [cursor=pointer]:
                    - /url: https://www.facebook.com/AirbnbIndia
                    - img [ref=e155]
                - listitem [ref=e157]:
                  - link [ref=e158] [cursor=pointer]:
                    - /url: https://twitter.com/airbnb_in
                    - img [ref=e160]
                - listitem [ref=e162]:
                  - link [ref=e163] [cursor=pointer]:
                    - /url: https://instagram.com/airbnb
                    - img [ref=e165]
  - dialog [active] [ref=e175]:
    - button "Close" [ref=e177] [cursor=pointer]:
      - img [ref=e179]
    - generic [ref=e181]:
      - img [ref=e184]
      - generic [ref=e211]:
        - heading "Save your favourites in one place" [level=2] [ref=e213]:
          - generic [ref=e214]: Save your favourites in one place
        - generic [ref=e215]: Click the heart icon as you browse to save stays and Experiences to a wishlist.
      - button "Got it" [ref=e218] [cursor=pointer]
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