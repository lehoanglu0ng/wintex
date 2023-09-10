/// <reference types='codeceptjs' />
type amazon = typeof import('./pages/amazon');
type data = typeof import('./TestData');
type ChaiWrapper = import('codeceptjs-chai')

declare namespace CodeceptJS {
  interface SupportObject {
    I: I,
    current: any,
    Amazon: amazon,
    Data: data
  }
  interface Methods extends Playwright, JSONResponse, ChaiWrapper { }
  interface I extends WithTranslation<Methods> { }
  namespace Translation {
    interface Actions { }
  }
}
