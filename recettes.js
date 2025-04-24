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
<<<<<<< HEAD
        btn.textContent = "Activer le mode clair";
      } else {
        localStorage.setItem("theme", "light");
        btn.textContent = "Activer le mode sombre";
=======
        btn.textContent = "☀️Light";
      } else {
        localStorage.setItem("theme", "light");
        btn.textContent = "🌙 Dark";
>>>>>>> manuelpborda
      }
    });
    window.onload = () => {
      // Applique le thème enregistré au chargement de la page
      if (savedTheme) {
        body.classList.toggle("dark", savedTheme === "dark");
      }
<<<<<<< HEAD
    };
=======
    };
>>>>>>> manuelpborda
