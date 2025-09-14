// Load students from localStorage
let pendingStudents = JSON.parse(localStorage.getItem("pendingStudents")) || [];
let verifiedStudents = JSON.parse(localStorage.getItem("verifiedStudents")) || [];

const pendingBody = document.querySelector("#pendingTable tbody");
const verifiedBody = document.querySelector("#verifiedTable tbody");

// Render both tables
function renderTables() {
  // Pending
  pendingBody.innerHTML = "";
  if (pendingStudents.length === 0) {
    pendingBody.innerHTML = "<tr><td colspan='5'>No pending students</td></tr>";
  } else {
    pendingStudents.forEach((s, i) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${s.idNumber}</td>
        <td>${s.firstName}</td>
        <td>${s.institutionName}</td>
        <td>${s.email}</td>
        <td>
          <button onclick="verifyStudent(${i})">Verify</button>
          <button onclick="removePending(${i})">Remove</button>
        </td>
      `;
      pendingBody.appendChild(row);
    });
  }

  // Verified
  verifiedBody.innerHTML = "";
  if (verifiedStudents.length === 0) {
    verifiedBody.innerHTML = "<tr><td colspan='5'>No verified students</td></tr>";
  } else {
    verifiedStudents.forEach((s, i) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${s.idNumber}</td>
        <td>${s.firstName}</td>
        <td>${s.institutionName}</td>
        <td>${s.email}</td>
        <td><button onclick="removeVerified(${i})">Remove</button></td>
      `;
      verifiedBody.appendChild(row);
    });
  }
}

// Verify student
function verifyStudent(index) {
  const student = pendingStudents[index];
  verifiedStudents.push(student);
  localStorage.setItem("verifiedStudents", JSON.stringify(verifiedStudents));
  pendingStudents.splice(index, 1);
  localStorage.setItem("pendingStudents", JSON.stringify(pendingStudents));
  renderTables();
}

// Remove pending student
function removePending(index) {
  pendingStudents.splice(index, 1);
  localStorage.setItem("pendingStudents", JSON.stringify(pendingStudents));
  renderTables();
}

// Remove verified student (cannot log in anymore)
function removeVerified(index) {
  verifiedStudents.splice(index, 1);
  localStorage.setItem("verifiedStudents", JSON.stringify(verifiedStudents));
  renderTables();
}

// Initial render
renderTables();
