// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

//const { SpecReporter } = require('jasmine-spec-reporter');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  //allScriptsTimeout: 11000 * 10,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome',
    chromeOptions: {
      args: [ /*"--headless",*/ ]
    }
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'jasmine'/*,
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000 * 10,
    print: function() {}
  }*/,
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    //jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
