var data = [];
function addRow() {
    var fname = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var instructor = document.getElementById("instructor").value;
    var roll = document.getElementById("roll").value;
    if (fname && email && instructor && roll) {
        data.push({ fname, email, instructor, roll });
        renderTable();
        clearInputs();
    } else {
        alert("Please Fill Out All Fields!")
    }
}
function renderTable() {
    var tableBody = document.getElementById("show").querySelector("tbody");
    tableBody.innerHTML = "";
    data.forEach((row, index) => {
        var newRow = tableBody.insertRow();
        newRow.insertCell(0).innerHTML = row.fname;
        newRow.insertCell(1).innerHTML = row.email;
        newRow.insertCell(2).innerHTML = row.instructor;
        newRow.insertCell(3).innerHTML = row.roll;
        newRow.insertCell(4).innerHTML = `
        <button onclick="editRow(${index})">Edit</button>
        <button onclick="deleteRow(${index})">Delete</button>
        `;
    });
}
function editRow(index) {
    var row = data[index];
    document.getElementById("fname").value = row.fname;
    document.getElementById("email").value = row.email;
    document.getElementById("instructor").value = row.instructor;
    document.getElementById("roll").value = row.roll;
    data.splice(index, 1); renderTable();
}
function deleteRow(index) {
    data.splice(index, 1); renderTable();
}
function clearInputs() {
    document.getElementById("fname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("instructor").value = "";
    document.getElementById("roll").value = "";
}


