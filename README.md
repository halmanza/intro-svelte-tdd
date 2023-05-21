# Intro to SvelteKit 

![workflow](https://github.com/halmanza/intro-svelte-tdd/actions/workflows/main.yaml/badge.svg?branch=main)
## The objective of this project is to build a simple svelte app with Test Driven Development in mind.

---

## Quick start directions

1. `npm install` after you have pulled this repository.
2. `npm run dev` to run development server.
3. `npm run build` for production build. 
4. `npm run preview` to preview production build.

## Testing Commands
- Unit tests, `npm run test:unit`
- Playwright headless browser testing, `npm run test`
    - *You will need to have playwright installed and necessary dependencies.*
    - The failure will list these commands needing to be run if not available `npx playwright install` and `npx playwright install-deps`

## Continuous Integration Pipeline
We setup our project with Github actions to provide a quick feedback loop when we push or a pull request is made on the `main` branch.
The main benefit of this loop is it runs our current tests (unit/integration) to verify if our code is properly tested. We gain instant feedback from our pipeline which is run in a
ubuntu container and using the `matrix` strategy we can run tests in different Node environments to verify breaking changes etc.

```yaml
name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18.x, 19.x]

    steps:
      - uses: actions/checkout@v3
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'npm'

      - name: Install dependencies   
        run: npm ci

      - name: Install playwright and dependencies
        run: npx playwright install && npx playwright install-deps

      - name: Run unit tests 
        run: npm run test:unit

      - name: Run Playwright tests
        run: npm test
```

*Target release environments require specific adapters that can be found [here](https://kit.svelte.dev/docs/adapters)*
