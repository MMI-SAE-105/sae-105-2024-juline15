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

/* Carousel */
const carousel = document.querySelector(".films__gallery"); // Assurez-vous que la classe est correcte
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");
const premierItem = document.querySelector(".films__poster"); // Assurez-vous que c'est la première image du carrousel

if (carousel && prevButton && nextButton && premierItem) {
    prevButton.addEventListener("click", () => {
        // Utiliser la largeur de l'élément pour déterminer le défilement
        const scrollAmount = premierItem.clientWidth;
        carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    nextButton.addEventListener("click", () => {
        // Utiliser la largeur de l'élément pour déterminer le défilement
        const scrollAmount = premierItem.clientWidth;
        carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
}

