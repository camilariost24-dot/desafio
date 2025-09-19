document.addEventListener("DOMContentLoaded", () => {
  const nombreUsuario = localStorage.getItem("usuario");
  const span = document.getElementById("nombre_usuario");

  if (nombreUsuario) {
    span.textContent = nombreUsuario;
  } else {
    span.textContent = "No hay datos guardados";
  }
});
