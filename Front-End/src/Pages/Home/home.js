let refreshButton = document.querySelector(". refresh-btn");

refreshButton.addEventListener("click", () => {
  getStudentData();
});

function getStudentData() {
  fetch("http://localhost:8080/student/get")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((student) => {
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
        let course = student.course;

        createRow(
          firstName,
          lastName,
          phoneNumber,
          address,
          birthday,
          age,
          idNumber,
          gender,
          degree,
          intake,
          semester,
          course
        );
      });
    })
    .catch((error) => {
      console.log("Error fetching student data:", error);
      alert("An error occurred while fetching");
    });
}

function createRow(
  firstName,
  lastName,
  phoneNumber,
  address,
  birthday,
  age,
  idNumber,
  gender,
  degree,
  intake,
  semester,
  course
) {
  const tableBody = document.getElementById("table-body");

  const newRow = document.createElement("tr");

  const regNoCell = document.createElement("td");
  regNoCell.textContent = "";
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

  const addressCell = document.createElement("td");
  addressCell.textContent = address;
  newRow.appendChild(addressCell);

  const birthdayCell = document.createElement("td");
  birthdayCell.textContent = birthday;
  newRow.appendChild(birthdayCell);

  const ageCell = document.createElement("td");
  ageCell.textContent = age;
  newRow.appendChild(ageCell);

  const idNumberCell = document.createElement("td");
  idNumberCell.textContent = idNumber;
  newRow.appendChild(idNumberCell);

  const genderCell = document.createElement("td");
  genderCell.textContent = gender;
  newRow.appendChild(genderCell);

  const degreeCell = document.createElement("td");
  degreeCell.textContent = degree;
  newRow.appendChild(degreeCell);

  const intakeCell = document.createElement("td");
  intakeCell.textContent = intake;
  newRow.appendChild(intakeCell);

  const semesterCell = document.createElement("td");
  semesterCell.textContent = semester;
  newRow.appendChild(semesterCell);

  const courseCell = document.createElement("td");
  courseCell.textContent = course;
  newRow.appendChild(courseCell);

  tableBody.appendChild(newRow);
}
