document.addEventListener("DOMContentLoaded", getStudentData);

function getStudentData() {
  fetch("http://localhost:8080/student/get")
    .then((response) => response.json())
    .then((data) => {
      clearTable();
      data.forEach((student) => {
        let regNo = student.regNo;
        let firstName = student.firstName;
        let lastName = student.lastName;
        let phoneNumber = student.phoneNo;
        let address = student.address;
        let birthday = student.dob;
        let age = student.age;
        let idNumber = student.nicNo;
        let gender = student.gender;
        let degree = student.degree;
        let intake = student.intake;
        let semester = student.semester;
        let courseOne = student.courseOne;
        let courseTwo = student.courseTwo;
        let courseThree = student.courseThree;

        createRow(
          regNo,
          firstName,
          lastName,
          phoneNumber,
          birthday,
          age,
          gender,
          degree,
          intake
        );
      });
    })
    .catch((error) => {
      console.log("Error fetching student data:", error);
      alert("An error occurred while fetching");
    });
}

function clearTable() {
  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";
}

function createRow(
  regNo,
  firstName,
  lastName,
  phoneNumber,
  birthday,
  age,
  gender,
  degree,
  intake
) {
  const tableBody = document.getElementById("table-body");

  const newRow = document.createElement("tr");

  const regNoCell = document.createElement("td");
  regNoCell.textContent = regNo;
  newRow.appendChild(regNoCell);

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = firstName;
  newRow.appendChild(firstNameCell);

  const lastNameCell = document.createElement("td");
  lastNameCell.textContent = lastName;
  newRow.appendChild(lastNameCell);

  const phoneNumberCell = document.createElement("td");
  phoneNumberCell.textContent = phoneNumber;
  newRow.appendChild(phoneNumberCell);

  const ageCell = document.createElement("td");
  ageCell.textContent = age;
  newRow.appendChild(ageCell);

  const genderCell = document.createElement("td");
  genderCell.textContent = gender;
  newRow.appendChild(genderCell);

  const degreeCell = document.createElement("td");
  degreeCell.textContent = degree;
  newRow.appendChild(degreeCell);

  const birthdayCell = document.createElement("td");
  birthdayCell.textContent = birthday;
  newRow.appendChild(birthdayCell);

  const intakeCell = document.createElement("td");
  intakeCell.textContent = intake;
  newRow.appendChild(intakeCell);

  tableBody.appendChild(newRow);
}
