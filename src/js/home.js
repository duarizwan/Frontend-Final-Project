const testimonials = [
  {
    text: "Stitches by Q exceeded my expectations! The quality and attention to detail are incredible. Highly recommended!",
    name: "Nabiha Abid",
  },
  {
    text: "Amazing craftsmanship and wonderful service. Will definitely come back!",
    name: "Sarah Ahmed",
  },
  {
    text: "Amazing service and beautiful stitching! I received so many compliments on my gown.",
    name: "Maryam K.",
  },
  {
    text: "Professional and efficient. I'll definitely be returning for my future stitching needs.",
    name: "Dua Rizwan.",
  },
  {
    text: "Their customer service is outstanding, and the stitching quality is unmatched. Love it!",
    name: "Ayesha R.",
  },
  {
    text: "Truly a wonderful experience! They made my wedding gown exactly as I imagined.",
    name: "Unaiza Tariq.",
  },
];

let currentIndex = 0;

// DOM elements
const testimonialText = document.querySelector(".testimonial-text");
const clientName = document.querySelector(".client-name");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

// Update testimonial content
function updateTestimonial() {
  const testimonial = testimonials[currentIndex];
  testimonialText.textContent = testimonial.text;
  clientName.textContent = testimonial.name;
}

// Event listeners for navigation
prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updateTestimonial();
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateTestimonial();
});

document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-toggle-icon");

    question.addEventListener("click", () => {
      // Toggle the answer visibility
      item.classList.toggle("active");
    });
  });
});
