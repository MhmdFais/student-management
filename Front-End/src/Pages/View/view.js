let viewButton = document.querySelector(".view-btn");

viewButton.addEventListener("click", () => {
  event.preventDefault();
  viewStudent();
});

function viewStudent() {
  const regNo = document.getElementById("reg-no").value;
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

  const studentDetailsHTML = `
    <p><strong>First Name:</strong> ${student.firstName}</p>
    <p><strong>Last Name:</strong> ${student.lastName}</p>
    <p><strong>Phone Number:</strong> ${student.phoneNo}</p>
    <p><strong>Address:</strong> ${student.address}</p>
    <p><strong>Date of Birth:</strong> ${student.dob}</p>
    <p><strong>Age:</strong> ${student.age}</p>
    <p><strong>ID Number:</strong> ${student.nicNo}</p>
    <p><strong>Gender:</strong> ${student.gender}</p>
    <p><strong>Degree:</strong> ${student.degree}</p>
    <p><strong>Intake:</strong> ${student.intake}</p>
    <p><strong>Semester:</strong> ${student.semester}</p>
    <h3>Course History</h3>
    <ul>
      ${student.enrollments
        .map(
          (enrollment) => `
        <li><strong>Semester:</strong> ${enrollment.semester}, <strong>Intake:</strong> ${enrollment.intake}, <strong>Course:</strong> ${enrollment.course}</li>
      `
        )
        .join("")}
    </ul>
  `;

  studentDetailsContainer.innerHTML = studentDetailsHTML;
}
