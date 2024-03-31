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

eval("const courseLists = {\r\n  1: [\r\n    \"Introduction to Programming\",\r\n    \"Data Base I\",\r\n    \"Computer Architecture\",\r\n    \"Computer Networks\",\r\n  ],\r\n  2: [\"Data Structures\", \"Algorithms\", \"Data Base II\", \"Computer Graphics\"],\r\n  3: [\r\n    \"Software Engineering\",\r\n    \"Operating Systems\",\r\n    \"Computer Networks\",\r\n    \"Mobile Development\",\r\n  ],\r\n  4: [\r\n    \"Advanced Algorithms\",\r\n    \"Artificial Intelligence\",\r\n    \"Web Development\",\r\n    \"Machine Learning\",\r\n  ],\r\n  5: [\"Cyber Security\", \"Big Data\", \"Cloud Computing\", \"Blockchain\"],\r\n  6: [\r\n    \"Internet of Things\",\r\n    \"Quantum Computing\",\r\n    \"Virtual Reality\",\r\n    \"Augmented Reality\",\r\n  ],\r\n  7: [\r\n    \"Embedded Systems\",\r\n    \"Computer Vision\",\r\n    \"Natural Language Processing\",\r\n    \"Robotics\",\r\n  ],\r\n  8: [\r\n    \"Game Development\",\r\n    \"Computer Animation\",\r\n    \"Digital Signal Processing\",\r\n    \"Computer Vision\",\r\n  ],\r\n};\r\n\r\nfunction updateCourseList() {\r\n  const yearSelect = document.getElementById(\"semester\");\r\n  const courseSelect = document.getElementById(\"course-list\");\r\n  const selectedYear = yearSelect.value;\r\n\r\n  // Clear existing options\r\n  courseSelect.innerHTML = \"\";\r\n\r\n  // Populate options based on selected year\r\n  courseLists[selectedYear].forEach((course, index) => {\r\n    const option = document.createElement(\"option\");\r\n    option.value = course;\r\n    option.textContent = course;\r\n    courseSelect.appendChild(option);\r\n  });\r\n}\r\n\r\nupdateCourseList();\r\n\r\ndocument\r\n  .getElementById(\"semester\")\r\n  .addEventListener(\"change\", updateCourseList);\r\n\n\n//# sourceURL=webpack://front-end/./src/index.js?");

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