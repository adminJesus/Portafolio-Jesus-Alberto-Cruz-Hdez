document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", (e) => {
            e.stopPropagation(); // Evita que el clic propague al documento
            menuToggle.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        document.querySelectorAll(".nav-menu a").forEach(link => {
            link.addEventListener("click", () => {
                menuToggle.classList.remove("active");
                navMenu.classList.remove("active");
            });
        });

        document.addEventListener("click", (e) => {
            // Verifica si el menú está abierto y si el clic no fue dentro del menú ni en el botón
            if (navMenu.classList.contains("active") && !navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                menuToggle.classList.remove("active");
                navMenu.classList.remove("active");
            }
        });
    }
});

