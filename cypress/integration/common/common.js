import { Given, When } from 'cypress-cucumber-preprocessor/steps';
import ZinioMainPage from '../../pages/zinio/ZinioMainPage';

Given(/^I'm at Zinio$/, () => {
  ZinioMainPage.visit();
});

