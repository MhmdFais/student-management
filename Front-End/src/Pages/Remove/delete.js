let deleteButton = document.querySelector(".delte-btn");

deleteButton.addEventListener("click", () => {
  event.preventDefault();
  deleteStudent();
});

function deleteStudent() {
  let studentRegisterNumber = document.getElementById("reg-no").value;
  if (validate(studentRegisterNumber)) {
    let regNo = parseInt(studentRegisterNumber);
    sendDataToServer(regNo);
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

function sendDataToServer(regNo) {
  fetch(`http://localhost:8080/student/delete/${regNo}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      studentRegisterNumber: regNo,
    }),
  })
    .then((res) => {
      if (res.ok) {
        alert("Student deletion successful");
      } else {
        alert("Student not found");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert(
        "An error occurred while deleting the student. Please try again later."
      );
    });
}
