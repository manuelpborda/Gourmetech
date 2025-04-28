window.addEventListener("load", () => {
   document.body.classList.add("loaded");
   });
//------------button dark mode----------------------------------------------------------------//

const btn = document.getElementById("theme-toggle");
    const body = document.body;

    // Vérifie si un thème est déjà stocké //
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


//----------------------button favoris --------------------------
// Fonction pour obtenir les favoris depuis localStorage
function getFavorites() {
  const favoris = localStorage.getItem('favoris');
  return favoris ? JSON.parse(favoris) : [];
}

// Fonction pour sauvegarder les favoris dans localStorage
function saveFavorites(favoris) {
  localStorage.setItem('favoris', JSON.stringify(favoris));
}

// Fonction pour ajouter un favori
function ajouterAuxFavoris(titre, image, lien) {
  const favoris = getFavorites();

  // Vérifie si la recette est déjà dans les favoris
  if (favoris.some(fav => fav.link === lien)) {
      alert("Cette recette est déjà dans vos favoris !");
      return;
  }

  favoris.push({ title: titre, image: image, link: lien });
  saveFavorites(favoris);
  alert("Recette ajoutée aux favoris !");
}

// Ajouter les événements aux boutons "❤️"
document.querySelectorAll('.favori-btn').forEach((btn, index) => {
  btn.addEventListener('click', () => {
      const recette = btn.closest('.recette');
      const titre = recette.querySelector('h3').textContent;
      const image = recette.querySelector('img').getAttribute('src');
      
      // Créons un lien vers une page individuelle (à adapter si tu n'as pas de pages individuelles)
      let lien = '#';
      if (titre.toLowerCase().includes("gratin")) {
          lien = 'Recette_gratin.html';
      } else if (titre.toLowerCase().includes("tarte")) {
          lien = 'recette_tarte_aux_pommes.html';
      } else if (titre.toLowerCase().includes("lasagne")) {
          lien = 'recette_lasagnes.html';
      }

      ajouterAuxFavoris(titre, image, lien);
  });
});


//---------------------- filtres:  categories,  temps, difficulte:-----------------------------//
const categorieSelect =document.getElementById ('catégorie-select');
const tempsSelect = document.getElementById ('temps-select');
const difficulteSelect = document.getElementById ('difficulte-select');
const recettes =document.querySelectorAll('.recette');

function filtrerRecettes () {
  const categorie = categorieSelect.value;
  const temps= tempsSelect.value;
  const difficulte = difficulteSelect.value;

  recettes.forEach(recette=> {
    const recetteCategorie = recette.dataset.categorie;
    const recetteTemps =parseInt ( recette.dataset.temps);
    const recetteDifficulte =recette.dataset.difficulte;

    let afficher =true;
   
    if (categorie && recetteCategorie !== categorie) {
      afficher = false;
  }

  // Filtrar temps
  if (temps) {
      if (temps === "-15" && recetteTemps >= 15) afficher = false;
      if (temps === "15-30" && (recetteTemps < 15 || recetteTemps > 30)) afficher = false;
      if (temps === "30+" && recetteTemps <= 30) afficher = false;
  }

  // Filtrar difficulté
  if (difficulte && recetteDifficulte !== difficulte) {
      afficher = false;
  }

  recette.style.display = afficher ? 'block' : 'none';
  
  
  })
};
categorieSelect.addEventListener('change', filtrerRecettes);
tempsSelect.addEventListener('change', filtrerRecettes);
difficulteSelect.addEventListener('change', filtrerRecettes);

