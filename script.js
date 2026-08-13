// =========================
// Dark / Light Mode
// =========================

const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "☀️";
    } else {
        themeButton.textContent = "🌙";
    }

});


// =========================
// Contact Form
// =========================

const contactForm = document.querySelector("form");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Thank you for contacting me!");

    contactForm.reset();

});