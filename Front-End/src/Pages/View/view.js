let viewButton = document.querySelector(".view-btn");

viewButton.addEventListener("click", (event) => {
  event.preventDefault();
  viewStudent();
});

function viewStudent() {
  const regNo = document.getElementById("reg-no").value.trim();
  if (regNo === "") {
    alert("Please enter a registration number");
    return;
  }
  fetchStudentDetails(regNo);
}

function fetchStudentDetails(regNo) {
  fetch(`http://localhost:8080/student/get/${regNo}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Student not found");
      }
      return response.json();
    })
    .then((data) => {
      populateStudentDetails(data);
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Student not found");
    });
}

function populateStudentDetails(student) {
  const studentDetailsContainer = document.querySelector(".student-details");
  studentDetailsContainer.innerHTML = "";

  console.log("Student object:", student);

  studentDetailsContainer.innerHTML += `
    <h3>Student Details</h3>
    <p>Registration Number: ${student.regNo}</p>
    <p>Name: ${student.firstName} ${student.lastName}</p>
    <p>Phone Number: ${student.phoneNo}</p>
    <p>Address: ${student.address}</p>
    <p>Date of Birth: ${student.dob}</p>
    <p>Age: ${student.age}</p>
    <p>ID Number: ${student.nicNo}</p>
    <p>Gender: ${student.gender}</p>
    <p>Degree: ${student.degree}</p>
    <p>Intake: ${student.intake}</p>
    <p>Semester: ${student.semester}</p>
    <p>Course One: ${student.courseOne}</p>
    <p>Course Two: ${student.courseTwo}</p>
    <p>Course Three: ${student.courseThree}</p>
  `;
}
