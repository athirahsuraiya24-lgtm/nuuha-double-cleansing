// ==========================================
// NUUHA BEAUTY - SCROLL REVEAL ANIMATION
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const revealElements = document.querySelectorAll(
        ".intro-section, " +
        ".product-section, " +
        ".duo-section, " +
        ".routine-card, " +
        ".routine-image, " +
        ".skin-section, " +
        ".trust-item, " +
        ".final-cta"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(function (element) {
        element.classList.add("reveal");
        observer.observe(element);
    });

});