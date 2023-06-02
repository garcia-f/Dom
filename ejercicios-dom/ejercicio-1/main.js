let boton = document.getElementById("boton");
let parrafo = document.getElementById("parrafo");

boton.addEventListener("click",function(){
    if(parrafo.classList.contains("cambioColor")){
        parrafo.classList.remove("cambioColor")
    }else {
        parrafo.classList.add("cambioColor")
    }
})
