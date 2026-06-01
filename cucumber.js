// cucumber.js — Configuration for Cucumber/BDD test runner
module.exports = {
  default: {
    // Where to find feature files
    paths: ['features/**/*.feature'],

    // Where to find step definitions
    require: [
      'features/step-definitions/**/*.ts',
      'features/support/**/*.ts',
    ],

    // Use ts-node to run TypeScript
    requireModule: ['ts-node/register'],

    // Reporting format
    format: [
      'progress-bar',
      'html:reports/cucumber-report.html',
      'json:reports/cucumber-results.json',
    ],

    // Tags to run (override with --tags on CLI)
    // e.g., npx cucumber-js --tags "@smoke"
    tags: 'not @skip',

    // Parallel execution
    parallel: 2,
  },

  // Smoke test profile — fast subset
  smoke: {
    paths: ['features/**/*.feature'],
    require: [
      'features/step-definitions/**/*.ts',
      'features/support/**/*.ts',
    ],
    requireModule: ['ts-node/register'],
    tags: '@smoke',
    format: ['progress-bar'],
  },
};
