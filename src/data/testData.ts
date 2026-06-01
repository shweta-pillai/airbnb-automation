/**
 * Test data for Airbnb automation tests.
 *
 * BEST PRACTICE: Centralizing test data means you only update one file
 * when something changes. Never hardcode values inside test files.
 */

export const TEST_USERS = {
  validUser: {
    email: process.env.TEST_USER_EMAIL ?? 'test@example.com',
    password: process.env.TEST_USER_PASSWORD ?? 'TestPassword123!',
  },
  invalidUser: {
    email: 'nonexistent@nowhere.com',
    password: 'WrongPassword!',
  },
  malformedEmail: {
    email: 'not-an-email',
    password: 'somepass',
  },
} as const;

export const SEARCH_QUERIES = {
  popular: {
    destination: 'New York',
    state: 'NY',
    country: 'United States',
  },
  beach: {
    destination: 'Miami, Florida',
    state: 'FL',
  },
  mountain: {
    destination: 'Aspen, Colorado',
    state: 'CO',
  },
  international: {
    destination: 'Paris, France',
    country: 'France',
  },
} as const;

export const SEARCH_DATES = {
  weekendGetaway: {
    checkInDaysFromNow: 7,
    checkOutDaysFromNow: 9,
  },
  weekLong: {
    checkInDaysFromNow: 14,
    checkOutDaysFromNow: 21,
  },
  monthAhead: {
    checkInDaysFromNow: 30,
    checkOutDaysFromNow: 37,
  },
} as const;

export const GUEST_CONFIGS = {
  solo: { adults: 1, children: 0, infants: 0 },
  couple: { adults: 2, children: 0, infants: 0 },
  family: { adults: 2, children: 2, infants: 1 },
  group: { adults: 5, children: 0, infants: 0 },
} as const;

export const PAYMENT_TEST_CARDS = {
  // These are Stripe test card numbers — safe to use in staging environments
  visa: {
    number: '4242424242424242',
    expiry: '12/28',
    cvv: '123',
    name: 'Test User',
  },
  mastercard: {
    number: '5555555555554444',
    expiry: '12/28',
    cvv: '123',
    name: 'Test User',
  },
  declined: {
    number: '4000000000000002',
    expiry: '12/28',
    cvv: '123',
    name: 'Test User',
  },
} as const;

export const URLS = {
  home: '/',
  search: '/s/',
  wishlists: '/wishlists',
  trips: '/trips',
  inbox: '/rooms',
  becomeHost: '/host/homes',
  help: '/help',
  login: '/login',
} as const;

export const EXPECTED_TEXTS = {
  homeTitle: 'Airbnb',
  searchResultsHeading: /stays in/i,
  loginModalTitle: 'Log in or sign up',
  reserveButtonText: 'Reserve',
  confirmAndPayText: 'Confirm and pay',
} as const;

export const TIMEOUTS = {
  short: 3_000,
  medium: 10_000,
  long: 30_000,
  extraLong: 60_000,
} as const;
