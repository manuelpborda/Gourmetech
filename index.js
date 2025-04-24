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
        btn.textContent = "☀️Light";
      } else {
        localStorage.setItem("theme", "light");
        btn.textContent = "🌙 Dark";
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
  const messageRecherche = document.getElementById("message-recherche");

  // Functión   filtre des recettes
  function filtrerRecettes() {
      const mot = searchInput.value.toLowerCase();
      let resultatTrouve=false;
      
      
      recettes.forEach(recette => {
          const titreRecette = recette.querySelector("h3").textContent.toLowerCase();
          if (titreRecette.includes(mot)) {
              recette.style.display = "flex";// mostrar
              resultatTrouve = true;
          } else {
              recette.style.display = "none"; // ocultar
          }
      });

      if (mot !== "" && !resultatTrouve) {
        messageRecherche.textContent = " !Aucune recette disponible pour cette recherche.";
    }
     
    else {
        messageRecherche.textContent = " ";
    }
  }

  // un event pour faire click au button
  searchButton.addEventListener("click", filtrerRecettes);

  //event pour chercher avec le clavier entrée
  searchInput.addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
          filtrerRecettes();
          
      }
  });
  
});


// -------------------- recettes Aleatoires -------------------------------//

const recettesAleatoires = document.getElementById(".filtres");{
  
 }
