document.addEventListener("DOMContentLoaded", () => {
    // === FAQ : afficher/masquer les réponses ===
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling;
            answer.classList.toggle("visible");
        });
    });

    // === Formulaire : gestion de l'envoi et sauvegarde localStorage ===
    const form = document.querySelector(".contact-form");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const formMessage = document.getElementById("form-message");

    // Charger les données sauvegardées
    const savedData = localStorage.getItem("contactForm");
    if (savedData) {
        const data = JSON.parse(savedData);
        name.value = data.name || "";
        email.value = data.email || "";
        message.value = data.message || "";
    }

    // Sauvegarder les données à chaque saisie
    [name, email, message].forEach(input => {
        input.addEventListener("input", () => {
            localStorage.setItem("contactForm", JSON.stringify({
                name: name.value,
                email: email.value,
                message: message.value
            }));
        });
    });

    // Soumission du formulaire
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        formMessage.textContent = "Merci pour votre message !";
        formMessage.classList.remove("hidden");
        form.reset();
        localStorage.removeItem("contactForm");
    });
});