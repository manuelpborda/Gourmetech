window.addEventListener("load", () => {
  document.body.classList.add("loaded");
  });

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


/*---------------------------- etoiles ranking----------------*/

const stars =document.querySelectorAll('.star');

stars.forEach(function(star,index){
  star.addEventListener('click', function(){
    for (let i=0; i <=index; i++) {
      stars[i].classList.add ('checked');
    }
    for (let i=index +1; i< stars.length; i++) {
      stars [i].classList.remove('checked');
    
    }
});
});

//----------------------button favoris --------------------------------------------------------------------------//
// Fonction pour obtenir les favoris depuis localStorage

// selectioner btn de la html
const btnFavori = document.querySelector(".favori-btn");

btnFavori.addEventListener("click", () => {
    const recette = {
        titre:document.querySelector("h2").textContent,
        image: document.querySelector(".recette-image").getAttribute("src"),
        categorie: document.querySelector(".info-recette p:nth-child(1)").textContent,
        temps: document.querySelector(".info-recette p:nth-child(2)").textContent
    };

    // Vérifie si des favoris existent déjà
    let favoris = JSON.parse(localStorage.getItem("favoris")) || [];

    // Empêche les doublons
    if (!favoris.some(fav => fav.titre === recette.titre)) {
        favoris.push(recette);
        localStorage.setItem("favoris", JSON.stringify(favoris));
        alert("Recette ajoutée aux favoris !");
    } else {
        alert("Cette recette est déjà dans vos favoris.");
    }
});





// ------------------------------------Récupère le bouton hamburger et le menu de navigation ------  responsive -----//
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('nav');
// Ajoute un événement de clic sur le hamburger pour activer/désactiver le menu
hamburger.addEventListener('click', () => {
 menu.classList.toggle('active');
});


