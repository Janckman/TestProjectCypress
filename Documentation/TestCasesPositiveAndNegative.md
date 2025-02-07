# Registration Page Test Cases

## Positive Scenarios

### TC01: Successful Registration with Valid Data
**WHEN**:
- The user navigates to the Registration page.
- The user fills in the following valid data:
  - First Name: Ivan
  - Last Name: Bukharynov
  - Email: ivan.bukharynov@example.com
  - Gender: Male
  - Mobile: 1234567890
  - Year: 1998
  - Month: August
  - Day: 18
  - Subjects: Maths
  - Hobbies: Reading
  - Picture: photo.jpg
  - Address: 123 My Street
  - State: NCR
  - City: Delhi
- The user clicks the "Submit" button.

**THEN**:
- The confirmation window appears displaying the entered data.
- All entered data is correctly displayed in the confirmation window.

---

### TC02: Successful Registration with Valid Data in Required Fields
**WHEN**:
- The user navigates to the Registration page.
- The user fills in the following required data:
  - First Name: Ivan
  - Last Name: Bukharynov
  - Email: ivan.bukharynov@example.com
  - Gender: Male
  - Mobile: 1234567890
  - Year: 1998
  - Month: August
  - Day: 18
- The user clicks the "Submit" button.

**THEN**:
- The confirmation window appears displaying the entered data.
- All required fields are displayed correctly.

---

### TC03: Mobile Number Length Restriction
**WHEN**:
- The user navigates to the Registration page.
- The user enters the following valid data:
  - First Name: Ivan
  - Last Name: Bukharynov
  - Email: ivan.bukharynov@example.com
  - Gender: Male
  - Mobile: 1234567890 (exactly 10 digits)
  - Year: 1998
  - Month: August
  - Day: 18
  - Subjects: Maths
  - Hobbies: Reading
  - Picture: photo.jpg
  - Address: 123 My Street
  - State: NCR
  - City: Delhi
- The user clicks the "Submit" button.

**THEN**:
- The registration is successful.
- The mobile number is displayed correctly in the confirmation window.

---

### TC04: Gender Selection Restriction
**WHEN**:
- The user navigates to the Registration page.
- The user selects "Male" from the Gender radio button.
- The user attempts to select "Female" from the Gender radio button.

**THEN**:
- Only one gender option can be selected.
- The previously selected "Male" option is replaced by "Female."

---

### TC05: Multiple Hobby Selection
**WHEN**:
- The user navigates to the Registration page.
- The user selects all three hobby checkboxes:
  - Reading
  - Football
  - Traveling
- The user fills in all required fields.
- The user clicks the "Submit" button.

**THEN**:
- All three hobbies are displayed as selected in the confirmation window.

---

### TC06: City Dropdown Activation After Selecting Country
**WHEN**:
- The user navigates to the Registration page.
- The user selects a country from the "Country" dropdown.

**THEN**:
- The "City" dropdown becomes enabled and can be selected.

---

## Negative Scenarios

### TC07: Submitting Empty Form
**WHEN**:
- The user navigates to the Registration page.
- The user leaves all fields empty.
- The user clicks the "Submit" button.

**THEN**:
- Red exclamation marks are displayed next to the required fields.
- Each required field has a red exclamation mark indicating that the user needs to fill it out.

---

### TC08: Invalid Email Format
**WHEN**:
- The user navigates to the Registration page.
- The user enters the following invalid email:
  - Email: testmail.com
- The user fills in the other required fields:
  - First Name: Ivan
  - Last Name: Bukharynov
  - Mobile: 1234567890
  - Gender: Male
  - Year: 1998
  - Month: August
  - Day: 18
- The user clicks the "Submit" button.

**THEN**:
- A red exclamation mark is displayed next to the email field.
- An error message is shown indicating the invalid email format.

---

### TC09: Exceeding Mobile Number Length
**WHEN**:
- The user navigates to the Registration page.
- The user enters the following mobile number with less than 10 digits:
  - Mobile: 12345
- The user fills in the other required fields:
  - First Name: Ivan
  - Last Name: Bukharynov
  - Email: ivan.bukharynov@example.com
  - Gender: Male
  - Year: 1998
  - Month: August
  - Day: 18
- The user clicks the "Submit" button.

**THEN**:
- A red exclamation mark is displayed next to the mobile number field.
- An error message is shown indicating the number must be exactly 10 digits long.

---

### TC10: Non-Numeric Mobile Number
**WHEN**:
- The user navigates to the Registration page.
- The user enters the following invalid mobile number:
  - Mobile: abc1234567
- The user fills in the other required fields:
  - First Name: Ivan
  - Last Name: Bukharynov
  - Email: ivan.bukharynov@example.com
  - Gender: Male
  - Year: 1998
  - Month: August
  - Day: 18
- The user clicks the "Submit" button.

**THEN**:
- A red exclamation mark is displayed next to the mobile number field.
- An error message is shown indicating that the mobile number must be numeric.

---

### TC11: Uploading an Invalid File Type (FAIL )
**WHEN**:
- The user navigates to the Registration page.
- The user uploads the following invalid file:
  - File: document.pdf (a non-image file)
- The user fills in the other required fields:
  - First Name: Ivan
  - Last Name: Bukharynov
  - Email: ivan.bukharynov@example.com
  - Gender: Male
  - Mobile: 1234567890
  - Year: 1998
  - Month: August
  - Day: 18
- The user clicks the "Submit" button.

**THEN**:
- An error message is displayed indicating that the uploaded file type is invalid.

---

### TC12: City Dropdown Remains Disabled Without Country Selection
**WHEN**:
- The user navigates to the Registration page.
- The user does not select a country from the "Country" dropdown.
- The user checks the "City" dropdown.

**THEN**:
- The "City" dropdown remains disabled until a country is selected.
- No cities are displayed in the dropdown.

---