import "owl.carousel";

(() => {
    const carousels = document.querySelectorAll<HTMLElement>(".js-carousel");

    carousels.forEach((carousel) => {
        carousel.addEventListener("initialized.owl.carousel", () => {
            carousel
                .querySelector(".owl-item.active:first-child, .owl-item.active:last-child")
                ?.classList.add("has-fade");
        });

        $(carousel).owlCarousel({
            loop: true,
            responsive: {
                0: { items: 3 },
                768: { items: 4 },
                991: { items: 5 },
                1200: { items: 7 },
            },
        });

        carousel.addEventListener("drag.owl.carousel", () => {
            carousel
                .querySelector(".has-fade")
                ?.classList.remove("has-fade");
        });

        carousel.addEventListener("dragged.owl.carousel", () => {
            carousel
                .querySelector(".owl-item.active:first-child, .owl-item.active:last-child")
                ?.classList.add("has-fade");
        });
    });
})();