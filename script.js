const toggle = document.getElementById("themeToggle");
const body = document.body;
const banner = document.getElementById("inicio");
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




  const items = document.querySelectorAll('.timeline-item');

  function showTimeline() {
    items.forEach(item => {
      const itemTop = item.getBoundingClientRect().top;
      if (itemTop < window.innerHeight - 100) {
        item.classList.add('show');
      }
    });
  }

  window.addEventListener('scroll', showTimeline);
  showTimeline();


  window.addEventListener("scroll", function() {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("shadow");
  } else {
    navbar.classList.remove("shadow");
  }
});