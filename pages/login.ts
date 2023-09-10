import { Credential } from "../types";
const { I, Data } = inject();

export default class LoginPage {
  constructor() { }

  // locators
  fields = {
    email: '#ap_email',
    password: '#ap_password'
  }
  buttons = {
    continue: '#continue',
    signIn: '#signInSubmit'
  }
  labels = {
    welcome: (name: string) => { return locate('#nav-link-accountList-nav-line-1').withText(`Hello, ${name}`) },
    error: '#auth-error-message-box .a-alert-content'
  }


  // actions
  loginValid = (user: Credential) => {
    I.fillField(this.fields.email, user.email)
    I.click(this.buttons.continue);
    I.fillField(this.fields.password, secret(user.password))
    I.click(this.buttons.signIn);
    I.waitForVisible(this.labels.welcome(user.name), Data.CONST.WAIT.LONG)
  }

  loginInvalidEmail = (email: string) => {
    I.fillField(this.fields.email, email);
    I.click(this.buttons.continue);
    I.see('We cannot find an account with that email address', this.labels.error);
  }

  loginInvalidPassword = (user: Credential) => {
    I.fillField(this.fields.email, user.email)
    I.click(this.buttons.continue);
    I.fillField(this.fields.password, 'invalid.password')
    I.click(this.buttons.signIn);
    I.see('Your password is incorrect', this.labels.error);
  }

}