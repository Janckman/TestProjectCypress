import registrationPage from '../support/pages/RegistrationPage';
import registrationHelper  from '../support/helpers/registrationHelper';

describe('Registration Page Tests', () => {

  beforeEach(() => {
    registrationPage.visit();
  });

  it('TC1: Should successfully register with valid data', () => {
    cy.fixture('validTestData.json').then((testData) => {
      registrationHelper.fillRegistrationForm(testData.validTestData, true);

      registrationPage.checkSubmitedForm(testData.validTestData);
    })
  });

  it('TC02: Successful Registration with Valid Data in Required Fields', () => {
    cy.fixture('reqiredTestData.json').then((testData) => {
      registrationHelper.fillRegistrationForm(testData.reqiredTestData);

      registrationPage.checkSubmitedForm(testData.reqiredTestData);
    })
  });
});