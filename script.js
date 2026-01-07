// Array to store student records
let students = [];

// Select form and counter
const form = document.getElementById("signupForm");
const studentCount = document.getElementById("studentCount");

// Handle form submission
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const middleName = document.getElementById("middleName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const dob = document.getElementById("dob").value;
    const phone = document.getElementById("phone").value.trim();
    const course = document.getElementById("course").value;


    // First & Last Name required
    if (firstName === "" || lastName === "") {
        alert("First Name and Last Name are required.");
        return;
    }

    // Only letters in names
    const namePattern = /^[A-Za-z ]+$/;
    if (!namePattern.test(firstName) || !namePattern.test(lastName)) {
        alert("Names should contain only letters.");
        return;
    }

    // Phone number validation (10 digits)
    const phonePattern = /^[6-9]\d{9}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    // Date of birth validation
    if (dob === "") {
    alert("Please select your Date of Birth.");
    return;
}

const birthDate = new Date(dob);
const today = new Date();

//  Future date not allowed
if (birthDate > today) {
    alert("Date of Birth cannot be in the future.");
    return;
}

    // Course must be selected
    if (course === "") {
        alert("Please select a course.");
        return;
    }

    // ---------- STORE DATA ----------

    const student = {
        firstName,
        middleName,
        lastName,
        dob,
        phone,
        course
    };

    students.push(student);
    studentCount.innerText = students.length;

    console.log(students); // View in console

    alert("Student registered successfully!");
    form.reset();
});
