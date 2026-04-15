// Importamos express para poder crear nuestro servidor y nuestras rutas
import express from "express";

// Importamos las funciones del fichero de matemáticas
import {
  suma,
  resta,
  multiplicacion,
  division,
  ordenarTresNumeros,
  modulo,
  fizzbuzzEntreDosNumeros
} from "./matematicas.js";

// Importamos las funciones del fichero de texto
import {
  saludoCompleto,
  obtenerDatoAleatorio,
  ordenarArray,
  tamanioTexto,
  palindromo
} from "./texto.js";

// Importamos la función que consulta la PokeAPI
import { obtenerSpritePokemon } from "./pokeapi.js";


// Creamos la aplicación de express
const app = express();

// Indicamos el puerto en el que correrá nuestro servidor
const port = 3000;


// Este middleware permite que express entienda JSON en el body
// Es decir, para poder mandar datos desde Postman en formato JSON
app.use(express.json());


// RUTA GET DE PRUEBA

// Esta ruta sirve para comprobar rápido que el servidor funciona
app.get("/", (req, res) => {
  // status(200) significa que todo salió bien
  // json(...) responde en formato JSON
  res.status(200).json({
    mensaje: "Hola mundo, servidor funcionando correctamente"
  });
});


// MATEMÁTICAS
// =====================================================

// SUMA
app.post("/suma", (req, res) => {
  // Extraemos a y b del body que nos manda el cliente
  const { a, b } = req.body;

  // Validamos que ambos datos sean números
  if (typeof a !== "number" || typeof b !== "number") {
    return res.status(400).json({
      error: "Debes enviar dos números en a y b"
    });
  }

  // Llamamos a la función importada del fichero matematicas.js
  const resultado = suma(a, b);

  // Respondemos con status 200 porque todo salió bien
  res.status(200).json({
    operacion: "suma",
    resultado: resultado
  });
});


// RESTA
app.post("/resta", (req, res) => {
  const { a, b } = req.body;

  if (typeof a !== "number" || typeof b !== "number") {
    return res.status(400).json({
      error: "Debes enviar dos números en a y b"
    });
  }

  const resultado = resta(a, b);

  res.status(200).json({
    operacion: "resta",
    resultado: resultado
  });
});


// MULTIPLICACIÓN
app.post("/multiplicacion", (req, res) => {
  const { a, b } = req.body;

  if (typeof a !== "number" || typeof b !== "number") {
    return res.status(400).json({
      error: "Debes enviar dos números en a y b"
    });
  }

  const resultado = multiplicacion(a, b);

  res.status(200).json({
    operacion: "multiplicacion",
    resultado: resultado
  });
});


// DIVISIÓN
app.post("/division", (req, res) => {
  const { a, b } = req.body;

  if (typeof a !== "number" || typeof b !== "number") {
    return res.status(400).json({
      error: "Debes enviar dos números en a y b"
    });
  }

  // Validamos que no se divida entre 0
  if (b === 0) {
    return res.status(400).json({
      error: "No se puede dividir entre 0"
    });
  }

  const resultado = division(a, b);

  res.status(200).json({
    operacion: "division",
    resultado: resultado
  });
});


// MAYOR, MENOR Y EL DE EN MEDIO
app.post("/ordenar-tres", (req, res) => {
  const { a, b, c } = req.body;

  if (
    typeof a !== "number" ||
    typeof b !== "number" ||
    typeof c !== "number"
  ) {
    return res.status(400).json({
      error: "Debes enviar tres números: a, b y c"
    });
  }

  const resultado = ordenarTresNumeros(a, b, c);

  res.status(200).json({
    mensaje: "Números ordenados correctamente",
    resultado: resultado
  });
});


// MÓDULO
app.post("/modulo", (req, res) => {
  const { a, b } = req.body;

  if (typeof a !== "number" || typeof b !== "number") {
    return res.status(400).json({
      error: "Debes enviar dos números en a y b"
    });
  }

  if (b === 0) {
    return res.status(400).json({
      error: "No se puede hacer módulo entre 0"
    });
  }

  const resultado = modulo(a, b);

  res.status(200).json({
    operacion: "modulo",
    resultado: resultado
  });
});


// FIZZBUZZ ENTRE 2 NÚMEROS
app.post("/fizzbuzz", (req, res) => {
  const { inicio, fin } = req.body;

  if (typeof inicio !== "number" || typeof fin !== "number") {
    return res.status(400).json({
      error: "Debes enviar dos números: inicio y fin"
    });
  }

  const resultado = fizzbuzzEntreDosNumeros(inicio, fin);

  res.status(200).json({
    operacion: "fizzbuzz",
    resultado: resultado
  });
});


// TEXTO
// =====================================================

// SALUDO CON NOMBRE Y APELLIDO
app.post("/saludo", (req, res) => {
  const { nombre, apellido } = req.body;

  // Validamos que sí existan y que sean string
  if (typeof nombre !== "string" || typeof apellido !== "string") {
    return res.status(400).json({
      error: "Debes enviar nombre y apellido como texto"
    });
  }

  const resultado = saludoCompleto(nombre, apellido);

  res.status(200).json({
    mensaje: resultado
  });
});


// DATO ALEATORIO
app.post("/dato-aleatorio", (req, res) => {
  const { datos } = req.body;

  // Validamos que datos sea un array y que no esté vacío
  if (!Array.isArray(datos) || datos.length === 0) {
    return res.status(400).json({
      error: "Debes enviar un array llamado datos con al menos un elemento"
    });
  }

  const resultado = obtenerDatoAleatorio(datos);

  res.status(200).json({
    mensaje: `El dato aleatorio es: ${resultado}`
  });
});


// ORDENAR ARRAY ASCENDENTE O DESCENDENTE
app.post("/ordenar-array", (req, res) => {
  const { datos, orden } = req.body;

  if (!Array.isArray(datos) || datos.length === 0) {
    return res.status(400).json({
      error: "Debes enviar un array llamado datos"
    });
  }

  // El usuario debe mandar "asc" o "desc"
  if (orden !== "asc" && orden !== "desc") {
    return res.status(400).json({
      error: 'El campo orden debe ser "asc" o "desc"'
    });
  }

  const resultado = ordenarArray(datos, orden);

  res.status(200).json({
    orden: orden,
    resultado: resultado
  });
});


// TAMAÑO DE UN TEXTO
app.post("/tamanio-texto", (req, res) => {
  const { texto } = req.body;

  if (typeof texto !== "string") {
    return res.status(400).json({
      error: "Debes enviar un texto"
    });
  }

  const resultado = tamanioTexto(texto);

  res.status(200).json({
    texto: texto,
    tamanio: resultado
  });
});


// PALÍNDROMO
app.post("/palindromo", (req, res) => {
  const { palabra } = req.body;

  if (typeof palabra !== "string") {
    return res.status(400).json({
      error: "Debes enviar una palabra o frase"
    });
  }

  const resultado = palindromo(palabra);

  res.status(200).json({
    palabra: palabra,
    esPalindromo: resultado
  });
});


// POKEAPI
// =====================================================

// Como vamos a usar fetch a una API externa, esta ruta necesita async
app.post("/pokemon-sprite", async (req, res) => {
  try {
    const { numero } = req.body;

    // Validamos que sea un número entero
    if (typeof numero !== "number" || !Number.isInteger(numero)) {
      return res.status(400).json({
        error: "Debes enviar un número entero en el campo numero"
      });
    }

    // Validamos el rango que pidió el profe
    if (numero < 1 || numero > 1025) {
      return res.status(400).json({
        error: "El número debe estar entre 1 y 1025"
      });
    }

    const resultado = await obtenerSpritePokemon(numero);

    res.status(200).json({
      mensaje: "Pokemon encontrado correctamente",
      pokemon: resultado
    });

  } catch (error) {
    // Si falla la API externa o algo interno, respondemos con 500
    res.status(500).json({
      error: "Error al consultar la PokeAPI"
    });
  }
});


// RUTA NO ENCONTRADA
// =====================================================

// Este middleware se ejecuta si ninguna ruta anterior coincidió
app.use((req, res) => {
  res.status(404).json({
    error: "Ruta no encontrada"
  });
});


// Encendemos el servidor
app.listen(port, () => {
  console.log(`el servidor arranco en la url http://localhost:${port}`);
});