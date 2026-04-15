// Esta función consulta la PokeAPI con un número de pokemon
export async function obtenerSpritePokemon(numero) {
  const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`);

  // Si la respuesta no fue correcta, lanzamos un error
  if (!respuesta.ok) {
    throw new Error("No se pudo obtener el pokemon");
  }

  const data = await respuesta.json();

  // Devolvemos un objeto más limpio, solo con lo que necesitamos
  return {
    numero: numero,
    nombre: data.name,
    sprite: data.sprites.front_default
  };
}