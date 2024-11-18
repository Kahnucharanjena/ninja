// script.js

// Get the form and confirmation section elements
const appointmentForm = document.getElementById('appointmentForm');
const confirmationSection = document.getElementById('confirmationSection');
const confirmationMessage = document.getElementById('confirmationMessage');

// Add event listener for form submission
appointmentForm.addEventListener('submit', function(event) {
    // Prevent form from submitting the default way
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Create confirmation message
    const message = `
        <strong>Appointment Confirmed!</strong><br>
        <strong>Name:</strong> ${name}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Phone:</strong> ${phone}<br>
        <strong>Appointment Date:</strong> ${date}<br>
        <strong>Appointment Time:</strong> ${time}
    `;

    // Display the confirmation message
    confirmationMessage.innerHTML = message;
    confirmationSection.style.display = 'block';

    // Optionally reset the form after submission
    appointmentForm.reset();
});

