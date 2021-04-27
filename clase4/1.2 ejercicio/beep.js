var boton = document.querySelector("button")

var seEjecutaEnEvento = function() {
    var h = document.querySelector("body");
    h.insertAdjacentHTML("beforeend", "<p>¡Beep!</p>");
    h.classList.toggle("color")
}

boton.addEventListener("click", seEjecutaEnEvento)

