/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// import \"./Styles/style.css\";\r\n\r\nconst courseLists = {\r\n  1: [\r\n    \"Introduction to Programming\",\r\n    \"Data Base I\",\r\n    \"Computer Architecture\",\r\n    \"Computer Networks\",\r\n  ],\r\n  2: [\"Data Structures\", \"Algorithms\", \"Data Base II\", \"Computer Graphics\"],\r\n  3: [\r\n    \"Software Engineering\",\r\n    \"Operating Systems\",\r\n    \"Computer Networks\",\r\n    \"Mobile Development\",\r\n  ],\r\n  4: [\r\n    \"Advanced Algorithms\",\r\n    \"Artificial Intelligence\",\r\n    \"Web Development\",\r\n    \"Machine Learning\",\r\n  ],\r\n};\r\n\r\nfunction updateCourseList() {\r\n  const yearSelect = document.getElementById(\"year\");\r\n  const coursesDiv = document.getElementById(\"course-checkboxes\");\r\n  const selectedYear = yearSelect.value;\r\n  coursesDiv.innerHTML = \"\"; // Clear existing checkboxes\r\n\r\n  // Populate checkboxes based on selected year\r\n  courseLists[selectedYear].forEach((course) => {\r\n    const checkboxDiv = document.createElement(\"div\");\r\n    checkboxDiv.classList.add(\"checkbox-div\");\r\n\r\n    const checkbox = document.createElement(\"input\");\r\n    checkbox.type = \"checkbox\";\r\n    checkbox.value = course;\r\n    checkbox.name = \"courses[]\";\r\n\r\n    const label = document.createElement(\"label\");\r\n    label.textContent = course;\r\n\r\n    checkboxDiv.appendChild(checkbox);\r\n    checkboxDiv.appendChild(label);\r\n    coursesDiv.appendChild(checkboxDiv);\r\n  });\r\n}\r\n\r\nupdateCourseList();\r\n\r\ndocument.getElementById(\"year\").addEventListener(\"change\", updateCourseList);\r\n\n\n//# sourceURL=webpack://front-end/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;