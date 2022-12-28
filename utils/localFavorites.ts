

const toggleFavorite = ( id: number ) => {

    let favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]' );
    
    // if it doesn't exist I will insert it and if it exist It will be excluded.
    if ( favorites.includes( id ) ) {
        // it is going to include if it is true
        // It menas that this id is going to be excluded
        favorites = favorites.filter( pokeId => pokeId !== id );
        // If it isn't included I am going to insert it.
    } else {
        favorites.push( id );
    }

    // Because I modified the favorites I need to save it again in the local storage.
    // JSON.stringify convert this array into a string (json)
    localStorage.setItem('favorites', JSON.stringify( favorites ) );
}

const existInFavorites = ( id: number ): boolean => {

    // here we are checking if this code has been execute from the server side.
    // This happen when the code that is trying to run (in this case the localStorage), from the server 
    // doesn't exist yet. In this case is looking for the windows object (which is the one that have the LocalStorage), 
    // so it brakes the application. If it exist we should see windows=object
    // With this we make sure that we are at the client side.
    if ( typeof window === 'undefined' ) return false;
    
    const favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]' );

    return favorites.includes( id );
}


const pokemons = (): number[] => {
    // if it returns null it will show an empty array
    return JSON.parse( localStorage.getItem('favorites') || '[]' );
}



// eslint-disable-next-line import/no-anonymous-default-export
export default {
    existInFavorites,
    toggleFavorite,
    pokemons,
}