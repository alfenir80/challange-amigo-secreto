//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
let campo = document.getElementById("listaAmigos");
function adicionarAmigo(){

    
    
    if (!validaCampo()){
        alert("Siga as instruções corretamente!");
        document.getElementById("amigo").value = " ";
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

function validaCampo(){

    let value = document.querySelector("input").value;;

    if (value == ""){
        alert("Campo vazio!");
        return false;
    
    } 

    if (amigos.includes(value)){
        alert("Esse nome já está na lista!");
        return false;
    }
    
    return true;

}