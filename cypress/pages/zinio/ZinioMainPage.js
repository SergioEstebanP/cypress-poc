const ACCEPT_COOKIES_BUTTON = '.StyledButton-id_136n8tf-a';
const REGISTER_BUTTON = '#user-logIn > div > svg';
const EMAIL_TB = '#sign-up-email';
const PASS = '#sign-up-password';
const REPEAT_PASS = '#sign-up-password-confirm';
const CONFIRM_REGISTER_BTN = '#sign-up-submit';

class ZinioMainPage {
    static visit() {
        cy.visit('/');
    }

    static acceptCookies() {
        cy.get(ACCEPT_COOKIES_BUTTON).click();
    }

    static bannerNotPresent() {
        cy.get(ACCEPT_COOKIES_BUTTON).should('not.exist');
    }

    static clickRegisterButton() {
        cy.get(REGISTER_BUTTON).click();
    }

    static typeEmail(email) {
        cy.get(EMAIL_TB).type(email);
    }

    static typePassword(pass) {
        cy.get(PASS).type(pass);
    }

    static typePasswordConfirmation(pass) {
        cy.get(REPEAT_PASS).type(pass);
    }

    static clickConfirmButton(pass) {
        cy.get(CONFIRM_REGISTER_BTN).click(pass);
    }

}

export default ZinioMainPage;
