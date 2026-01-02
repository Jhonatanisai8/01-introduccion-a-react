const botons = document.querySelectorAll("button");

botons.forEach((boton) => {
  boton.addEventListener("click", function () {
    //   alert("Hola");
    // Recuperamos el id del atributo del html
    const id = boton.getAttribute("data-id");
    console.log(id);
    if (boton.classList.contains("liked")) {
      boton.classList.remove("liked");
      boton.innerText = "Me Gusta";
    } else {
      boton.classList.add("liked");
      boton.innerText = "Quitar Me Gusta";
    }
  });
});
