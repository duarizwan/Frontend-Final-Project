$(document).ready(function () {
  $("#accordion").accordion({
    collapsible: true,
    heightStyle: "content",
    active: false, // All panels are initially closed
    animate: 200, // Smooth animation on open/close
  });
});

$(document).ready(function () {
  $(".faq-question").click(function () {
    const parentFaq = $(this).parent();
    parentFaq.toggleClass("active").find(".faq-answer").slideToggle(300);
    parentFaq.siblings().removeClass("active").find(".faq-answer").slideUp(300);
  });
});

$(document).ready(function () {
  let currentTestimonial = 0;
  const testimonials = $(".testimonial");
  const dots = $(".control-dot");
  const totalTestimonials = testimonials.length;

  function showTestimonial(index) {
    testimonials.removeClass("active").eq(index).addClass("active");
    dots.removeClass("active").eq(index).addClass("active");
  }

  function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    showTestimonial(currentTestimonial);
  }

  dots.click(function () {
    currentTestimonial = $(this).data("slide");
    showTestimonial(currentTestimonial);
  });

  showTestimonial(currentTestimonial);
  setInterval(nextTestimonial, 5000); // Auto-slide every 5 seconds
});
document.addEventListener("DOMContentLoaded", function () {
  const topbar = document.querySelector(".topbar");
  const titlebarHeight = document.querySelector(".titlebar").offsetHeight;

  window.addEventListener("scroll", function () {
    if (window.scrollY > titlebarHeight) {
      topbar.classList.add("fixed-top");
    } else {
      topbar.classList.remove("fixed-top");
    }
  });
});
