window.addEventListener("load", () => {
    document.body.classList.add("loaded");
  });

// Cibler les éléments HTML
const favoritesList = document.getElementById('favorites-list');
const noFavoritesMessage = document.getElementById('no-favorites-message');

// Récupérer les favoris depuis localStorage
function getFavorites() {
    const favoris = localStorage.getItem('favoris');
    return favoris ? JSON.parse(favoris) : [];
}

// Sauvegarder les favoris en local strage-//
function saveFavorites(favoris) {
    localStorage.setItem('favoris', JSON.stringify(favoris));
}

// Supprimer un favori
function supprimerFavori(link) {
    let favoris = getFavorites();
    favoris = favoris.filter(fav => fav.link !== link);
    saveFavorites(favoris);
    afficherFavoris();
}

// Afficher les favoris dynamiquement
function afficherFavoris() {
    const favoris = getFavorites();
    favoritesList.innerHTML = ''; 

    if (favoris.length === 0) {
        noFavoritesMessage.style.display = 'block';
        return;
    } else {
        noFavoritesMessage.style.display = 'none';
    }

    favoris.forEach(fav => {
        const div = document.createElement('div');
        div.classList.add('favori');

        div.innerHTML = `
            <h3>${fav.title}</h3>
            <img src="${fav.image}" alt="${fav.title}" width="200">
            <a href="${fav.link}" class="btn-recette">Voir recette</a>
            <button class="btn-supprimer">Supprimer</button>
        `;

        div.querySelector('.btn-supprimer').addEventListener('click', () => {
            supprimerFavori(fav.link);
        });

        favoritesList.appendChild(div);
    });
}

afficherFavoris();


