// Array to store student records
let students = [];

// Select form and counter
const form = document.getElementById("signupForm");
const studentCount = document.getElementById("studentCount");

// Handle form submission
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload

    // Create student object
    const student = {
        firstName: document.getElementById("firstName").value,
        middleName: document.getElementById("middleName").value,
        lastName: document.getElementById("lastName").value,
        dob: document.getElementById("dob").value,
        phone: document.getElementById("phone").value,
        course: document.getElementById("course").value
    };

    // Store student in array
    students.push(student);

    // Update counter label
    studentCount.innerText = students.length;

    // Clear the form after submission
    form.reset();

    // Confirmation
    alert("Student Registered Successfully!");
});
