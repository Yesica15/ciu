var back = document.querySelector("body")

back.addEventListener("keypress", function(event){
    var color = document.querySelector("input").value
    if(event.keyCode == 13){
        back.style.backgroundColor = color;  
    }
    
})

back.addEventListener("keypress", function(event){
    var valor = event.which || event.keyCode
    if(valor == 8){
        back.style.backgroundColor = "rgb(255, 255, 255)";  
    }
    
})