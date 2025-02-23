let numeroMaquina = Math.floor (Math.random()* (10-1)-1);
console.log(numeroMaquina);

let numeroUser = parseInt (prompt ("Adivina el numero entero entre 1 y 10"));

let vidas = 5;
while (numeroMaquina !== numeroUser && vidas >1){
    vidas--;
    numeroUser = parseInt(prompt ("Numero incorrecto, intentalo nuevamente \n Tus vidas ahora son: "+ vidas + "\n El numero es: "+ numeroMaquina));
}

if (numeroMaquina === numeroUser){
    console.log("Ganaste");
    alert ("Ganaste");
}
else {
    console.log ("Perdiste");
    alert ("Perdiste");
}