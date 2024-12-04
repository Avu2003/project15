let employees = []; // Array to store employee objects
let idCounter = 1;  // Counter for unique IDs

// Get references to DOM elements
const nameInput = document.getElementById("name");
const professionInput = document.getElementById("profession");
const ageInput = document.getElementById("age");
const addEmployeeBtn = document.getElementById("addEmployeeBtn");
const messageDiv = document.getElementById("message");
const employeeListDiv = document.getElementById("employeeList");

// Function to display a message
function showMessage(msg, type) {
  messageDiv.textContent = msg;
  messageDiv.className = message &{type};
}

// Function to render employees
function renderEmployees() {
  // Clear the list
  employeeListDiv.innerHTML = "";

  if (employees.length === 0) {
    employeeListDiv.innerHTML = "<p>No employees added yet.</p>";
    return;
  }

  // Create a div for each employee
  employees.forEach((employee) => {
    const employeeDiv = document.createElement("div");
    employeeDiv.className = "employee-item";

    employeeDiv.innerHTML = `
      <span>${employee.id}. ${employee.name} - ${employee.profession} - ${employee.age}</span>
      <button class="delete-btn" onclick="deleteEmployee(${employee.id})">Delete</button>
    `;

    employeeListDiv.appendChild(employeeDiv);
  });
}

// Function to add an employee
function addEmployee() {
  const name = nameInput.value.trim();
  const profession = professionInput.value.trim();
  const age = ageInput.value.trim();

  // Validate inputs
  if (!name || !profession || !age) {
    showMessage("Please fill in all fields!", "error");
    return;
  }

  // Add employee to the array
  const newEmployee = {
    id: idCounter++,
    name,
    profession,
    age: parseInt(age),
  };
  employees.push(newEmployee);

  // Clear inputs
  nameInput.value = "";
  professionInput.value = "";
  ageInput.value = "";

  // Show success message and render employees
  showMessage("Employee added successfully!", "success");
  renderEmployees();
}

// Function to delete an employee
function deleteEmployee(id) {
  employees = employees.filter((employee) => employee.id !== id);
  renderEmployees();
}

// Attach event listener
addEmployeeBtn.addEventListener("click", addEmployee);