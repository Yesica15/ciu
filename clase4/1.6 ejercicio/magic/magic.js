var cuadro=document.getElementById("magic")


var apagar= function(){
    var imagen=document.querySelector("img")
    imagen.classList.add("oculto")
}

cuadro.addEventListener("mousemove", apagar)