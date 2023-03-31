// Fusinzione che crea un div con una classe tutte le volte che viene invocata
function creaElementoHtml(tagHtml, classi, text){
    let elemento = document.createElement(tagHtml);
    elemento.className = classi;
    elemento.innerText = text;
    return elemento;
}

//variabile che richiama la classe div del HTML dove verranno inseriti i nuovi div
let griglia = document.querySelector(".griglia");

 const difficoltà1 = prompt("Inserisci il valore di difficoltà da 1 a 3 (1 hard, 2 middle, 3 easy)");
//Ciclo che crea gli elementi HTML, richiamando la funzione precedente

 if(difficoltà1 == 1){
     for(let i = 1; i <=100; i++){
         const divbox = creaElementoHtml("div", "box", i);
         griglia.append(divbox)
    
         divbox.addEventListener("click", function(){
    
             this.classList.toggle("blue")
             this.classList.toggle("textwhite")
             console.log(i)
    
         })
     }
 }else if(difficoltà1 == 2){
     for(let i = 1; i <=81; i++){
         const divbox = creaElementoHtml("div", "box2", i);
         griglia.append(divbox)
   
         divbox.addEventListener("click", function(){
    
             this.classList.toggle("blue")
             this.classList.toggle("textwhite")
             console.log(i)
    
         })
     }
 }else if(difficoltà1 == 3){
     for(let i = 1; i <=49; i++){
         const divbox = creaElementoHtml("div", "box3", i);
         griglia.append(divbox)
   
         divbox.addEventListener("click", function(){
    
             this.classList.toggle("blue")
             this.classList.toggle("textwhite")
             console.log(i)
    
         })
     }
 }

//Prova tramite select => non funzionante


// const play = document.querySelector("#gioca");
// play.addEventListener("click", function(){
//     let livello = document.querySelector("#difficoltà").value
//     if(livello == 1){
//         for(let i = 1; i <=100; i++){
//             const divbox = creaElementoHtml("div", "box", i);
//             griglia.append(divbox)
                    
//             divbox.addEventListener("click", function(){
        
//                 this.classList.toggle("blue")
//                 this.classList.toggle("textwhite")
//                 console.log(i)
        
//             })
//         }
//     }else if(livello == 2){
//         for(let i = 1; i <=81; i++){
//             const divbox = creaElementoHtml("div", "box2", i);
//             griglia.append(divbox)
        
//             divbox.addEventListener("click", function(){
        
//                 this.classList.toggle("blue")
//                 this.classList.toggle("textwhite")
//                 console.log(i)
        
//             })
//         }
//     }else if(livello == 3){
//         for(let i = 1; i <=49; i++){
//             const divbox = creaElementoHtml("div", "box3", i);
//             griglia.append(divbox)
        
//             divbox.addEventListener("click", function(){
        
//                 this.classList.toggle("blue")
//                 this.classList.toggle("textwhite")
//                 console.log(i)
        
//             })
//         }
//     }
// })