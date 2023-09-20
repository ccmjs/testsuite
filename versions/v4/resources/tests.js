/**
 * @overview unit tests of ccm component for unit tests
 * @author André Kless <andre.kless@web.de> (https://github.com/akless) 2019, 2023
 * @license The MIT License (MIT)
 */

ccm.files["tests.js"] = {
  setup: (suite) => (suite.numbers = [1, 2, 3]),
  tests: {
    passed: (suite) => suite.passed(),
    failed: (suite) => suite.failed(),
    assertTrue: (suite) => suite.assertTrue(true),
    assertFalse: (suite) => suite.assertFalse(false),
    assertSame: (suite) => suite.assertSame(suite.numbers, [1, 2, 3]),
    assertEquals: (suite) => suite.assertEquals(suite.numbers, [1, 2, 3]),
    assertNotSame: (suite) => suite.assertNotSame(suite.numbers, [1, 2, 3]),
    assertNotEquals: (suite) => suite.assertNotEquals(suite.numbers, [1, 2, 3]),
  },
  finally: (suite) => delete suite.numbers,
  subpackage: {
    tests: [
      function catchError() {
        throw new Error();
      },
      function hasNumbers(suite) {
        suite.assertTrue(suite.numbers);
      },
      function eachNumber(suite) {
        suite.assertEquals(suite.numbers[0], 1);
        suite.assertEquals(suite.numbers[1], 2);
        suite.assertEquals(suite.numbers[2], 3);
      },
    ],
  },
};
