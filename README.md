# Student Information Management System

This project is a simple Student Information Management System (SIMS) that allows users to update and retrieve student details from a backend server. It includes a front-end interface built with HTML, CSS, and JavaScript, and a backend server built with Node.js.

## Features

- **Update Student Details**: Users can update student details such as name, phone number, address, etc.
- **Search Student**: Users can search for a student by their register number and retrieve their details.
- **Validation**: Input fields are validated to ensure data integrity.
- **RESTful API**: Backend server provides RESTful API endpoints for updating and retrieving student details.

## Technologies Used

- **Frontend**:

  - HTML
  - CSS
  - JavaScript

- **Backend**:

  - Spring Boot
  - Java

- **Database**:
  - MySQL

## Installation

1. Clone the repository:

```bash
git clone https://github.com/MhmdFais/student-management
```

2. Install dependencies:

```bash
cd student-management
npm install
```

3. Open `index.html` in your browser to use the application.

## Usage

1. Add Student Details:

- Fill out the student details form.
- Click the "Add Student" button to update the student details.

2. Delete Student:

- Enter the register number of the student in the search field.
- Click the "Delete" button to retrieve the student details.

3. Update Student Details:

- Enter the register number of the student in the search field.
- Update the student details in the form.
- Click the "Update" button to update the student details.

4. Search Student:

- Enter the register number of the student in the search field.
- Click the "Search" button to retrieve the student details.

## API Endpoints

- **GET /student/get**: Get all students.
- **GET /student/:id**: Get student by ID.
- **POST /student/add**: Add a new student.
- **PUT /students/update/:id**: Update student by ID.
- **DELETE /student/delete/:id**: Delete student by ID.

## Author

- [Muhammad Fais](https://github.com/MhmdFais)

## Acknowledgements

- [W3Schools](https://www.w3schools.com/)
- [MDN Web Docs](https://developer.mozilla.org/en-US/)
- [MySQL](https://www.mysql.com/)
- [Spring Boot](https://spring.io/projects/spring-boot)
- [Java](https://www.java.com/)
- [Postman](https://www.postman.com/)
