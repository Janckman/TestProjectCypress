import registrationPage from '../support/pages/RegistrationPage';
import registrationHelper  from '../support/helpers/registrationHelper';

describe('Registration Page Tests', () => {

  beforeEach(() => {
    registrationPage.visit();
  });

  it('TC07: Submitting Empty Form', () => {
    registrationPage.submitForm();

    registrationPage.isSubmitedFormNotExist();
  });

  it('TC8: Should show an error for invalid email', () => {
    cy.fixture('reqiredTestDataIncorrectEmail.json').then((testData) => {
      registrationHelper.fillRegistrationForm(testData.reqiredTestDataIncorrectEmail);

      registrationPage.isSubmitedFormNotExist();
    });
  });

  it('TC09: Exceeding Mobile Number Length', () => {
    cy.fixture('reqiredTestDataIncorrectMobile.json').then((testData) => {
      registrationHelper.fillRegistrationForm(testData.reqiredTestDataShortMobile);

      registrationPage.isSubmitedFormNotExist();
    });
  });

  it('TC10: Non-Numeric Mobile Number', () => {
    cy.fixture('reqiredTestDataIncorrectMobile.json').then((testData) => {
      registrationHelper.fillRegistrationForm(testData.reqiredTestDataNonNumericMobile);

      registrationPage.isSubmitedFormNotExist();
    });
  });

  it('TC11: Uploading an Invalid File Type', () => {
    cy.fixture('reqiredTestDataIncorrectPhoto.json').then((testData) => {
      registrationHelper.fillRegistrationForm(testData.reqiredTestDataIncorrectPhoto);

      registrationPage.isSubmitedFormNotExist();
    });
  });
});