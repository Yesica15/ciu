var boton = document.querySelectorAll("button")

var imagenes = document.querySelector("img") 
for(var i = 0; i < boton.length; i++){
    boton[i].addEventListener("click", function(){imagenes.classList.toggle("oculto")})
}

var imagen = document.querySelectorAll("img")
var apagar = function(){
    this.classList.toggle("oculto")
}
for(var i = 0; i < imagen.length; i++){
    imagen[i].addEventListener("click", apagar)
}