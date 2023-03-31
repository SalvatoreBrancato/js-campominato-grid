// Fusinzione che crea un div con una classe tutte le volte che viene invocata
function creaElementoHtml(tagHtml, classi, text){
    let elemento = document.createElement(tagHtml);
    elemento.className = classi;
    elemento.innerText = text;
    return elemento;
}

//variabile che richiama la classe div del HTML
let griglia = document.querySelector(".griglia");

//Ciclo che crea gli elementi HTML, richiamando la funzione precedente
for(let i = 1; i <=100; i++){
    const divbox = creaElementoHtml("div", "box", i);
    griglia.append(divbox)

    divbox.addEventListener("click", function(){

        this.classList.toggle("blue")
        this.classList.toggle("textwhite")
        console.log(i)

    })
}