// Esta función recibe dos números y devuelve su suma
export function suma(a, b) {
  return a + b;
}

// Esta función recibe dos números y devuelve su resta
export function resta(a, b) {
  return a - b;
}

// Esta función recibe dos números y devuelve su multiplicación
export function multiplicacion(a, b) {
  return a * b;
}

// Esta función recibe dos números y devuelve su división
export function division(a, b) {
  return a / b;
}

// Esta función recibe 3 números y devuelve cuál es el menor,
// cuál va en medio y cuál es el mayor
export function ordenarTresNumeros(a, b, c) {
  const numeros = [a, b, c];

  // sort ordena el array de menor a mayor
  numeros.sort((x, y) => x - y);

  return {
    menor: numeros[0],
    medio: numeros[1],
    mayor: numeros[2]
  };
}

// Devuelve el módulo o residuo entre dos números
export function modulo(a, b) {
  return a % b;
}

// Hace fizzbuzz entre dos números
export function fizzbuzzEntreDosNumeros(inicio, fin) {
  const resultado = [];

  // Por si el usuario manda inicio mayor que fin,
  // usamos Math.min y Math.max para ordenarlos
  const menor = Math.min(inicio, fin);
  const mayor = Math.max(inicio, fin);

  for (let i = menor; i <= mayor; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      resultado.push("FizzBuzz");
    } else if (i % 3 === 0) {
      resultado.push("Fizz");
    } else if (i % 5 === 0) {
      resultado.push("Buzz");
    } else {
      resultado.push(i);
    }
  }

  return resultado;
}