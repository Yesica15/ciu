var back = document.querySelector("body")

back.addEventListener("keypress", function(){
    var color = document.querySelector("input").value
    console.log(color)
    console.log(KeyboardEvent.code)
    if(KeyboardEvent.code == 13){
        back.setAttribute("background-color:", color)  
    }
    
})