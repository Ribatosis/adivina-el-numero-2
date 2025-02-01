
let numeroSecreto = numeroAleatorio(1, 10);
let contador = 1;

function nombresCosas(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = (texto);
}

nombresCosas('h1', "Adivina el número secreto");
nombresCosas('p', "ingresa un número entre el 1 y el 10")

function intentoUsuario(){
    let verificacionUser = parseInt(document.getElementById('inputValidacion').value);
   
    if(verificacionUser == numeroSecreto){
        nombresCosas('p', `Acertaste el número en: ${contador} ${(contador == 1) ? ' intento' : ' intentos'}`);
    }else{
        if(verificacionUser > numeroSecreto){
            nombresCosas('p', 'El número secreto es menor')
            contador++;
        }else if(verificacionUser < numeroSecreto){
            nombresCosas('p', 'El número secreto es mayor')
            contador++;
        }
        
    }


}

function numeroAleatorio (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

