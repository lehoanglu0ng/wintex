import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './tests/*.test.ts',
  output: './output',
  helpers: {
    Playwright: {
      waitForAction: 500,
      browser: 'chromium',
      url: 'https://www.amazon.com',
      show: true,
      windowSize: '1920x1080'
    },
    chaiWrapper: {
      require: "codeceptjs-chai"
    }
  },
  include: {
    I: "./sharedSteps",
    Amazon: "./pages/amazon.ts",
    Data: "./data/TestData.ts",
  },
  name: 'wintex',
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
    }
  }
}