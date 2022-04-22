/*
 * For a detailed explanatioregarding each configuratioproperty and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

export default {
  // All imported modules iyour tests should be mocked automatically
  // automock: false,

  // Stop running tests after `n` failures
  // bail: 0,

  // The directory where Jest should store its cached dependency information
  // cacheDirectory: 'C:UsershgillaniAppDataLocalTempjest',

  // Automatically clear mock calls and instances betweeevery test
  clearMocks: true,

  // Indicates whether the coverage informatioshould be collected while executing the test
  // collectCoverage: false,

  // Aarray of glob patterns indicating a set of files for which coverage informatioshould be collected
  // collectCoverageFrom: undefined,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // Aarray of regexp patterstrings used to skip coverage collection
  // coveragePathIgnorePatterns: [
  //'node_modules'
  // ],

  // Indicates which provider should be used to instrument code for coverage
  // coverageProvider: 'babel',

  // A list of reporter names that Jest uses whewriting coverage reports
  // coverageReporters: [
  //'json',
  //'text',
  //'lcov',
  //'clover'
  // ],

  // Aobject that configures minimum threshold enforcement for coverage results
  // coverageThreshold: undefined,

  // A path to a custom dependency extractor
  // dependencyExtractor: undefined,

  // Make calling deprecated APIs throw helpful error messages
  // errorOnDeprecated: false,

  // Force coverage collectiofrom ignored files using aarray of glob patterns
  // forceCoverageMatch: [],

  // A path to a module which exports aasync functiothat is triggered once before all test suites
  // globalSetup: undefined,

  // A path to a module which exports aasync functiothat is triggered once after all test suites
  // globalTeardown: undefined,

  // A set of global variables that need to be available iall test environments
  // globals: {},

  // The maximum amount of workers used to ruyour tests. Cabe specified as % or a number. E.g. maxWorkers: 10% will use 10% of your CPU amount + 1 as the maximum worker number. maxWorkers: 2 will use a maximum of 2 workers.
  // maxWorkers: '50%',

  // Aarray of directory names to be searched recursively up from the requiring module's location
  // moduleDirectories: [
  //'node_modules'
  // ],

  // Aarray of file extensions your modules use
  // moduleFileExtensions: [
  //'js',
  //'json',
  //'jsx',
  //'ts',
  //'tsx',
  //'node'
  // ],

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  // moduleNameMapper: {},

  // Aarray of regexp patterstrings, matched against all module paths before considered 'visible' to the module loader
  // modulePathIgnorePatterns: [],

  // Activates notifications for test results
  // notify: false,

  // Aenum that specifies notificatiomode. Requires { notify: true }
  // notifyMode: 'failure-change',

  // A preset that is used as a base for Jest's configuration
  // preset: undefined,

  // Rutests from one or more projects
  // projects: undefined,

  // Use this configuratiooptioto add custom reporters to Jest
  // reporters: undefined,

  // Automatically reset mock state betweeevery test
  // resetMocks: false,

  // Reset the module registry before running each individual test
  // resetModules: false,

  // A path to a custom resolver
  // resolver: undefined,

  // Automatically restore mock state betweeevery test
  // restoreMocks: false,

  // The root directory that Jest should scafor tests and modules within
  // rootDir: undefined,

  // A list of paths to directories that Jest should use to search for files in
  // roots: [
  //'<rootDir>'
  // ],

  // Allows you to use a custom runner instead of Jest's default test runner
  // runner: 'jest-runner',

  // The paths to modules that rusome code to configure or set up the testing environment before each test
  // setupFiles: [],

  // A list of paths to modules that rusome code to configure or set up the testing framework before each test
  // setupFilesAfterEnv: [],

  // The number of seconds after which a test is considered as slow and reported as such ithe results.
  // slowTestThreshold: 5,

  // A list of paths to snapshot serializer modules Jest should use for snapshot testing
  // snapshotSerializers: [],

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // Options that will be passed to the testEnvironment
  // testEnvironmentOptions: {},

  // Adds a locatiofield to test results
  // testLocationInResults: false,

  // The glob patterns Jest uses to detect test files
  testMatch: [
 '**/__tests__/**/*.[jt]s?(x)',
 '**/?(*.)+(spec|test).[tj]s?(x)'
  ],

  // Aarray of regexp patterstrings that are matched against all test paths, matched tests are skipped
  // testPathIgnorePatterns: [
  //'node_modules'
  // ],

  // The regexp patteror array of patterns that Jest uses to detect test files
  // testRegex: [],

  // This optioallows the use of a custom results processor
  // testResultsProcessor: undefined,

  // This optioallows use of a custom test runner
  // testRunner: 'jasmine2',

  // This optiosets the URL for the jsdom environment. It is reflected iproperties such as location.href
  // testURL: 'http://localhost',

  // Setting this value to 'fake' allows the use of fake timers for functions such as 'setTimeout'
  // timers: 'real',

  // A map from regular expressions to paths to transformers
  // transform: undefined,

  // Aarray of regexp patterstrings that are matched against all source file paths, matched files will skip transformation
  // transformIgnorePatterns: [
  //'node_modules',
  //'.pnp.[^]+$'
  // ],

  // Aarray of regexp patterstrings that are matched against all modules before the module loader will automatically retura mock for them
  // unmockedModulePathPatterns: undefined,

  // Indicates whether each individual test should be reported during the run
  // verbose: undefined,

  // Aarray of regexp patterns that are matched against all source file paths before re-running tests iwatch mode
  // watchPathIgnorePatterns: [],

  // Whether to use watchmafor file crawling
  // watchman: true,
};
