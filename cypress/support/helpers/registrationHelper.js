import registrationPage from '../pages/RegistrationPage';

class RegistrationHelper {
    fillRegistrationForm = (userData, isAllFields = false) => {
        registrationPage.fillFirstName(userData.firstName);
        registrationPage.fillLastName(userData.lastName);
        registrationPage.fillEmail(userData.email);
        registrationPage.selectGender(userData.gender);
        registrationPage.fillMobileNumber(userData.mobile);
        registrationPage.selectDateOfBirth(
            userData.year,
            userData.month,
            userData.day);

        if (userData.picture) {
            registrationPage.uploadPicture(userData.picture);
        }

        if (isAllFields) {
            registrationPage.selectSubject(userData.subjects);
            registrationPage.selectHobby(userData.hobbies);
            registrationPage.fillCurrentAddress(userData.address);
            registrationPage.selectState(userData.state);
            registrationPage.selectCity(userData.city);
        }

        registrationPage.submitForm();
    }
}

export default new RegistrationHelper();