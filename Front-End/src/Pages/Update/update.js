const searchButton = document.querySelector(".search-btn");
const updateButton = document.querySelector(".update-student-button");

updateButton.addEventListener("click", () => {
  event.preventDefault();
  updateStudentDetails();
});

searchButton.addEventListener("click", () => {
  event.preventDefault();
  updateStudent();
});

function updateStudent() {
  let studentRegisterNumber = document.getElementById("reg-no").value;
  if (validate(studentRegisterNumber)) {
    let regNo = parseInt(studentRegisterNumber);
    fetchStudentDetails(regNo);
  } else {
    alert("Please enter a valid student register number");
  }
}

function validate(studentRegisterNumber) {
  if (studentRegisterNumber === "") {
    return false;
  } else {
    return true;
  }
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
      populateForm(data);
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Student not found");
    });
}

function populateForm(student) {
  document.getElementById("first-name").value = student.firstName;
  document.getElementById("last-name").value = student.lastName;
  document.getElementById("phone-no").value = student.phoneNo;
  document.getElementById("address").value = student.address;
  document.getElementById("birth-day").value = student.dob;
  document.getElementById("age").value = student.age;
  document.getElementById("id-no").value = student.nicNo;
  document.getElementById("gender").value = student.gender;
  document.getElementById("degree").value = student.degree;
  document.getElementById("intake").value = student.intake;
  document.getElementById("semester").value = student.semester;
  document.getElementById("course-list-one").value = student.courseOne;
  document.getElementById("course-list-two").value = student.courseTwo;
  document.getElementById("course-list-three").value = student.courseThree;
}

function updateStudentDetails() {
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let phoneNumber = document.getElementById("phone-no").value;
  let address = document.getElementById("address").value;
  let birthday = document.getElementById("birth-day").value;
  let age = document.getElementById("age").value;
  let idNumber = document.getElementById("id-no").value;
  let gender = document.getElementById("gender").value;
  let degree = document.getElementById("degree").value;
  let intake = document.getElementById("intake").value;
  let semester = document.getElementById("semester").value;
  let courseOne = document.getElementById("course-list-one").value;
  let courseTwo = document.getElementById("course-list-two").value;
  let courseThree = document.getElementById("course-list-three").value;

  let regNo = parseInt(document.getElementById("reg-no").value);
  console.log(regNo);
  console.log(typeof regNo);

  fetch(`http://localhost:8080/student/update/${regNo}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      phoneNo: phoneNumber,
      address: address,
      dob: birthday,
      age: age,
      nicNo: idNumber,
      gender: gender,
      degree: degree,
      intake: intake,
      semester: semester,
      courseOne: courseOne,
      courseTwo: courseTwo,
      courseThree: courseThree,
    }),
  })
    .then((res) => {
      if (res.ok) {
        alert("Student details updated successfully");
      } else {
        alert("Failed to update student details. Please try again later.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert(
        "An error occurred while updating the student details. Please try again later."
      );
    });

  clearInputFields();
}

function clearInputFields() {
  document.getElementById("first-name").value = "";
  document.getElementById("last-name").value = "";
  document.getElementById("phone-no").value = "";
  document.getElementById("address").value = "";
  document.getElementById("birth-day").value = "";
  document.getElementById("age").value = "";
  document.getElementById("id-no").value = "";
}
