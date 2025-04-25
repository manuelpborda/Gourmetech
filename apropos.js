window.addEventListener("load", () => {
    document.body.classList.add("loaded");
  });
  
  const toggleBtn = document.getElementById('dark-mode-toggle');
  toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
  
      // Optionnel : changer le texte du bouton
      if (document.body.classList.contains('dark-mode')) {
          toggleBtn.textContent = '☀️ Mode clair';
      } else {
          toggleBtn.textContent = '🌙 Mode sombre';
      }
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