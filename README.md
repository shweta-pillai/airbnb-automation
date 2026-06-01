# 🏠 Airbnb E2E Automation Framework

> A production-grade test automation framework for the Airbnb web application, built with **Playwright**, **TypeScript**, **Page Object Model (POM)**, **BDD/Cucumber (Gherkin)**, and **API testing**.

[![CI](https://github.com/yourusername/airbnb-automation/actions/workflows/e2e-tests.yml/badge.svg)](https://github.com/yourusername/airbnb-automation/actions)
![Playwright](https://img.shields.io/badge/Playwright-1.44-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue)
![Cucumber](https://img.shields.io/badge/Cucumber-10.3-brightgreen)

---

## 📐 Architecture Overview

```
airbnb-automation/
├── src/
│   ├── pages/                  # Page Object Models (POM)
│   │   ├── BasePage.ts         # Abstract base — shared methods
│   │   ├── HomePage.ts         # Landing page interactions
│   │   ├── SearchResultsPage.ts# Search results & filters
│   │   ├── ListingDetailPage.ts# Individual property page
│   │   ├── LoginPage.ts        # Authentication modal
│   │   ├── CheckoutPage.ts     # Booking/payment flow
│   │   └── WishlistPage.ts     # Saved listings
│   ├── fixtures/
│   │   └── pageFixtures.ts     # Custom Playwright fixtures
│   ├── utils/
│   │   └── helpers.ts          # Date, URL, string utilities
│   └── data/
│       └── testData.ts         # Centralized test data
│
├── tests/
│   ├── e2e/                    # End-to-end UI tests
│   │   ├── homepage.spec.ts
│   │   ├── search.spec.ts
│   │   ├── listing.spec.ts
│   │   ├── auth.spec.ts
│   │   └── booking.spec.ts
│   └── api/                    # API & network tests
│       └── airbnb.api.spec.ts
│
├── features/                   # BDD Feature files (Gherkin)
│   ├── search.feature
│   ├── authentication.feature
│   ├── listing.feature
│   └── step-definitions/       # Step implementation (TypeScript)
│       ├── searchSteps.ts
│       ├── authSteps.ts
│       └── listingSteps.ts
│
├── .github/
│   └── workflows/
│       └── e2e-tests.yml       # CI/CD pipeline (GitHub Actions)
│
├── playwright.config.ts        # Playwright configuration
├── cucumber.js                 # Cucumber configuration
└── tsconfig.json               # TypeScript configuration
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18 or higher
- npm 9+
- Git

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/yourusername/airbnb-automation.git
cd airbnb-automation

# 2. Install dependencies
npm install

# 3. Install Playwright browsers
npx playwright install

# 4. Set up environment variables
cp .env.example .env
# Edit .env with your test credentials
```

### Run Tests

```bash
# All tests (headless)
npm test

# Headed mode (watch the browser)
npm run test:headed

# Interactive Playwright UI
npm run test:ui

# Only search tests
npm run test:search

# Only API tests
npm run test:api

# BDD/Cucumber tests
npm run test:bdd

# Specific browser
npx playwright test --project=firefox

# View HTML report
npm run test:report
```

---

## 🏗️ Key Concepts

### 1. Page Object Model (POM)

The POM pattern separates **test logic** from **page interactions**:

```typescript
// ❌ Without POM — fragile, non-reusable
test('search test', async ({ page }) => {
  await page.locator('[data-testid="query-input"]').fill('New York');
  await page.locator('[data-testid="search-btn"]').click();
});

// ✅ With POM — readable, maintainable, reusable
test('search test', async ({ homePage, searchPage }) => {
  await homePage.enterDestination('New York');
  await homePage.clickSearch();
  await searchPage.assertResultsDisplayed();
});
```

**When Airbnb changes a selector, you fix it in ONE place — the page object.**

### 2. Custom Fixtures

Fixtures inject pre-built page objects into every test:

```typescript
// Define once in src/fixtures/pageFixtures.ts
export const test = base.extend<AirbnbFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
});

// Use in any test — no boilerplate
test('my test', async ({ homePage }) => {
  await homePage.goto();
});
```

### 3. BDD with Gherkin/Cucumber

Feature files are readable by non-technical stakeholders:

```gherkin
Scenario: Search for properties in New York
  Given I am on the Airbnb homepage
  When I enter "New York" as the destination
  And I select check-in date 7 days from now
  And I set 2 adults as guests
  And I click the search button
  Then I should see search results
  And at least 5 listings should be displayed
```

### 4. API Testing

Two patterns used:

**Network Interception** — Capture real browser API calls:
```typescript
page.on('response', async (response) => {
  if (response.url().includes('/api/v3/ExploreSearch')) {
    const data = await response.json();
    // Validate the API contract
  }
});
```

**API Mocking** — Control responses for isolated testing:
```typescript
await page.route('**/api/v3/ExploreSearch**', route =>
  route.fulfill({ status: 200, body: JSON.stringify(mockData) })
);
```

---

## 📊 Test Suites

| Suite | Files | Tests | Type |
|-------|-------|-------|------|
| Homepage | `homepage.spec.ts` | 8 | E2E |
| Search | `search.spec.ts` | 9 | E2E |
| Listing Detail | `listing.spec.ts` | 10 | E2E |
| Authentication | `auth.spec.ts` | 6 | E2E |
| API | `airbnb.api.spec.ts` | 12 | API |
| BDD Search | `search.feature` | 5 | BDD |
| BDD Auth | `authentication.feature` | 5 | BDD |
| BDD Listing | `listing.feature` | 8 | BDD |

---

## 🔑 Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `BASE_URL` | No | Default: `https://www.airbnb.com` |
| `TEST_USER_EMAIL` | Yes* | Test account email |
| `TEST_USER_PASSWORD` | Yes* | Test account password |
| `HEADLESS` | No | Default: `true` |
| `SLOW_MO` | No | Delay between actions (ms) |

*Required only for auth-protected test flows.

---

## 🔄 CI/CD Pipeline

The GitHub Actions workflow (`e2e-tests.yml`) runs:

1. **Lint & Type Check** — on every push
2. **E2E Tests** — parallel across Chrome + Firefox, sharded 2x
3. **API Tests** — independent fast-running suite
4. **BDD Smoke Tests** — Cucumber smoke tag subset
5. **Report Merge** — consolidated HTML report artifact

### Trigger Strategy
- `push` to main/develop → full suite
- `pull_request` → full suite
- Daily cron → smoke tests only

---

## 🧪 Writing New Tests

### New E2E Test

```typescript
// tests/e2e/myfeature.spec.ts
import { test, expect } from '../../src/fixtures/pageFixtures';

test.describe('My Feature', () => {
  test('TEST-001: should do something', async ({ homePage }) => {
    await homePage.goto();
    // ... your test
  });
});
```

### New Page Object

```typescript
// src/pages/MyPage.ts
import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class MyPage extends BasePage {
  readonly myButton: Locator;

  constructor(page: Page) {
    super(page);
    this.myButton = page.getByRole('button', { name: 'My Button' });
  }

  async clickMyButton(): Promise<void> {
    await this.myButton.click();
  }
}
```

### New BDD Scenario

```gherkin
# features/my-feature.feature
@my-feature
Scenario: My new scenario
  Given I am on the Airbnb homepage
  When I do something
  Then I should see the result
```

---

## 📈 Highlights

This project demonstrates:

- ✅ **Playwright** with TypeScript — modern browser automation
- ✅ **Page Object Model** — SOLID design principles in test code
- ✅ **BDD/Cucumber** — stakeholder-readable test specifications
- ✅ **API Testing** — network interception + direct HTTP requests
- ✅ **CI/CD** — GitHub Actions with parallel execution and sharding
- ✅ **Custom Fixtures** — clean dependency injection for tests
- ✅ **Cross-browser** — Chrome, Firefox, Safari, mobile viewports
- ✅ **Test Data Management** — centralized, environment-aware
- ✅ **Reporting** — HTML reports, JUnit XML for CI integration

---

## 🤝 Contributing

1. Branch from `develop`: `git checkout -b feature/your-test-name`
2. Write tests following existing conventions
3. Run `npm run type-check` and `npm run lint` before pushing
4. Open a pull request — CI runs automatically

---

## 📚 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| [Playwright](https://playwright.dev) | ^1.44 | Browser automation |
| [TypeScript](https://www.typescriptlang.org) | ^5.4 | Type safety |
| [Cucumber](https://cucumber.io) | ^10.3 | BDD framework |
| [Node.js](https://nodejs.org) | ≥18 | Runtime |
| [GitHub Actions](https://github.com/features/actions) | — | CI/CD |
