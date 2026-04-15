// Recibe nombre y apellido y construye un saludo
export function saludoCompleto(nombre, apellido) {
  return `Hola ${nombre} ${apellido}, ¿qué tal tu día?`;
}

// Recibe un array y devuelve un elemento aleatorio
export function obtenerDatoAleatorio(datos) {
  const posicionAleatoria = Math.floor(Math.random() * datos.length);
  return datos[posicionAleatoria];
}

// Recibe un array y lo ordena ascendente o descendente
export function ordenarArray(datos, orden) {
  const copia = [...datos];

  // Esto funciona bien si son números
  copia.sort((a, b) => a - b);

  if (orden === "desc") {
    copia.reverse();
  }

  return copia;
}

// Devuelve la longitud de una cadena
export function tamanioTexto(texto) {
  return texto.length;
}

// Comprueba si una palabra o frase es palíndromo
export function palindromo(palabra) {
  // Pasamos todo a minúsculas y quitamos espacios/símbolos
  const textoLimpio = palabra.toLowerCase().replace(/[\W_]/g, "");

  // Invertimos el texto
  const textoAlReves = textoLimpio.split("").reverse().join("");

  // Comparamos ambas versiones
  return textoLimpio === textoAlReves;
}