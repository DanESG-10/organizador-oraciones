(function () {
  const toggle  = document.getElementById("ejToggle");
  const overlay = document.getElementById("ejOverlay");
  const drawer  = document.getElementById("ejDrawer");
  const lista   = document.getElementById("ejList");
  const cerrarB = document.getElementById("ejClose");

  function abrir() {
    drawer.classList.add("abierto");
    overlay.classList.add("abierto");
    drawer.setAttribute("aria-hidden", "false");
    toggle.setAttribute("aria-expanded", "true");
  }

  function cerrar() {
    drawer.classList.remove("abierto");
    overlay.classList.remove("abierto");
    drawer.setAttribute("aria-hidden", "true");
    toggle.setAttribute("aria-expanded", "false");
  }

  function usarEjemplo(frase) {
    document.getElementById("inputTexto").value = frase;
    cerrar();
    if (typeof enviar === "function") enviar();
  }

  // Construir tarjetas con fichas
  CORPUS.forEach((frase) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "ej-card";
    frase.split(" ").forEach((palabra) => {
      const f = document.createElement("span");
      f.className = "ej-ficha";
      f.textContent = palabra;
      card.appendChild(f);
    });
    card.addEventListener("click", () => usarEjemplo(frase));
    lista.appendChild(card);
  });

  toggle.addEventListener("click", abrir);
  cerrarB.addEventListener("click", cerrar);
  overlay.addEventListener("click", cerrar);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") cerrar(); });
})();
