import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import ZinioMainPage from '../../pages/zinio/ZinioMainPage';
import ServicesSupport from '../support/ServicesSupport';

When(/^I click on register button$/, () => {
    ZinioMainPage.clickRegisterButton();
});

And(/^I type ('[\w-]+') email$/, (email) => {
    if (email == 'random') {
        ZinioMainPage.typeEmail(ServicesSupport.getRandomEmail());
    } else {
        ZinioMainPage.typeEmail(email);
    }
});

And(/^I type 'zinio123' password$/, () => {
    ZinioMainPage.typePassword('zinio123');
});

And(/^I type 'zinio123' password confirmation$/, () => {
    ZinioMainPage.typePasswordConfirmation('zinio123');
});

And(/^I click on confirm button$/, () => {
    ZinioMainPage.clickConfirmButton();
});

And(/^I see myself registered$/, () => {
    // ZinioMainPage.clickRegisterLink();
});