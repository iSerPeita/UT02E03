"use strict";

function verificarNumeroTarjeta(numero) {
  if (numero.length !== 16 || !/^\d+$/.test(numero)) {
    console.log("El número de tarjeta no es válido. Debe tener 16 dígitos numéricos.");
    return;
  }

  let suma = 0;

  for (let i = 0; i < numero.length; i++) {
    let digito = parseInt(numero[numero.length - 1 - i]);

    if (i % 2 === 1) {
      digito *= 2;

      if (digito > 9) {
        digito -= 9;
      }
    }

    suma += digito;
  }

  if (suma % 10 === 0) {
    console.log("El número de tarjeta es válido.");
  } else {
    console.log("El número de tarjeta no es válido.");
  }
}

const numeroTarjeta = "4532015112/30366"; 

verificarNumeroTarjeta(numeroTarjeta);