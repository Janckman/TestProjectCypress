/// <reference types="cypress" />

class RegistrationPage {
    visit() {
      cy.visit('https://demoqa.com/automation-practice-form');
    }
  
    fillFirstName(firstName) {
      cy.get('#firstName').type(firstName);
    }
  
    fillLastName(lastName) {
      cy.get('#lastName').type(lastName);
    }
  
    fillEmail(email) {
      cy.get('#userEmail').type(email);
    }
  
    selectGender(gender) {
        const genderMapping = {
            'Male': '#gender-radio-1',
            'Female': '#gender-radio-2',
            'Other': '#gender-radio-3'
        };
    
        if (genderMapping[gender]) {
            cy.get(genderMapping[gender]).check({ force: true });
        } else {
            throw new Error(`Invalid gender value: ${gender}. Please provide one of the following: 'male', 'female', or 'other'.`);
        }
    }
  
    fillMobileNumber(mobile) {
      cy.get('#userNumber').type(mobile);
    }
  
    selectDateOfBirth(year, month, day) {
        cy.get('#dateOfBirthInput').click();
      
        cy.get('.react-datepicker__year-select').select(year.toString());
      
        cy.get('.react-datepicker__month-select').select(month);

        cy.get(`.react-datepicker__day--0${day}:not(.react-datepicker__day--outside-month)`).click();
      }
      
  
    selectSubject(subject) {
      cy.get('#subjectsContainer').click().type(subject);
      cy.contains('[id^="react-select-2-option-"]', subject)
            .click();
    }
  
    selectHobby(hobbies) {
        const hobbyIds = {
          Sports: '#hobbies-checkbox-1',
          Reading: '#hobbies-checkbox-2',
          Music: '#hobbies-checkbox-3'
        };
      
        if (!Array.isArray(hobbies)) {
          hobbies = [hobbies];
        }
      
        hobbies.forEach(hobby => {
          if (hobbyIds[hobby]) {
            cy.get(hobbyIds[hobby]).check({ force: true });
          } else {
            throw new Error(`Invalid hobby: ${hobby}`);
          }
        });
      }
  
    uploadPicture(filePath) {
      cy.get('#uploadPicture').attachFile(filePath);
    }
  
    fillCurrentAddress(address) {
      cy.get('#currentAddress').type(address);
    }
  
    selectState(state) {
        cy.get('#state').click().type(state);
        cy.contains('[id^="react-select-3-option-"]', state)
            .click();

    }

    selectCity(city) {
        cy.get('#city').click().type(city);
        cy.contains('[id^="react-select-4-option-"]', city)
            .click();
    }
  
    submitForm() {
      cy.get('#submit').click();
    }

    isSubmitedFormVisible(){
        return cy.get('.modal-content').should('be.visible');
    }

    isSubmitedFormNotExist(){
        return cy.get('.modal-content').should('not.exist');
    }

    checkSubmitedForm(expectedValues) {
        if(this.isSubmitedFormVisible()){
            cy.get('tbody tr').each(($row) => {
                const label = $row.find('td').eq(0).text().trim();
                const value = $row.find('td').eq(1).text().trim();
    
                if (expectedValues[label]) {
                    expect(value).to.eq(expectedValues[label]);
                }
            });
            cy.get('#closeLargeModal').click({ force: true });
        }
    }
  }
  
  export default new RegistrationPage();