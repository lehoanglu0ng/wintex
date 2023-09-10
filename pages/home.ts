const { I, Data } = inject();

export default class HomePage {
  constructor() { }

  // locators
  buttons = {
    login: '#nav-link-accountList',
    department: '#searchDropdownBox',
    search: '#nav-search-submit-button'
  }

  fields = {
    searchBox: '#twotabsearchtextbox'
  }


  // actions
  openHomePage = () => {
    I.amOnPage('/');
    return this;
  }

  clickLogin = () => {
    //wait to input captcha manually (if any)
    I.waitForElement(this.buttons.login, Data.CONST.WAIT.MEDIUM);
    I.click(this.buttons.login);
    return this;
  }

  searchFor = (keyword: string) => {
    I.fillField(this.fields.searchBox, keyword);
    I.click(this.buttons.search);
    return this;
  }

  selectDepartment = (department: string) => {
    I.selectOption(this.buttons.department, department);
    return this;
  }
}