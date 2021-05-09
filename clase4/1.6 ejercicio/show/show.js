var boton = document.querySelectorAll("button")
var imagenes = document.querySelectorAll("img") 

boton[0].addEventListener("click", function(){imagenes[0].classList.toggle("oculto")})
boton[1].addEventListener("click", function(){imagenes[1].classList.toggle("oculto")})
boton[2].addEventListener("click", function(){imagenes[2].classList.toggle("oculto")})
/*
    Intenté hacer el código de arriba con un for usando i en los vectores boton e imagenes pero
    no funcionaba. No me gusta como luce, pero así funciona.
*/

var imagen = document.querySelectorAll("img")
var apagar = function(){
    this.classList.toggle("oculto")
}
for(var i = 0; i < imagen.length; i++){
    imagen[i].addEventListener("click", apagar)
}