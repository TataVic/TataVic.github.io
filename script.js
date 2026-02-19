const toggle = document.getElementById("themeToggle");
const body = document.body;
const banner = document.getElementById("bannerContainer");
const planet = document.getElementById("planetIcon");

// Função que aplica o tema
function applyTheme(theme) {
    if (theme === "dark") {
        body.classList.add("dark");

        // Banner dark
        banner.style.backgroundImage = "url('assets/banner_dark.png')";

        // Planetinha branco
        planet.src = "assets/planetinha_light.png";

    } else {
        body.classList.remove("dark");

        // Banner light
        banner.style.backgroundImage = "url('assets/banner.jpg')";

        // Planetinha normal
        planet.src = "assets/planetinha.png";
    }
}

// Evento do botão
toggle.addEventListener("change", () => {
    const theme = toggle.checked ? "dark" : "light";
    applyTheme(theme);
    localStorage.setItem("theme", theme);
});

// Carregar tema salvo
const savedTheme = localStorage.getItem("theme") || "light";
applyTheme(savedTheme);

if (savedTheme === "dark") {
    toggle.checked = true;
}


const year = document.getElementById("Ano");
year.textContent = new Date().getFullYear();
