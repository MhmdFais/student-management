let studentRegisterNumber = document.getElementById("reg-no").value;
let deleteButton = document.querySelector(".delte-btn");

deleteButton.addEventListener("click", () => {
  //validate input field
  if (studentRegisterNumber === "") {
    alert(
      "Please enter the student register number to delete the student record"
    );
  } else {
    //send data to server
    sendDataToServer(studentRegisterNumber);
  }
});

function sendDataToServer(studentRegisterNumber) {
  fetch("http://localhost:8080/student/delete/${studentRegisterNumber}", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      studentRegisterNumber: studentRegisterNumber,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      alert(data.message);
    });
}
