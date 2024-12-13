/* menu */
const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");
const page = document.body;

if (toggle && nav) {
    toggle.addEventListener("click", () => {
        const isOpen = toggle.ariaExpanded === "true";
        const isClosed = !isOpen;
        toggle.ariaExpanded = isClosed;
        nav.ariaHidden = isOpen;
        page.classList.toggle("noscroll", isClosed);
    });
}

/* carousel */
const carousel = document.querySelector(".films__gallery");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");
const premierItem = document.querySelector(".films__poster");

if (carousel && prevButton && nextButton && premierItem) {
    prevButton.addEventListener("click", () => {
        const scrollAmount = premierItem.clientWidth;
        carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    nextButton.addEventListener("click", () => {
        const scrollAmount = premierItem.clientWidth;
        carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
}

