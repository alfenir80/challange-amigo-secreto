//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionaAmigos(){

    if (document.getElementById("amigo") == "")
        alert ("Campo vazio!");
    else if (amigos.includes(document.getElementById("amigo")))
        alert ("Amigo já incluso na lista!");
    else {
        amigos.push(document.getElementById("amigo"));
        document.getElementById("amigo").value = " ";
        let campo = document.getElementById("listaAmigos");
        
        for (let i = 0; i <= amigos.length; i++){
            campo.innerHTML = `<li>${amigos[i]}</li>`;
        }

}

}

function sortearAmigo(lista){

    let num = parseInt(Math.random() * lista.length + 1);
    let campo = getElementById("resultado");
    campo.innerHTML = `<li>${lista[num]}</li>`;
    

}