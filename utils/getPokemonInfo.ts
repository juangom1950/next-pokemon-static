import { pokeApi } from '../api';
import { Pokemon } from '../interfaces';


export const getPokemonInfo = async( nameOrId: string ) => {

  
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${ nameOrId }`);

    // We do this to get just the information that we need
    return {
        id: data.id,
        name: data.name,
        sprites: data.sprites
    }

}