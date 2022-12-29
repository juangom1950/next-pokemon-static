import { pokeApi } from '../api';
import { Pokemon } from '../interfaces';

export const getPokemonInfo = async (nameOrId: string) => {
  // If this pockemon does't exist it is going to give us an error  
  try {
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);

    // We do this to get just the information that we need
    return {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
    };

  } catch (error) {
    return null
  }
};
