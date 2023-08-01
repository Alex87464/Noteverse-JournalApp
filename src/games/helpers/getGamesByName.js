import { heroes } from "../data/heroes";

export const getGamesByName = ( name = '' ) => {
    
    // Convert the name received to lower case and clean the spaces " " with the trim()
    name = name.toLowerCase().trim();

    // If the lenght of the name received is 0, just return an empty array
    if(name.length === 0) return [];

    // Return a hero from the array heroes only if the name is there
    return heroes.filter(
        hero => hero.superhero.toLowerCase().includes(name)
    );

}