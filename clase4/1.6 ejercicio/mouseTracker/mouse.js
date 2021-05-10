var imagen = document.querySelector("img")

document.body.addEventListener("mousemove", function(event){
    if(event.which == 1){/* ->>>>> Linea extra para el punto 5 */
        imagen.style.top = event.clientY + "px";
        imagen.style.left = event.clientX + "px";
    }
})