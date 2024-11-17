document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", function (event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validation rules
    let errors = [];

    if (!name) {
      errors.push("Name is required.");
    }

    if (!email) {
      errors.push("Email is required.");
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.push("Please enter a valid email address.");
    }

    if (!subject) {
      errors.push("Subject is required.");
    }

    if (!message) {
      errors.push("Message is required.");
    }

    // Show errors or proceed with submission
    if (errors.length > 0) {
      event.preventDefault();
      alert(errors.join("\n"));
    }
  });
});