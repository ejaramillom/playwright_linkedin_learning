// test in headed mode

npx playwright test --headed

// test a particular project

npx playwright test --project chromium

// multiple projects

npx playwright test --project chromium --project firefox

// run specific test

npx playwright test tests/example/my_test

// run specifically tagged tests

// test file
test('get started link', { tag: '@first' }, async ({ page }) => {})

// then in CLI
npx playwright test --grep @first 

// or run all but the first tagged
npx playwright test --grep-invert @first  
