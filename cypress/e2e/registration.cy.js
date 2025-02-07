import RegistrationPage from '../support/pages/RegistrationPage';

describe('Registration Page Tests', () => {
  const registrationPage = new RegistrationPage();

  const expectedValidValues = {
    'First Name': 'Ivan',
    'Last Name': 'Bukharynov',
    'Email': 'ivan.bukharynov@example.com',
    'Gender': 'Male',
    'Mobile': '1234567890',
    'Year': '1998',
    'Month': 'August',
    'Day': '18',
    'Subjects': 'Maths',
    'Hobbies': 'Reading',
    'Picture': 'photo.jpg',
    'Address': '123 My Street',
    'State': 'NCR',
    'City': 'Delhi'
  };

  beforeEach(() => {
    registrationPage.visit();
  });

  it('TC1: Should successfully register with valid data', () => {
    registrationPage.fillFirstName(expectedValidValues['First Name']);
    registrationPage.fillLastName(expectedValidValues['Last Name']);
    registrationPage.fillEmail(expectedValidValues['Email']);
    registrationPage.selectGender(expectedValidValues['Gender']);
    registrationPage.fillMobileNumber(expectedValidValues['Mobile']);
    registrationPage.selectDateOfBirth(expectedValidValues['Year'],expectedValidValues['Month'],expectedValidValues['Day']);
    registrationPage.selectSubject(expectedValidValues['Subjects']);
    registrationPage.selectHobby(expectedValidValues['Hobbies']);
    registrationPage.uploadPicture(expectedValidValues['Picture']);
    registrationPage.fillCurrentAddress(expectedValidValues['Address']);
    registrationPage.selectState(expectedValidValues['State']);
    registrationPage.selectCity(expectedValidValues['City']);
    registrationPage.submitForm();

    registrationPage.checkSubmitedForm(expectedValidValues);
  });

  it('TC8: Should show an error for invalid email', () => {
    registrationPage.fillFirstName(expectedValidValues['First Name']);
    registrationPage.fillLastName(expectedValidValues['Last Name']);
    registrationPage.fillEmail('testmail.com');
    registrationPage.selectGender(expectedValidValues['Gender']);
    registrationPage.fillMobileNumber(expectedValidValues['Mobile']);
    registrationPage.selectDateOfBirth(expectedValidValues['Year'],expectedValidValues['Month'],expectedValidValues['Day']);
    registrationPage.submitForm();

    registrationPage.isSubmitedFormNotExist();
  });
});