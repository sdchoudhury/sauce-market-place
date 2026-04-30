# Automation Exercise Cypress

A comprehensive end-to-end testing framework using Cypress for automated UI testing.

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Running Tests](#running-tests)
- [Configuration](#configuration)
- [Best Practices](#best-practices)

## Overview

This project provides an automated testing framework using Cypress for testing web applications. It includes test suites, fixtures, and custom commands for efficient test automation.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

## Installation

```bash
# Clone the repository
git clone https://github.com/sdchoudhury/sauce-market-place.git

# Navigate to the project directory
cd automation-exercise-cypress

# Install dependencies
npm install
```

## Project Structure

```
automation-exercise-cypress/
├── cypress/
│   ├── e2e/              # End-to-end test files
│   ├── fixtures/         # Test data and fixtures
│   ├── support/          # Custom commands and utilities
│   └── plugins/          # Cypress plugins configuration
├── cypress.config.js     # Cypress configuration
├── package.json          # Project dependencies
└── README.md             # This file
```

## Running Tests

```bash
# Open Cypress Test Runner
npm run open

# Run all tests headless
npm run test

# Run tests with specific browser. in headed mode
npx cypress run --spec "**/checkoutTest.cy.js" --headed
```

## Configuration

Configure Cypress settings in `cypress.config.js`:

- Base URL
- Viewport size
- Timeouts
- Environment variables
- Custom plugins

## Best Practices

- Use page object models for maintainability
- Create reusable custom commands
- Use meaningful test descriptions
- Implement proper waits and assertions
- Keep tests independent and isolated
- Use fixtures for test data