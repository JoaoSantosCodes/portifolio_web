/* Toggle Style Switcher */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");

styleSwitcherToggle.addEventListener("click", () => {
    console.log("Style Switcher Toggle Clicked"); // Log para verificar o clique
    document.querySelector(".style-switcher").classList.toggle("open");
});

// Oculta o style switcher ao rolar a página
window.addEventListener("scroll", () => {
    console.log("Page Scrolled"); // Log para verificar o scroll
    const styleSwitcher = document.querySelector(".style-switcher");
    if (styleSwitcher.classList.contains("open")) {
        styleSwitcher.classList.remove("open");
    }
});

/* Altera as cores do tema */
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

/* Altera entre os temas claro e escuro */
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
    console.log("Day/Night Toggle Clicked"); // Log para verificar a alternância
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
});

// Define o tema ao carregar a página
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        console.log("Dark Theme Applied"); // Log para verificar o tema carregado
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        console.log("Light Theme Applied"); // Log para verificar o tema carregado
        dayNight.querySelector("i").classList.add("fa-moon");
    }
});
