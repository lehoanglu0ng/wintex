Feature('Search');

Before(({ Amazon, Data }) => {
    Amazon.homePage.openHomePage().clickLogin();
    Amazon.loginPage.loginValid(Data.USERS.chip);
    Amazon.homePage.amOnHomePage(Data.USERS.chip);
})

Scenario('Verify result list is paginated if there are more than 16 items', ({ Amazon }) => {
    Amazon.homePage
        .selectDepartment('Books')
        .searchFor('apple');
    Amazon.searchResultPage
        .filterLanguage('English')
        .theResultDisplaysExactly16Items();
});

Scenario('Verify result list can be sorted on demand', async ({ Amazon }) => {
    Amazon.homePage
        .selectDepartment('Books')
        .searchFor('apple');
    Amazon.searchResultPage
        .filterLanguage('English')
        .sortSelect('date-desc-rank');
    await Amazon.searchResultPage.verifyPublicationDateSort();
});