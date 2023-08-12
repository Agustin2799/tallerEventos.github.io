const div = document.getElementById("primerDiv");
div.addEventListener("click", () => {
    alert("Hola soy el div");
});
const boton = document.getElementById("boton");
boton.addEventListener("click", (event) => {
    event.stopPropagation();
    alert("hola soy el boton");
});