// test in headed mode

npx playwright test --headed

// test a particular project

npx playwright test --project chromium

// multiple projects

npx playwright test --project chromium --project firefox

// run specific test

npx playwright test tests/example/my_test