# 📚 Automation Framework Tutoring Guide
## Airbnb E2E Automation — Learn as You Build

---

## Module 1: Why This Stack?

### The Big Picture
When a company hires a "SDET" (Software Development Engineer in Test) or "Automation Engineer", they want someone who can build a **framework**, not just write scripts. The difference:

| Script | Framework |
|--------|-----------|
| `test1.ts` with hardcoded values | Reusable POMs, fixtures, data files |
| Works once | Works reliably across teams and CI |
| Hard to maintain | Easy to extend and update |
| No structure | Clear patterns everyone follows |

This project IS a framework. Each piece has a specific job.

---

## Module 2: Page Object Model (POM) — Deep Dive

### Why POM Exists
Imagine you write 50 tests, and they all do this:

```typescript
await page.locator('[data-testid="structured-search-input-field-query"]').fill('Paris');
```

Now Airbnb's engineering team renames that `data-testid`. You have to update 50 files. 😱

With POM:
```typescript
// HomePage.ts — ONE place to change
this.destinationInput = page.locator('[data-testid="structured-search-input-field-query"]');

// In every test — unchanged
await homePage.enterDestination('Paris');
```

**One selector change = one file to update. Always.**

### The Hierarchy in This Project

```
BasePage (abstract)
  └── HomePage
  └── SearchResultsPage
  └── ListingDetailPage
  └── LoginPage
  └── CheckoutPage
  └── WishlistPage
```

`BasePage` holds methods EVERY page needs: `navigate()`, `waitForPageLoad()`, `dismissModals()`, `takeScreenshot()`, `assertURL()`.

Subclasses inherit these for free via `extends BasePage`.

### POM Best Practices Demonstrated

**1. Constructor defines all locators upfront**
```typescript
constructor(page: Page) {
  super(page);
  this.destinationInput = page.getByPlaceholder('Search destinations');
  this.searchSubmitButton = page.locator('[data-testid="search-btn"]');
}
```
Why? All selectors are visible in one place. Easy to audit and update.

**2. Methods describe USER INTENT, not implementation**
```typescript
// ❌ Implementation-focused (what)
async clickButtonWithIdSearchBtn() { ... }

// ✅ Intent-focused (why)
async performSearch(params: SearchParams) { ... }
```

**3. Locator fallbacks for resilience**
```typescript
this.destinationInput = page
  .getByPlaceholder('Search destinations')        // Preferred
  .or(page.locator('[data-testid="query"]'));      // Fallback
```
Airbnb's selectors change — two options means one breaking is fine.

---

## Module 3: Custom Fixtures — Dependency Injection

### The Problem Without Fixtures
```typescript
// Every test file WITHOUT fixtures:
import { test, expect } from '@playwright/test';
import { HomePage } from '../../src/pages/HomePage';
import { SearchResultsPage } from '../../src/pages/SearchResultsPage';

test('search test', async ({ page }) => {
  const homePage = new HomePage(page);     // Repeated
  const searchPage = new SearchResultsPage(page); // in every
  // ...                                   // test file
});
```

### The Solution: Custom Fixtures
```typescript
// pageFixtures.ts — define once
export const test = base.extend<AirbnbFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  searchPage: async ({ page }, use) => {
    await use(new SearchResultsPage(page));
  },
});

// Any test file — use anywhere
import { test } from '../../src/fixtures/pageFixtures';

test('search test', async ({ homePage, searchPage }) => {
  // POMs are injected automatically!
  await homePage.goto();
  await searchPage.assertResultsDisplayed();
});
```

This is **Dependency Injection** — a core software engineering pattern. In interviews, when asked "how do you share state across tests?", this is the professional answer.

---

## Module 4: Playwright Selectors — Priority Order

Playwright recommends locators in this priority order (most resilient first):

1. **Role-based** (best): `page.getByRole('button', { name: 'Reserve' })`
   - Mimics how screen readers work
   - Accessible and semantic
   - Survives style/class changes

2. **Label-based**: `page.getByLabel('Email address')`
   - Good for form inputs
   - Stable as long as the label text doesn't change

3. **Placeholder**: `page.getByPlaceholder('Search destinations')`
   - Good fallback for inputs

4. **Data-testid** (still good): `page.locator('[data-testid="search-btn"]')`
   - Requires collaboration with developers to add these attributes
   - Most projects add them specifically for automation

5. **CSS/XPath** (avoid when possible): `page.locator('.btn-primary')`
   - Breaks on visual redesigns
   - Not semantic

In this framework, we use #1-4 and avoid #5.

---

## Module 5: BDD/Gherkin — Why It Matters

### The Business Case
BDD (Behavior-Driven Development) closes the gap between:
- **Business** ("users should be able to search")
- **Developers** (implements the feature)
- **QA** (writes automated tests)

All three groups collaborate on the feature file. No surprises.

### Gherkin Anatomy
```gherkin
Feature: Property Search          ← What feature?
  
  Scenario: Basic search          ← One user story
    Given I am on the homepage    ← Precondition (state)
    When I search for "Paris"     ← Action (trigger)
    Then I see search results     ← Outcome (assertion)
```

**Given** = "The world is in this state before I act"
**When** = "I do this one thing"
**Then** = "I expect to see this"

### Scenario Outlines — Data-Driven BDD
```gherkin
Scenario Outline: Search different cities
  When I search for "<destination>"
  Then I see results

  Examples:
    | destination  |
    | New York     |
    | Paris        |
    | Tokyo        |
```
One scenario runs 3 times with different data. No code duplication.

### Step Definitions
Steps are REUSABLE across features:
```typescript
// Defined ONCE in searchSteps.ts
When('I enter {string} as the destination', async (destination: string) => {
  await homePage.enterDestination(destination);
});
```

Used in MULTIPLE feature files:
```gherkin
# search.feature
When I enter "Paris" as the destination

# booking.feature  
When I enter "London" as the destination
```

---

## Module 6: API Testing Strategies

### Strategy 1: Network Interception
Intercept calls the browser makes, validate the contract:
```typescript
page.on('response', async (response) => {
  if (response.url().includes('/api/v3/ExploreSearch')) {
    const data = await response.json();
    expect(data.results).toBeDefined();
  }
});
await page.goto('/s/New-York/homes');
```

**Use for**: Validating that UI actions trigger the right API calls.

### Strategy 2: Route Mocking
Override what the server returns:
```typescript
await page.route('**/api/v3/ExploreSearch**', route =>
  route.fulfill({
    status: 200,
    body: JSON.stringify({ results: [] }) // Empty results
  })
);
```

**Use for**: Testing edge cases (empty results, errors) without needing the backend to be in that state.

### Strategy 3: Direct HTTP Requests (no browser)
```typescript
test('sitemap is accessible', async ({ request }) => {
  const response = await request.get('https://www.airbnb.com/sitemap.xml');
  expect(response.status()).toBe(200);
});
```

**Use for**: Health checks, API contract tests, no UI needed.

---

## Module 7: Test Design Principles

### FIRST Principles for Good Tests

**F — Fast**: Tests should run in seconds, not minutes.
- Use `page.goto(directURL)` instead of navigating through the UI
- Use API mocking to avoid slow backend calls

**I — Independent**: Tests don't depend on each other.
- Each test sets up its own data in `test.beforeEach`
- Never rely on test order

**R — Repeatable**: Same result every run.
- Use future dates (not hardcoded: `new Date() + 7 days`)
- Clean up state after tests

**S — Self-validating**: Clear pass/fail.
- Use specific assertions: `expect(count).toBeGreaterThan(0)`
- Don't use `console.log` to verify — use `expect`

**T — Timely**: Write tests alongside features, not after.

### Test IDs in This Framework
Every test has a unique ID:
```typescript
test('SEARCH-001: should display results for a valid destination', ...)
test('AUTH-003: should show error message with invalid credentials', ...)
```

These IDs map to your test management tool (Jira, TestRail). In interviews, this shows you understand enterprise testing workflows.

---

## Module 8: CI/CD Pipeline Explained

### The `.github/workflows/e2e-tests.yml` Breakdown

```yaml
on:
  push:              # Run on every code push
  pull_request:      # Run on PRs (gate before merge)
  schedule:          # Run daily as a health check
  workflow_dispatch: # Run manually on demand
```

### Jobs Run in This Order

```
lint ──────────────────────────────────────────────────────► (must pass)
        │
        ├──► playwright-tests (Chrome shard 1) ──► merge-reports
        ├──► playwright-tests (Chrome shard 2) ──► merge-reports
        ├──► playwright-tests (Firefox shard 1) ─► merge-reports
        ├──► playwright-tests (Firefox shard 2) ─► merge-reports
        ├──► api-tests ───────────────────────────────────────►
        └──► bdd-tests ───────────────────────────────────────►
```

**Sharding** splits your test suite across multiple machines:
- Shard 1/2 runs tests 1–50
- Shard 2/2 runs tests 51–100
- Total time cut in half!

### Secrets Management
```yaml
env:
  TEST_USER_EMAIL: ${{ secrets.TEST_USER_EMAIL }}
```
In GitHub: Settings → Secrets → Add secret. Never hardcode credentials.

---

## Module 9: Common Patterns in This Project

### Waiting Correctly
```typescript
// ❌ Bad — arbitrary sleep
await page.waitForTimeout(5000);

// ✅ Better — wait for element
await locator.waitFor({ state: 'visible' });

// ✅ Best — wait for network to settle
await page.waitForLoadState('networkidle');

// ✅ Best for dynamic content
await expect(locator).toBeVisible({ timeout: 10_000 });
```

### Handling Airbnb Specifics
- **Modals**: Always call `dismissModals()` at the start of tests
- **Autocomplete**: Fill destination → wait 1s → click first suggestion
- **Dates**: Always use `new Date()` + offset, never hardcoded dates
- **New tabs**: Airbnb opens listings in new tabs, capture with `context.waitForEvent('page')`

### Selectors for SPAs
Airbnb is a React SPA (Single Page App). Key techniques:
```typescript
// Wait for React to render
await page.waitForLoadState('networkidle');

// Elements may not exist yet — use waitFor
await element.waitFor({ state: 'visible', timeout: 10_000 });

// Dynamic elements — use data-testid when available
page.locator('[data-testid="card-container"]')
```

---

## Module 10: Interview Talking Points

When asked about this project in interviews:

### "Tell me about your automation framework"
> "I built a complete E2E automation framework for Airbnb using Playwright and TypeScript. The core pattern is Page Object Model — each page of the application has a dedicated class that encapsulates all the selectors and interactions. On top of that, I used Playwright's fixture system for dependency injection, which means page objects are automatically available in every test without boilerplate.
>
> I also implemented BDD using Cucumber and Gherkin — the feature files are readable by non-technical stakeholders, and the step definitions map those Gherkin steps to actual Playwright actions. For API coverage, I used network interception to validate API contracts and route mocking to test edge cases without depending on backend state.
>
> The whole thing runs in CI/CD via GitHub Actions with parallel execution across Chrome and Firefox, sharded into 2 per browser, and it generates HTML reports with screenshots and video on failure."

### "Why POM over raw Playwright?"
> "Maintainability. If Airbnb's engineering team renames a data-testid attribute, I fix it in one page object file rather than hunting through 50 test files. POM also makes tests readable — `homePage.performSearch({ destination: 'Paris' })` is self-documenting."

### "How do you handle flaky tests?"
> "Three strategies: First, proper waiting — I use `waitFor` state conditions instead of arbitrary timeouts. Second, retries — Playwright's config includes `retries: 2` on CI, with trace recording on retry so I can see exactly what happened. Third, resilient selectors — I prefer role-based and data-testid selectors over CSS classes that change with redesigns."

### "What's the difference between E2E and API tests?"
> "E2E tests validate the full user journey through a real browser — they're slower but catch integration issues across the whole stack. API tests either intercept network requests made by the browser or hit endpoints directly — they're faster, more focused, and great for validating backend contracts. I use both: E2E for critical user flows, API tests for contract validation and edge cases."

---

## Quick Reference: Commands

```bash
# Development
npx playwright test --debug              # Step through tests
npx playwright test --ui                 # Visual test runner
npx playwright codegen airbnb.com        # Record interactions → generate code!

# Running subsets
npx playwright test --grep "SEARCH-001"  # One test by name
npx playwright test --grep "@smoke"       # By tag
npx playwright test tests/e2e/search.spec.ts  # One file

# Debugging failures
npx playwright show-report               # View last HTML report
npx playwright show-trace trace.zip      # Step through a trace file
```

---

*This framework was built as a portfolio project demonstrating production-grade test automation skills with Playwright, TypeScript, POM, BDD/Cucumber, and CI/CD.*
