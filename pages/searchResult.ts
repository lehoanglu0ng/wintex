const { I, Data } = inject();

export default class SearchResultPage {
  constructor() { }

  // locators
  checkboxs = {
    language: (language: string) => {
      return locate(".//div[span[text()='Language']]/following-sibling::*")
        .find('div.a-checkbox')
        .inside(`[aria-label="${language}"]`);
    }
  }
  result = {
    items: '[data-component-type="s-search-result"]',
    dates: '.a-size-base.a-color-secondary.a-text-normal'
  }
  pagination = '.s-pagination-strip';
  sort = '#s-result-sort-select';
  spinner = '.a-spinner-wrapper';

  // actions
  filterLanguage = (language: string) => {
    I.click(this.checkboxs.language(language));
    I.dontSeeElement(this.spinner);
    return this;
  }

  theResultDisplaysExactly16Items = () => {
    I.seeNumberOfElements(this.result.items, 16);
    I.seeElement(this.pagination);
    return this;
  }

  sortSelect = (type: string) => {
    I.selectOption(this.sort, type);
    I.dontSeeElement(this.spinner);
    return this;
  }

  //get every date of search result items then verify that they are displayd newest one first
  verifyPublicationDateSort = async () => {
    let dates = await I.grabTextFromAll(this.result.dates);
    I.say(dates.toString());
    const result = dates.every((value, index) => {
      I.scrollTo(locate(this.result.dates).at(index + 1));
      return index + 1 === dates.length ||
        new Date(value).getTime() >= new Date(dates[index + 1]).getTime()
    });
    I.assertTrue(result, "The search result is not sorted properly");
    return this;
  }
}