
let numeroSecreto = 0;
let listaNumerosAleatorios = [];

function nombresCosas(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = (texto);
}

condicionesIniciales();

function intentoUsuario(){


    let verificacionUser = parseInt(document.getElementById('inputValidacion').value);
   
    if(verificacionUser == numeroSecreto){
        nombresCosas('p', `Acertaste el número en: ${contador} ${(contador == 1) ? ' intento' : ' intentos'}`);

        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        if(verificacionUser > numeroSecreto){
            nombresCosas('p', 'El número secreto es menor')  
        }else if(verificacionUser < numeroSecreto){
            nombresCosas('p', 'El número secreto es mayor')
        }
        contador++;
        limpiarCaja();
    }

    return
}

function limpiarCaja(){
    let cajaVacia = document.getElementById('inputValidacion').value = '';
}

function numeroAleatorio (min, max){

    let numeroGenerado = Math.floor(Math.random() *10) + 1;


    if(listaNumerosAleatorios.length == 9){
        nombresCosas('p', "Ya se sortearon todos los números")
    }else{
        if(listaNumerosAleatorios.includes(numeroGenerado)){
            return numeroAleatorio();
        }else{
            listaNumerosAleatorios.push(numeroGenerado);
            return numeroGenerado;
        }
    }

    console.log(numeroGenerado)
    console.log(listaNumerosAleatorios)

    
}

function condicionesIniciales(){
    nombresCosas('h1', "Adivina el número secreto");
    nombresCosas('p', "ingresa un número entre el 1 y el 10")
    numeroSecreto = numeroAleatorio();
    contador = 0;
}

function reiniciarJuego(){
    condicionesIniciales();
    limpiarCaja()
    // listaNumerosAleatorios = []

    document.getElementById('reiniciar').setAttribute('disabled', 'true')

    intentoUsuario()
}
