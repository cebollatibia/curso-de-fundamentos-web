const uri = "https://raw.githubusercontent.com/cebollatibia/curso-api/master/";
// encontrar elementos del html
const el_lista = document.getElementById("lista_misiones");
const el_caja = document.getElementById("imagen_de_mision");
const el_titulo = document.querySelector("div#lista_misiones h2");

fetch(uri + "datos.json").then(function(respuesta) {
    return respuesta.json()
}).then(function(datos) {
    for(let i =0; i < datos.length; i+=1) {
        //crear botton
        let nuevo_botton = document.createElement("button");
        nuevo_botton.innerHTML += datos[i].nombre;
        el_lista.appendChild(nuevo_botton);
       // agegar evento
       nuevo_botton.addEventListener("click", function() {
        el_caja.src = uri + datos[i].imagen;
        el_titulo.innerHTML = datos[i].nombre;
       })
    }
}).catch(function(error) {
     console.log(error)
});
