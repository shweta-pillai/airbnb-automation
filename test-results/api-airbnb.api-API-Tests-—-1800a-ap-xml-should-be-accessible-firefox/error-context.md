# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\airbnb.api.spec.ts >> API Tests — Direct HTTP Requests >> API-009: sitemap.xml should be accessible
- Location: tests\api\airbnb.api.spec.ts:200:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404
```

# Test source

```ts
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
  165 |     expect(page.url()).toContain('airbnb.com');
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
> 202 |     expect(response.status()).toBe(200);
      |                               ^ Error: expect(received).toBe(expected) // Object.is equality
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