import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import ZinioMainPage from '../../pages/zinio/ZinioMainPage';

When(/^I click on Accept cookies button$/, () => {
  ZinioMainPage.acceptCookies();
});

When(/^the banner is not present$/, () => {
  ZinioMainPage.bannerNotPresent();
});
