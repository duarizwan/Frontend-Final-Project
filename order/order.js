document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("orderForm");

  // Personal Information Fields
  const personalInfoFields = [
    { id: "contactNumber", name: "Primary Contact", regex: /^[0-9]{11}$/ },
    { id: "email", name: "Email", regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }, // Allowing any valid email format
    { id: "address", name: "Address", regex: null },
  ];

  // Order Information Fields
  const orderInfoFields = [
    { id: "dressType", name: "Type of Dress", regex: null },
  ];

  // Helper function to set error messages
  function setError(inputId, message) {
    const input = document.getElementById(inputId);
    const errorElement = document.getElementById(`${inputId}Error`);
    input.classList.add("error-input");
    errorElement.textContent = message;
    errorElement.style.display = "block";
  }

  // Helper function to clear error messages
  function clearError(inputId) {
    const input = document.getElementById(inputId);
    const errorElement = document.getElementById(`${inputId}Error`);
    input.classList.remove("error-input");
    errorElement.textContent = "";
    errorElement.style.display = "none";
  }

  // Generalized validation function
  function validateField(field) {
    const input = document.getElementById(field.id);
    const value = input.value.trim();

    if (!value) {
      setError(field.id, `${field.name} is required.`);
      return false;
    }

    if (field.id === "contactNumber" && !/^[0-9]{11}$/.test(value)) {
      setError(field.id, "Provide a valid 11-digit number.");
      return false;
    }

    if (field.id === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError(
        field.id,
        "Provide a valid email in the format example@domain.com."
      );
      return false;
    }

    if (field.regex && !field.regex.test(value)) {
      setError(field.id, `Invalid ${field.name}.`);
      return false;
    }

    clearError(field.id);
    return true;
  }

  // Real-time validation for inputs
  form.addEventListener("input", function (event) {
    const input = event.target;
    const field = [...personalInfoFields, ...orderInfoFields].find(
      (f) => f.id === input.id
    );

    if (field) {
      validateField(field);
    }
  });

  // Validate all fields in a given section
  function validateSection(fields) {
    let isValid = true;
    fields.forEach((field) => {
      if (!validateField(field)) {
        isValid = false;
      }
    });
    return isValid;
  }

  // Submit validation
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Personal Information validation
    const isPersonalInfoValid = validateSection(personalInfoFields);

    if (!isPersonalInfoValid) {
      alert(
        "Please complete the Personal Information section before proceeding."
      );
      return;
    }

    // Validate Order Information
    const isOrderInfoValid = validateSection(orderInfoFields);

    if (!isOrderInfoValid) {
      alert("Please complete the Order Information section.");
      return;
    }

    // If all validations pass, submit the form
    alert("Form submitted successfully!");
    // Uncomment the line below to allow actual form submission
    // form.submit();
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("orderForm");
  const dressTypeField = document.getElementById("dressType");
  const measurementTypeField = document.getElementById("measurementType");
  const topMeasurements = document.getElementById("topMeasurements");
  const bottomMeasurements = document.getElementById("bottomMeasurements");
  const dressTypeError = document.getElementById("dressTypeError");
  const measurementTypeError = document.getElementById("measurementTypeError");

  // Helper function to show/hide sections
  function toggleMeasurementSections() {
    const measurementType = measurementTypeField.value;

    // Hide all sections by default
    topMeasurements.style.display = "none";
    bottomMeasurements.style.display = "none";

    if (measurementType === "top") {
      topMeasurements.style.display = "block";
    } else if (measurementType === "bottom") {
      bottomMeasurements.style.display = "block";
    } else if (measurementType === "both") {
      topMeasurements.style.display = "block";
      bottomMeasurements.style.display = "block";
    }
  }

  // Helper function to set error messages
  function setError(element, message) {
    element.textContent = message;
    element.style.display = "block";
  }

  // Helper function to clear error messages
  function clearError(element) {
    element.textContent = "";
    element.style.display = "none";
  }

  // Event listener for dress type selection
  dressTypeField.addEventListener("change", function () {
    const dressType = dressTypeField.value;

    if (!dressType) {
      setError(dressTypeError, "Please select a type of dress.");
    } else {
      clearError(dressTypeError);
    }
  });

  // Event listener for measurement type selection
  measurementTypeField.addEventListener("change", function () {
    const measurementType = measurementTypeField.value;

    if (!measurementType) {
      setError(measurementTypeError, "Please select a measurement type.");
    } else {
      clearError(measurementTypeError);
      toggleMeasurementSections();
    }
  });

  // Form submit validation
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const dressType = dressTypeField.value;
    const measurementType = measurementTypeField.value;

    let isValid = true;

    // Validate Dress Type
    if (!dressType) {
      setError(dressTypeError, "Please select a type of dress.");
      isValid = false;
    } else {
      clearError(dressTypeError);
    }

    // Validate Measurement Type
    if (!measurementType) {
      setError(measurementTypeError, "Please select a measurement type.");
      isValid = false;
    } else {
      clearError(measurementTypeError);
    }

    // Final validation
    if (isValid) {
      alert("Form submitted successfully!");
      // Uncomment the line below to submit the form
      // form.submit();
    } else {
      alert("Please complete all required fields before proceeding.");
    }
  });

  // Initial setup to hide measurement sections
  toggleMeasurementSections();
});
