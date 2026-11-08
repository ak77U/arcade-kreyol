// ==========================================
// ARCADE KREYOL - SCRIPT JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // Animation d'apparition des éléments
    const elements = document.querySelectorAll(".fade-in");

    elements.forEach(function (element, index) {
        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";

        setTimeout(function () {
            element.style.transition = "all 0.6s ease";
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }, index * 100);
    });


    // Boutons avec la classe .btn
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            button.style.transform = "scale(0.95)";

            setTimeout(function () {
                button.style.transform = "scale(1)";
            }, 100);
        });
    });


    // Message dans la console
    console.log("Arcade Kreyol est chargé avec succès !");
});
