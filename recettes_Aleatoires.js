document.addEventListener('DOMContentLoaded', () => {
    const bouton = document.getElementById('ask-recette');
    const recetteResultat = document.getElementById('recette-result');

    if (bouton && recetteResultat) {
        bouton.addEventListener('click', getRecetteAleatoire);
    }

    function getRecetteAleatoire() {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(response => response.json())
            .then(data => {
                const meal = data.meals[0];
                afficherRecette(meal);
            })
            .catch(error => {
                console.error("Erreur lors de la récupération de la recette:", error);
                recetteResultat.innerHTML = `<p>Erreur lors du chargement de la recette.</p>`;
            });
    }

    function afficherRecette(meal) {
        let ingredientsList = '<ul style="list-style:none;padding:0;">';
        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const mesure = meal[`strMeasure${i}`];
            if (ingredient && ingredient.trim() !== "") {
                ingredientsList += `<li>${mesure} ${ingredient}</li>`;
            }
        }
        ingredientsList += '</ul>';

        recetteResultat.innerHTML = `
            <div style="max-width: 600px; margin: 2rem auto; background: #fff3e0; padding: 20px; border-radius: 15px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                <h2>${meal.strMeal}</h2>
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}" style="width:100%; border-radius: 10px; margin-bottom: 1rem;">
                <p><strong>Catégorie:</strong> ${meal.strCategory}</p>
                <p><strong>Origine:</strong> ${meal.strArea}</p>
                <h3>Ingrédients :</h3>
                ${ingredientsList}
                <h3>Instructions :</h3>
                <p style="text-align: justify;">${meal.strInstructions}</p>
            </div>
        `;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const bouton = document.getElementById('ask-recette');
    const recetteResultat = document.getElementById('recette-result');

    if (bouton && recetteResultat) {
        bouton.addEventListener('click', getRecetteAleatoire);
    }

    function getRecetteAleatoire() {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(response => response.json())
            .then(data => {
                const meal = data.meals[0];
                afficherRecette(meal);
            })
            .catch(error => {
                console.error("Erreur lors de la récupération de la recette:", error);
                recetteResultat.innerHTML = `<p>Erreur lors du chargement de la recette.</p>`;
            });
    }

    function afficherRecette(meal) {
        let ingredientsList = '<ul style="list-style:none;padding:0;">';
        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const mesure = meal[`strMeasure${i}`];
            if (ingredient && ingredient.trim() !== "") {
                ingredientsList += `<li>${mesure} ${ingredient}</li>`;
            }
        }
        ingredientsList += '</ul>';

        recetteResultat.innerHTML = `
            <div style="max-width: 600px; margin: 2rem auto; background: #fff3e0; padding: 20px; border-radius: 15px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                <h2>${meal.strMeal}</h2>
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}" style="width:100%; border-radius: 10px; margin-bottom: 1rem;">
                <p><strong>Catégorie:</strong> ${meal.strCategory}</p>
                <p><strong>Origine:</strong> ${meal.strArea}</p>
                <h3>Ingrédients :</h3>
                ${ingredientsList}
                <h3>Instructions :</h3>
                <p style="text-align: justify;">${meal.strInstructions}</p>
            </div>
        `;
    }
});
