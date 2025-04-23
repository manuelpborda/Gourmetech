//------------button dark mode----------------------------------------------------------------//

const btn = document.getElementById("theme-toggle");
    const body = document.body;

    // Vérifie si un thème est déjà stocké
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      body.classList.add("dark");
      btn.textContent = "Activer le mode clair";
    }

    btn.addEventListener("click", () => {
      body.classList.toggle("dark");

      // Mémorise le thème actuel
      if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        btn.textContent = "☀️";
      } else {
        localStorage.setItem("theme", "light");
        btn.textContent = "Activer le mode sombre";
      }
    });
    window.onload = () => {
      // Applique le thème enregistré au chargement de la page
      if (savedTheme) {
        body.classList.toggle("dark", savedTheme === "dark");
      }
    }; 


 // -------------------------------bar de recherche  -------------------------------------------------------------------//

 document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-bar");
  const searchButton = document.getElementById("search-button");
  const recettes = document.querySelectorAll(".recette");

  // Función para filtrar recetas
  function filtrerRecettes() {
      const terme = searchInput.value.toLowerCase(); // Convertir a minúsculas para búsqueda insensible
      recettes.forEach(recette => {
          const titre = recette.querySelector("h3").textContent.toLowerCase();
          if (titre.includes(terme)) {
              recette.style.display = "flex"; mostrar
          } else {
              recette.style.display = "none"; // ocultar
          }
      });
  }

  // Evento al hacer clic en el botón
  searchButton.addEventListener("click", filtrerRecettes);

  // También puedes activar búsqueda con "Enter"
  searchInput.addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
          filtrerRecettes();
      }
  });
});


//