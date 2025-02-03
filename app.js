//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
let campo = document.getElementById("listaAmigos");
function adicionarAmigo(){

    
    if (document.getElementById("amigo").value == " ")
        alert ("Campo vazio!");


    if (amigos.includes(document.querySelector("input").value)){
        alert ("Amigo já incluso na lista!");
    }
    else {
        
        amigos.push(document.getElementById("amigo").value);
        document.getElementById("amigo").value = " ";
       
        console.log(amigos);
        campo.innerHTML = " ";
        for (let i = 0; i < amigos.length; i++){
             
            campo.innerHTML += `<li>${amigos[i]}</li>`;
        }
        
}

}

function sortearAmigo(){

    let num = parseInt(Math.random() * amigos.length + 1);
    console.log(num);
    let campo = document.getElementById("resultado");
    campo.innerHTML = `<li>${amigos[num - 1]}</li>`;
    

}