// setupCounter(document.querySelector("#counter"));
const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle"); //the hamburger button
const primaryNav = document.querySelector(".primary-navigation");
const next = document.getElementById("nextArrow");
//aria-expanded --> true, false 'IDK what for? :D'
navToggle.addEventListener("click", function () {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);

  // primaryNav.classList.toggle("opened");
  primaryNav.toggleAttribute("data-visible");
  //for the overlay
  primaryHeader.toggleAttribute("data-overlay");
});

//SLIDER
const slider = new A11YSlider(document.querySelector(".slider"), {
  adaptiveHeight: true,
  dots: false,
  centerMode: true, //experimental

  // responsive: {
  //   480: {
  //     dots: false, // dots enabled 480px
  //   },
  // },
});

//SLIDER
// next.textContent = "";
