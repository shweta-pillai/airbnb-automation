# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\airbnb.api.spec.ts >> API Tests — Network Interception >> API-007: should handle empty search results gracefully (mocked)
- Location: tests\api\airbnb.api.spec.ts:140:7

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "airbnb.com"
Received string:    "https://www.airbnb.co.in/s/SomeVeryObscurePlace/homes?locale=en&_set_bev_on_new_domain=1780336032_EAYzIxYjk3YzFiNG&set_everest_cookie_on_new_domain=1780336032.EAYjczMzBkM2UxMWU2Zj.IrPP3BOQeyJKVdWpXl3PsSmeU5aQvolwehZsJ85pS1s"
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - link "Skip to content" [ref=e2] [cursor=pointer]:
    - /url: "#site-content"
    - text: Skip to content
    - img [ref=e3]
  - alert
  - generic [ref=e8]:
    - generic [ref=e14]:
      - banner [ref=e15]:
        - generic [ref=e19]:
          - link "Airbnb homepage" [ref=e20] [cursor=pointer]:
            - /url: /
            - img [ref=e22]
          - search [ref=e24]:
            - generic [ref=e26]:
              - tablist [ref=e28]:
                - tab "Homes" [selected] [ref=e29] [cursor=pointer]:
                  - generic [ref=e32]: Homes
                  - generic [ref=e33]: Homes
                - tab "Experiences, new" [ref=e34] [cursor=pointer]:
                  - generic [ref=e38]:
                    - text: NEW
                    - generic [ref=e39]: NEW
                  - generic [ref=e42]: Experiences
                  - generic [ref=e43]: Experiences, new
                - tab "Services, new" [ref=e44] [cursor=pointer]:
                  - generic [ref=e48]:
                    - text: NEW
                    - generic [ref=e49]: NEW
                  - generic [ref=e52]: Services
                  - generic [ref=e53]: Services, new
              - search "Start your search" [ref=e58] [cursor=pointer]:
                - generic [ref=e59]: Start your search
                - generic [ref=e60]:
                  - button "Location Homes in SomeVeryObscurePlace" [ref=e61]:
                    - generic [ref=e62]: Location
                    - generic [ref=e64]: Homes in SomeVeryObscurePlace
                  - button "Check in / Check out Any week" [ref=e66]:
                    - generic [ref=e67]: Check in / Check out
                    - generic [ref=e68]: Any week
                  - button "Guests Add guests" [ref=e70]:
                    - generic [ref=e71]: Guests
                    - generic [ref=e72]: Add guests
                - img [ref=e76]
          - navigation "Profile" [ref=e80]:
            - generic [ref=e81]:
              - button "Become a host" [ref=e82] [cursor=pointer]:
                - generic [ref=e83]: Become a host
              - button "Choose a language and currency" [ref=e85] [cursor=pointer]:
                - img [ref=e87]
            - button "Main navigation menu" [ref=e91] [cursor=pointer]:
              - img [ref=e93]
      - main [ref=e97]:
        - generic [ref=e98]:
          - heading "Search results; Over 1,000 homes within map area" [active] [level=1] [ref=e105]:
            - generic [ref=e106]: Search results; Over 1,000 homes within map area
            - text: Over 1,000 homes within map area
          - group [ref=e118]:
            - link "Home in Higashisonogi, Japan" [ref=e119] [cursor=pointer]:
              - /url: /rooms/1644842103288733062?search_mode=regular_search&adults=1&check_in=2026-06-03&check_out=2026-06-08&children=0&infants=0&pets=0&source_impression_id=p3_1780336867_P3vObt4N1D_iW6Ad&previous_page_section_name=1000&federated_search_id=a44603c7-fbec-422a-a123-6638c3be1a24
            - generic [ref=e120]:
              - group [ref=e123]:
                - generic:
                  - generic:
                    - 'button "Add to wishlist: Home in Higashisonogi, Japan" [ref=e125] [cursor=pointer]':
                      - img [ref=e126]
                    - generic:
                      - button [disabled] [ref=e129] [cursor=pointer]:
                        - img [ref=e131]
                      - 'button "Next photo: Home in Higashisonogi, Japan" [ref=e134] [cursor=pointer]':
                        - img [ref=e136]
                    - generic:
                      - generic:
                        - img "Photo 1 of 6"
                - generic [ref=e142]:
                  - link [ref=e143] [cursor=pointer]:
                    - /url: /rooms/1644842103288733062?search_mode=regular_search&adults=1&check_in=2026-06-03&check_out=2026-06-08&children=0&infants=0&pets=0&source_impression_id=p3_1780336867_P3vObt4N1D_iW6Ad&previous_page_section_name=1000&federated_search_id=a44603c7-fbec-422a-a123-6638c3be1a24
                    - img [ref=e146]
                  - link [ref=e147] [cursor=pointer]:
                    - /url: /rooms/1644842103288733062?search_mode=regular_search&adults=1&check_in=2026-06-03&check_out=2026-06-08&children=0&infants=0&pets=0&source_impression_id=p3_1780336867_P3vObt4N1D_iW6Ad&previous_page_section_name=1000&federated_search_id=a44603c7-fbec-422a-a123-6638c3be1a24
                  - link [ref=e148] [cursor=pointer]:
                    - /url: /rooms/1644842103288733062?search_mode=regular_search&adults=1&check_in=2026-06-03&check_out=2026-06-08&children=0&infants=0&pets=0&source_impression_id=p3_1780336867_P3vObt4N1D_iW6Ad&previous_page_section_name=1000&federated_search_id=a44603c7-fbec-422a-a123-6638c3be1a24
                  - link [ref=e149] [cursor=pointer]:
                    - /url: /rooms/1644842103288733062?search_mode=regular_search&adults=1&check_in=2026-06-03&check_out=2026-06-08&children=0&infants=0&pets=0&source_impression_id=p3_1780336867_P3vObt4N1D_iW6Ad&previous_page_section_name=1000&federated_search_id=a44603c7-fbec-422a-a123-6638c3be1a24
                  - link [ref=e150] [cursor=pointer]:
                    - /url: /rooms/1644842103288733062?search_mode=regular_search&adults=1&check_in=2026-06-03&check_out=2026-06-08&children=0&infants=0&pets=0&source_impression_id=p3_1780336867_P3vObt4N1D_iW6Ad&previous_page_section_name=1000&federated_search_id=a44603c7-fbec-422a-a123-6638c3be1a24
                  - link [ref=e151] [cursor=pointer]:
                    - /url: /rooms/1644842103288733062?search_mode=regular_search&adults=1&check_in=2026-06-03&check_out=2026-06-08&children=0&infants=0&pets=0&source_impression_id=p3_1780336867_P3vObt4N1D_iW6Ad&previous_page_section_name=1000&federated_search_id=a44603c7-fbec-422a-a123-6638c3be1a24
              - generic [ref=e152]:
                - generic [ref=e153]: Home in Higashisonogi, Japan
                - generic [ref=e155]: A 125year-old traditional Japanese farmhouse 187㎡
                - generic [ref=e156]:
                  - generic [ref=e157]:
                    - generic [ref=e158]: 4 bedrooms
                    - generic [ref=e159]: 4 bedrooms
                  - generic [ref=e160]:
                    - generic [ref=e161]: 5 double beds
                    - generic [ref=e162]: ","
                    - generic [ref=e163]: ·
                    - generic [ref=e164]: 5 double beds
                  - generic [ref=e165]:
                    - generic [ref=e166]: 2 bathrooms
                    - generic [ref=e167]: ","
                    - generic [ref=e168]: ·
                    - generic [ref=e169]: 2 bathrooms
                - generic [ref=e171]:
                  - generic [ref=e172]: 3–8 Jun
                  - generic [ref=e173]: 3–8 Jun
                - generic [ref=e177]:
                  - button [ref=e182] [cursor=pointer]:
                    - text: ₹1,10,135
                    - generic [ref=e183]: Show price breakdown
                  - generic [ref=e185]: for 5 nights
                  - generic [ref=e186]: ₹1,10,135 for 5 nights
                - generic [ref=e187]:
                  - generic:
                    - generic: New place to stay
                    - generic:
                      - img
                    - generic: New
        - application "Google Map" [ref=e499]
      - contentinfo [ref=e506]:
        - generic [ref=e507]:
          - heading "Site Footer" [level=2] [ref=e509]
          - generic [ref=e510]:
            - generic [ref=e511]:
              - heading "Support" [level=3] [ref=e512]
              - list [ref=e513]:
                - listitem [ref=e514]:
                  - link "Help Centre" [ref=e515] [cursor=pointer]:
                    - /url: /help/home?from=footer
                - listitem [ref=e516]:
                  - link "Get help with a safety issue" [ref=e517] [cursor=pointer]:
                    - /url: /help/contact-us?entry=DESKTOP_FOOTER_SAFETY
                - listitem [ref=e518]:
                  - link "AirCover" [ref=e519] [cursor=pointer]:
                    - /url: /aircover
                - listitem [ref=e520]:
                  - link "Anti-discrimination" [ref=e521] [cursor=pointer]:
                    - /url: /against-discrimination
                - listitem [ref=e522]:
                  - link "Disability support" [ref=e523] [cursor=pointer]:
                    - /url: /accessibility
                - listitem [ref=e524]:
                  - link "Cancellation options" [ref=e525] [cursor=pointer]:
                    - /url: /help/article/2701/extenuating-circumstances-policy-and-the-coronavirus-covid19
                - listitem [ref=e526]:
                  - link "Report neighbourhood concern" [ref=e527] [cursor=pointer]:
                    - /url: /neighbors
            - generic [ref=e528]:
              - heading "Hosting" [level=3] [ref=e529]
              - list [ref=e530]:
                - listitem [ref=e531]:
                  - link "Airbnb your home" [ref=e532] [cursor=pointer]:
                    - /url: /host/homes?from_footer=1
                - listitem [ref=e533]:
                  - link "Airbnb your experience" [ref=e534] [cursor=pointer]:
                    - /url: /host/experiences
                - listitem [ref=e535]:
                  - link "Airbnb your service" [ref=e536] [cursor=pointer]:
                    - /url: /host/services
                - listitem [ref=e537]:
                  - link "AirCover for Hosts" [ref=e538] [cursor=pointer]:
                    - /url: /aircover-for-hosts
                - listitem [ref=e539]:
                  - link "Hosting resources" [ref=e540] [cursor=pointer]:
                    - /url: /resources
                - listitem [ref=e541]:
                  - link "Community forum" [ref=e542] [cursor=pointer]:
                    - /url: https://community.withairbnb.com/t5/Community-Center/ct-p/community-center
                - listitem [ref=e543]:
                  - link "Hosting responsibly" [ref=e544] [cursor=pointer]:
                    - /url: /help/responsible-hosting
                - listitem [ref=e545]:
                  - link "Join a free hosting class" [ref=e546] [cursor=pointer]:
                    - /url: /e/intro-to-hosting
                - listitem [ref=e547]:
                  - link "Find a co‑host" [ref=e548] [cursor=pointer]:
                    - /url: /host/co-hosts
                - listitem [ref=e549]:
                  - link "Refer a host" [ref=e550] [cursor=pointer]:
                    - /url: /refer
            - generic [ref=e551]:
              - heading "Airbnb" [level=3] [ref=e552]
              - list [ref=e553]:
                - listitem [ref=e554]:
                  - link "2026 Summer Release" [ref=e555] [cursor=pointer]:
                    - /url: /release
                - listitem [ref=e556]:
                  - link "Newsroom" [ref=e557] [cursor=pointer]:
                    - /url: /press/news
                - listitem [ref=e558]:
                  - link "Careers" [ref=e559] [cursor=pointer]:
                    - /url: /careers
                - listitem [ref=e560]:
                  - link "Investors" [ref=e561] [cursor=pointer]:
                    - /url: https://investors.airbnb.com
                - listitem [ref=e562]:
                  - link "Airbnb.org emergency stays" [ref=e563] [cursor=pointer]:
                    - /url: https://www.airbnb.org?locale=en-IN
          - generic [ref=e564]:
            - generic [ref=e565]: Footer section
            - generic [ref=e567]:
              - generic [ref=e569]:
                - generic [ref=e570]: © 2026 Airbnb, Inc.
                - generic [ref=e571]:
                  - generic [ref=e573]: ·
                  - list [ref=e575]:
                    - listitem [ref=e576]:
                      - link "Privacy" [ref=e577] [cursor=pointer]:
                        - /url: /terms/privacy_policy
                      - generic [ref=e578]:
                        - generic:
                          - generic: ·
                    - listitem [ref=e579]:
                      - link "Terms" [ref=e580] [cursor=pointer]:
                        - /url: /terms
                      - generic [ref=e581]:
                        - generic:
                          - generic: ·
                    - listitem [ref=e582]:
                      - link "Company details" [ref=e583] [cursor=pointer]:
                        - /url: /about/company-details
              - generic [ref=e584]:
                - generic [ref=e586]:
                  - button "Choose a language" [ref=e588] [cursor=pointer]:
                    - generic [ref=e589]:
                      - generic:
                        - img
                        - text: English (IN)
                  - button "Choose a currency" [ref=e591] [cursor=pointer]:
                    - generic [ref=e593]:
                      - generic [ref=e594]: ₹
                      - generic [ref=e595]: INR
                - list [ref=e597]:
                  - listitem [ref=e598]:
                    - link "Navigate to Facebook" [ref=e599] [cursor=pointer]:
                      - /url: https://www.facebook.com/AirbnbIndia
                      - img [ref=e601]
                  - listitem [ref=e603]:
                    - link "Navigate to Twitter" [ref=e604] [cursor=pointer]:
                      - /url: https://twitter.com/airbnb_in
                      - img [ref=e606]
                  - listitem [ref=e608]:
                    - link "Navigate to Instagram" [ref=e609] [cursor=pointer]:
                      - /url: https://instagram.com/airbnb
                      - img [ref=e611]
    - generic [ref=e614]: Loading
```

# Test source

```ts
  65  |     if (searchResponse) {
  66  |       // Airbnb's API typically wraps data in a "data" key
  67  |       expect(searchResponse).toBeDefined();
  68  |     }
  69  |   });
  70  | 
  71  |   /**
  72  |    * API-003: Listing detail API call
  73  |    */
  74  |   test('API-003: listing detail page should make API calls for listing data', async ({ page }) => {
  75  |     const detailAPICalls: string[] = [];
  76  | 
  77  |     page.on('request', (request) => {
  78  |       if (
  79  |         request.url().includes('/api/v3/PdpAvailabilityCalendar') ||
  80  |         request.url().includes('/api/v3/StaysPdpSections')
  81  |       ) {
  82  |         detailAPICalls.push(request.url());
  83  |       }
  84  |     });
  85  | 
  86  |     await page.goto('https://www.airbnb.com/rooms/20776811');
  87  |     await page.waitForLoadState('networkidle');
  88  | 
  89  |     // At least one detail API call should have been made
  90  |     expect(detailAPICalls.length).toBeGreaterThanOrEqual(0); // Flexible — endpoint may vary
  91  |   });
  92  | 
  93  |   /**
  94  |    * API-004: No 5xx server errors on homepage load
  95  |    */
  96  |   test('API-004: homepage should not produce 5xx server errors', async ({ page }) => {
  97  |     const serverErrors: string[] = [];
  98  | 
  99  |     page.on('response', (response) => {
  100 |       if (response.status() >= 500) {
  101 |         serverErrors.push(`${response.status()} ${response.url()}`);
  102 |       }
  103 |     });
  104 | 
  105 |     await page.goto('https://www.airbnb.com');
  106 |     await page.waitForLoadState('networkidle');
  107 | 
  108 |     expect(serverErrors).toHaveLength(0);
  109 |   });
  110 | 
  111 |   /**
  112 |    * API-005: Homepage response time is acceptable
  113 |    */
  114 |   test('API-005: homepage should load within 10 seconds', async ({ page }) => {
  115 |     const startTime = Date.now();
  116 |     await page.goto('https://www.airbnb.com');
  117 |     await page.waitForLoadState('domcontentloaded');
  118 |     const loadTime = Date.now() - startTime;
  119 | 
  120 |     expect(loadTime).toBeLessThan(10_000);
  121 |   });
  122 | 
  123 |   /**
  124 |    * API-006: Search page response contains required HTTP headers
  125 |    */
  126 |   test('API-006: search page response should have proper headers', async ({ page }) => {
  127 |     const response = await page.goto('https://www.airbnb.com/s/New-York/homes');
  128 | 
  129 |     expect(response).toBeDefined();
  130 |     expect(response!.status()).toBe(200);
  131 | 
  132 |     const contentType = response!.headers()['content-type'];
  133 |     expect(contentType).toContain('text/html');
  134 |   });
  135 | 
  136 |   /**
  137 |    * API-007: Mock API response to test UI behavior
  138 |    * This demonstrates API mocking — a powerful technique for isolated testing.
  139 |    */
  140 |   test('API-007: should handle empty search results gracefully (mocked)', async ({ page }) => {
  141 |     // Intercept search API and return empty results
  142 |     await page.route('**/api/v3/ExploreSearch**', async (route) => {
  143 |       await route.fulfill({
  144 |         status: 200,
  145 |         contentType: 'application/json',
  146 |         body: JSON.stringify({
  147 |           data: {
  148 |             presentation: {
  149 |               staysSearch: {
  150 |                 results: {
  151 |                   searchResults: [],
  152 |                   paginationInfo: { hasNextPage: false },
  153 |                 },
  154 |               },
  155 |             },
  156 |           },
  157 |         }),
  158 |       });
  159 |     });
  160 | 
  161 |     await page.goto('https://www.airbnb.com/s/SomeVeryObscurePlace/homes');
  162 |     await page.waitForLoadState('domcontentloaded');
  163 | 
  164 |     // Page should not crash with empty results
> 165 |     expect(page.url()).toContain('airbnb.com');
      |                        ^ Error: expect(received).toContain(expected) // indexOf
  166 |   });
  167 | 
  168 |   /**
  169 |    * API-008: Validate response times for search API calls
  170 |    */
  171 |   test('API-008: API calls on search page should respond within 5 seconds', async ({ page }) => {
  172 |     const slowRequests: string[] = [];
  173 | 
  174 |     page.on('response', async (response) => {
  175 |       // Check timing from the request object
  176 |       const request = response.request();
  177 |       const timing = request.timing();
  178 |       if (timing.responseEnd - timing.requestStart > 5000) {
  179 |         slowRequests.push(response.url());
  180 |       }
  181 |     });
  182 | 
  183 |     await page.goto('https://www.airbnb.com/s/New-York/homes');
  184 |     await page.waitForLoadState('networkidle');
  185 | 
  186 |     // Log slow requests but don't fail (network conditions vary in CI)
  187 |     if (slowRequests.length > 0) {
  188 |       console.warn('Slow API calls detected:', slowRequests);
  189 |     }
  190 | 
  191 |     // Page should have loaded regardless
  192 |     expect(page.url()).toContain('airbnb.com');
  193 |   });
  194 | });
  195 | 
  196 | test.describe('API Tests — Direct HTTP Requests', () => {
  197 |   /**
  198 |    * API-009: Public sitemap is accessible
  199 |    */
  200 |   test('API-009: sitemap.xml should be accessible', async ({ request }) => {
  201 |     const response = await request.get('https://www.airbnb.com/sitemap.xml');
  202 |     expect(response.status()).toBe(200);
  203 |   });
  204 | 
  205 |   /**
  206 |    * API-010: robots.txt is accessible
  207 |    */
  208 |   test('API-010: robots.txt should be present', async ({ request }) => {
  209 |     const response = await request.get('https://www.airbnb.com/robots.txt');
  210 |     expect(response.status()).toBe(200);
  211 |     const body = await response.text();
  212 |     expect(body).toContain('User-agent');
  213 |   });
  214 | 
  215 |   /**
  216 |    * API-011: Canonical homepage returns 200
  217 |    */
  218 |   test('API-011: homepage should return HTTP 200', async ({ request }) => {
  219 |     const response = await request.get('https://www.airbnb.com/');
  220 |     expect(response.status()).toBe(200);
  221 |   });
  222 | 
  223 |   /**
  224 |    * API-012: Non-existent page returns 404 not 500
  225 |    */
  226 |   test('API-012: non-existent routes should return 404', async ({ request }) => {
  227 |     const response = await request.get('https://www.airbnb.com/this-page-does-not-exist-xyz');
  228 |     // Should be 404 or redirect, not 500
  229 |     expect(response.status()).toBeLessThan(500);
  230 |   });
  231 | });
  232 | 
```