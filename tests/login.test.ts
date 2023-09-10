Feature('Login');

Before(({ Amazon }) => {
    Amazon.homePage.openHomePage().clickLogin();
})

Scenario('Verify functionality of login with invalid email', ({ Amazon }) => {
    Amazon.loginPage.loginInvalidEmail('invalid.email');
});

Scenario('Verify functionality of login with invalid password', ({ Amazon, Data }) => {
    Amazon.loginPage.loginInvalidPassword(Data.USERS.chip);
});

Scenario('Verify user can login to amazon with a valid account', ({ Amazon, Data }) => {
    Amazon.loginPage.loginValid(Data.USERS.chip);
    Amazon.homePage.amOnHomePage(Data.USERS.chip);
});