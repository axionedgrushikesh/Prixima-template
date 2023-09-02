// variable declarations for selectors
var hamburger = document.querySelector(".hamburger"),
    headerNav = document.querySelector(".header-nav-links"),
    sliderImages = document.querySelectorAll(".portfolio-slider-list li"),
    slideBtn = document.querySelectorAll(".slide-btn");

// global 
hamburger.classList.remove("active");
headerNav.classList.remove("active");

let slideIndex = 0;
showSlides(slideIndex);

// event declaration 
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    headerNav.classList.toggle("active");
});

slideBtn.forEach(el => {
    el.addEventListener("click", function () {
        var getUserData = el.getAttribute("data-value");
        activeSlideRemove();
        el.classList.add("active");
        currentSlide(getUserData)
    })
})

// finction declarations
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function activeSlideRemove() {
    var activeSlide = document.querySelector(".active");
    activeSlide.classList.remove("active");
}

function showSlides() {
    var slides = document.querySelectorAll(".portfolio-slider-list li");
    for (i = 0; i < slides.length; i++) {
        a = slides[i].style.transform = `translateX(${slideIndex * 100}%)`
    }
}