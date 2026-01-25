let students = JSON.parse(localStorage.getItem("students")) || [];

function addStudent() {
    let roll = document.getElementById("roll").value;
    let name = document.getElementById("name").value;
    let course = document.getElementById("course").value;

    if (roll === "" || name === "" || course === "") {
        alert("Please fill all fields");
        return;
    }

    students.push({ roll, name, course });
    localStorage.setItem("students", JSON.stringify(students));

    document.getElementById("roll").value = "";
    document.getElementById("name").value = "";
    document.getElementById("course").value = "";

    displayStudents();
}

function deleteStudent(index) {
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
}

function displayStudents() {
    let table = document.getElementById("studentTable");
    table.innerHTML = "";

    students.forEach((student, index) => {
        table.innerHTML += `
        <tr>
            <td>${student.roll}</td>
            <td>${student.name}</td>
            <td>${student.course}</td>
            <td><button onclick="deleteStudent(${index})">Delete</button></td>
        </tr>
        `;
    });
}

displayStudents();
