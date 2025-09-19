document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;

    // Guardar en localStorage
    localStorage.setItem("usuario", nombre);

    // Redirigir a data.html
    window.location.href = "data.html";
  });
});
