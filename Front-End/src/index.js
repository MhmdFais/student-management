// import "./Styles/style.css";

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
};

function updateCourseList() {
  const yearSelect = document.getElementById("year");
  const coursesDiv = document.getElementById("course-checkboxes");
  const selectedYear = yearSelect.value;
  coursesDiv.innerHTML = ""; // Clear existing checkboxes

  // Populate checkboxes based on selected year
  courseLists[selectedYear].forEach((course) => {
    const checkboxDiv = document.createElement("div");
    checkboxDiv.classList.add("checkbox-div");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = course;
    checkbox.name = "courses[]";

    const label = document.createElement("label");
    label.textContent = course;

    checkboxDiv.appendChild(checkbox);
    checkboxDiv.appendChild(label);
    coursesDiv.appendChild(checkboxDiv);
  });
}

updateCourseList();

document.getElementById("year").addEventListener("change", updateCourseList);
