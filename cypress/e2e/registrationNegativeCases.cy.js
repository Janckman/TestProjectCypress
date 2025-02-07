import RegistrationPage from '../support/pages/RegistrationPage';

describe('Registration Page Tests', () => {
  const registrationPage = new RegistrationPage();

  beforeEach(() => {
    registrationPage.visit();
  });

  it('TC07: Submitting Empty Form', () => {
    registrationPage.submitForm();

    registrationPage.isSubmitedFormNotExist();
  });

  it('TC8: Should show an error for invalid email', () => {
    cy.fixture('reqiredTestDataIncorrectEmail.json').then((testData) => {
      registrationPage.fillFirstName(testData.reqiredTestDataIncorrectEmail.firstName);
      registrationPage.fillLastName(testData.reqiredTestDataIncorrectEmail.lastName);
      registrationPage.fillEmail(testData.reqiredTestDataIncorrectEmail.email);
      registrationPage.selectGender(testData.reqiredTestDataIncorrectEmail.gender);
      registrationPage.fillMobileNumber(testData.reqiredTestDataIncorrectEmail.mobile);
      registrationPage.selectDateOfBirth(
        testData.reqiredTestDataIncorrectEmail.year,
        testData.reqiredTestDataIncorrectEmail.month,
        testData.reqiredTestDataIncorrectEmail.day);
      registrationPage.submitForm();

      registrationPage.isSubmitedFormNotExist();
    });
  });

  it('TC09: Exceeding Mobile Number Length', () => {
    cy.fixture('reqiredTestDataIncorrectMobile.json').then((testData) => {
      registrationPage.fillFirstName(testData.reqiredTestDataShortMobile.firstName);
      registrationPage.fillLastName(testData.reqiredTestDataShortMobile.lastName);
      registrationPage.fillEmail(testData.reqiredTestDataShortMobile.email);
      registrationPage.selectGender(testData.reqiredTestDataShortMobile.gender);
      registrationPage.fillMobileNumber(testData.reqiredTestDataShortMobile.mobile);
      registrationPage.selectDateOfBirth(
        testData.reqiredTestDataShortMobile.year,
        testData.reqiredTestDataShortMobile.month,
        testData.reqiredTestDataShortMobile.day);
      registrationPage.submitForm();

      registrationPage.isSubmitedFormNotExist();
    });
  });

  it('TC10: Non-Numeric Mobile Number', () => {
    cy.fixture('reqiredTestDataIncorrectMobile.json').then((testData) => {
      registrationPage.fillFirstName(testData.reqiredTestDataNonNumericMobile.firstName);
      registrationPage.fillLastName(testData.reqiredTestDataNonNumericMobile.lastName);
      registrationPage.fillEmail(testData.reqiredTestDataNonNumericMobile.email);
      registrationPage.selectGender(testData.reqiredTestDataNonNumericMobile.gender);
      registrationPage.fillMobileNumber(testData.reqiredTestDataNonNumericMobile.mobile);
      registrationPage.selectDateOfBirth(
        testData.reqiredTestDataNonNumericMobile.year,
        testData.reqiredTestDataNonNumericMobile.month,
        testData.reqiredTestDataNonNumericMobile.day);
      registrationPage.submitForm();

      registrationPage.isSubmitedFormNotExist();
    });
  });

  it('TC11: Uploading an Invalid File Type', () => {
    cy.fixture('reqiredTestDataIncorrectPhoto.json').then((testData) => {
      registrationPage.fillFirstName(testData.reqiredTestDataIncorrectPhoto.firstName);
      registrationPage.fillLastName(testData.reqiredTestDataIncorrectPhoto.lastName);
      registrationPage.fillEmail(testData.reqiredTestDataIncorrectPhoto.email);
      registrationPage.selectGender(testData.reqiredTestDataIncorrectPhoto.gender);
      registrationPage.fillMobileNumber(testData.reqiredTestDataIncorrectPhoto.mobile);
      registrationPage.selectDateOfBirth(
        testData.reqiredTestDataIncorrectPhoto.year,
        testData.reqiredTestDataIncorrectPhoto.month,
        testData.reqiredTestDataIncorrectPhoto.day);
      registrationPage.uploadPicture(testData.reqiredTestDataIncorrectPhoto.picture);
      registrationPage.submitForm();

      registrationPage.isSubmitedFormNotExist();
    });
  });
});