window.addEventListener("load", () => {
    document.body.classList.add("loaded");
  });

  document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
    const formMessage = document.getElementById("form-message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            formMessage.textContent = "Veuillez remplir tous les champs.";
            formMessage.classList.remove("hidden");
            formMessage.style.color = "red";
            return;
        }

        // Si tout est bon
        formMessage.textContent = "Merci pour votre message !";
        formMessage.classList.remove("hidden");
        formMessage.style.color = "green";
        form.reset();
    });
});

    document.querySelectorAll(".faq-question").forEach(button => {
        button.addEventListener("click", () => {
            const answer = button.nextElementSibling;
            const isExpanded = button.getAttribute("aria-expanded") === "true";
    
            button.setAttribute("aria-expanded", !isExpanded);
            answer.style.display = isExpanded ? "none" : "block";
        });
    
        // Accessibilité initiale
        button.setAttribute("aria-expanded", "false");
    });

    // Récupère le bouton hamburger et le menu de navigation
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('nav');

// Ajoute un événement de clic sur le hamburger pour activer/désactiver le menu
hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

const form = document.getElementById('formulaire');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Ajouter la classe pour activer les styles de validation
  form.classList.add('submitted');

  // Vérifier la validité du formulaire
  if (form.checkValidity()) {
    // Afficher le message de succès
    formMessage.classList.add('show');

    // Attendre un court délai avant de nettoyer le formulaire
    setTimeout(() => {
      form.reset();                       // Réinitialiser les champs
      form.classList.remove('submitted'); // Supprimer les styles d'erreur
    }, 100); // Donne le temps au message de s'afficher

  } else {
    // Masquer le message si le formulaire est invalide
    formMessage.classList.remove('show');
  }
});