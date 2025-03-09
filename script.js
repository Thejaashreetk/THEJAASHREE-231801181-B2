document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signupForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            
            // Fetch form values
            let firstName = document.getElementById("firstName").value.trim();
            let lastName = document.getElementById("lastName").value.trim();
            let email = document.getElementById("email").value.trim();
            let dob = document.getElementById("dob").value;
            let age = document.getElementById("age").value;
            let gender = document.querySelector('input[name="gender"]:checked');
            let phone = document.getElementById("phone").value.trim();
            let address = document.getElementById("address").value.trim();

            // Validation
            if (!/^[A-Za-z]{4,}$/.test(firstName)) {
                alert("First name must contain only alphabets and be at least 4 characters.");
                return;
            }
            if (!/^[A-Za-z]{1,}$/.test(lastName)) {
                alert("Last name must contain only alphabets.");
                return;
            }
            if (!/^\S+@\S+\.\S+$/.test(email)) {
                alert("Enter a valid email.");
                return;
            }
            if (!dob) {
                alert("Please enter a valid date of birth.");
                return;
            }
            if (!/^\d{2}$/.test(age)) {
                alert("Age must be a two-digit number.");
                return;
            }
            if (!gender) {
                alert("Please select a gender.");
                return;
            }
            if (!/^\d{10}$/.test(phone)) {
                alert("Phone number must be exactly 10 digits.");
                return;
            }
            if (address.length === 0) {
                alert("Address cannot be empty.");
                return;
            }

            // Save data to sessionStorage
            let userData = {
                firstName,
                lastName,
                email,
                dob,
                age,
                gender: gender.value,
                phone,
                address
            };
            sessionStorage.setItem("userData", JSON.stringify(userData));

            // Redirect to signup.html
            window.location.href = "signup.html";
        });
    }

    // Display stored data in table
    const tableBody = document.getElementById("tableBody");
    if (tableBody) {
        let userData = JSON.parse(sessionStorage.getItem("userData"));
        if (userData) {
            let row = `
                <tr>
                    <td>${userData.firstName}</td>
                    <td>${userData.lastName}</td>
                    <td>${userData.email}</td>
                    <td>${userData.dob}</td>
                    <td>${userData.age}</td>
                    <td>${userData.gender}</td>
                    <td>${userData.phone}</td>
                    <td>${userData.address}</td>
                </tr>
            `;
            tableBody.innerHTML = row;
        }
    }
});
