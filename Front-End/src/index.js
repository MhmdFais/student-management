const courseLists = {
  1: [
    "Introduction to Programming",
    "Data Base I",
    "Computer Architecture",
    "Computer Networks",
  ],
  2: ["Data Structures", "Algorithms", "Data Base II", "Computer Graphics"],
  3: [
    "Software Engineering",
    "Operating Systems",
    "Computer Networks",
    "Mobile Development",
  ],
  4: [
    "Advanced Algorithms",
    "Artificial Intelligence",
    "Web Development",
    "Machine Learning",
  ],
  5: ["Cyber Security", "Big Data", "Cloud Computing", "Blockchain"],
  6: [
    "Internet of Things",
    "Quantum Computing",
    "Virtual Reality",
    "Augmented Reality",
  ],
  7: [
    "Embedded Systems",
    "Computer Vision",
    "Natural Language Processing",
    "Robotics",
  ],
  8: [
    "Game Development",
    "Computer Animation",
    "Digital Signal Processing",
    "Computer Vision",
  ],
};

function updateCourseListOne() {
  const yearSelect = document.getElementById("semester");
  const courseSelect = document.getElementById("course-list-one");
  const selectedYear = yearSelect.value;

  // Clear existing options
  courseSelect.innerHTML = "";

  // Populate options based on selected year
  courseLists[selectedYear].forEach((course, index) => {
    const option = document.createElement("option");
    option.value = course;
    option.textContent = course;
    courseSelect.appendChild(option);
  });
}

function updateCourseListTwo() {
  const yearSelect = document.getElementById("semester");
  const courseSelect = document.getElementById("course-list-two");
  const selectedYear = yearSelect.value;

  // Clear existing options
  courseSelect.innerHTML = "";

  // Populate options based on selected year
  courseLists[selectedYear].forEach((course, index) => {
    const option = document.createElement("option");
    option.value = course;
    option.textContent = course;
    courseSelect.appendChild(option);
  });
}

function updateCourseListThree() {
  const yearSelect = document.getElementById("semester");
  const courseSelect = document.getElementById("course-list-three");
  const selectedYear = yearSelect.value;

  // Clear existing options
  courseSelect.innerHTML = "";

  // Populate options based on selected year
  courseLists[selectedYear].forEach((course, index) => {
    const option = document.createElement("option");
    option.value = course;
    option.textContent = course;
    courseSelect.appendChild(option);
  });
}

updateCourseListOne();
updateCourseListTwo();
updateCourseListThree();

document.getElementById("semester").addEventListener("change", function () {
  updateCourseListOne();
  updateCourseListTwo();
  updateCourseListThree();
});
