// Esta función consulta la PokeAPI con un número de pokemon
export async function obtenerSpritePokemon(numero) {
  const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`);

  // si no es correcto pone error
  if (!respuesta.ok) {
    throw new Error("No se pudo obtener el pokemon");
  }

  const data = await respuesta.json(); 

}
