/// <reference types='codeceptjs' />
type amazon = typeof import('./pages/amazon');
type data = typeof import('./data/TestData');
type sharedSteps = typeof import('./sharedSteps')
type ChaiWrapper = import('codeceptjs-chai')

declare namespace CodeceptJS {
  interface SupportObject {
    I: I,
    current: any,
    Amazon: amazon,
    Data: data
  }
  interface Methods extends Playwright, JSONResponse, ChaiWrapper { }
  interface I extends ReturnType<sharedSteps>, WithTranslation<Methods> { }
  namespace Translation {
    interface Actions { }
  }
}
