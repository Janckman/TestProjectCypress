import RegistrationPage from '../support/pages/RegistrationPage';

describe('Registration Page Tests', () => {
  const registrationPage = new RegistrationPage();

  beforeEach(() => {
    registrationPage.visit();
  });

  it('TC1: Should successfully register with valid data', () => {
    cy.fixture('validTestData.json').then((testData) => {
      registrationPage.fillFirstName(testData.validTestData.firstName);
      registrationPage.fillLastName(testData.validTestData.lastName);
      registrationPage.fillEmail(testData.validTestData.email);
      registrationPage.selectGender(testData.validTestData.gender);
      registrationPage.fillMobileNumber(testData.validTestData.mobile);
      registrationPage.selectDateOfBirth(
        testData.validTestData.year,
        testData.validTestData.month,
        testData.validTestData.day);
      registrationPage.selectSubject(testData.validTestData.subjects);
      registrationPage.selectHobby(testData.validTestData.hobbies);
      registrationPage.uploadPicture(testData.validTestData.picture);
      registrationPage.fillCurrentAddress(testData.validTestData.address);
      registrationPage.selectState(testData.validTestData.state);
      registrationPage.selectCity(testData.validTestData.city);
      registrationPage.submitForm();

      registrationPage.checkSubmitedForm(testData.validTestData);
    })
  });

  it('TC02: Successful Registration with Valid Data in Required Fields', () => {
    cy.fixture('reqiredTestData.json').then((testData) => {
      registrationPage.fillFirstName(testData.reqiredTestData.firstName);
      registrationPage.fillLastName(testData.reqiredTestData.lastName);
      registrationPage.fillEmail(testData.reqiredTestData.email);
      registrationPage.selectGender(testData.reqiredTestData.gender);
      registrationPage.fillMobileNumber(testData.reqiredTestData.mobile);
      registrationPage.selectDateOfBirth(
        testData.reqiredTestData.year,
        testData.reqiredTestData.month,
        testData.reqiredTestData.day);
      registrationPage.submitForm();

      registrationPage.checkSubmitedForm(testData.reqiredTestData);
    })
  });
});