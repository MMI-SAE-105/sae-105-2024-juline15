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

/* lightbox */
const lightbox = document.querySelector("#lightbox");
const lightboxImg = document.querySelector("#lightbox > img");

document.body.addEventListener("click", (evt) => {
    if (evt.target.matches(".schedule__film-img")) {
        lightboxImg.src = evt.target.src;
        lightbox.classList.add("entrée");
        lightbox.showModal();
    }
});

lightbox.addEventListener("click", (evt) => {
    if (evt.target === lightbox) {
        lightbox.classList.add("sortie");
        lightbox.addEventListener("animationend", () => {
            lightbox.classList.remove("sortie", "entrée");
            lightbox.close();
        }, { once: true });
    }
});

