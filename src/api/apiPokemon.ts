
export interface PokemonCard {
    id: number;
    name: string;
    image: string;
}

const NUMBER_POKEMON: number = 151; // Počet pokémonů z první generace

export const fetchPokemonData = async (amount: number): Promise<PokemonCard[]> => {
    const uniqueIds = new Set<number>();

    while (uniqueIds.size < amount) {
        const randomId = Math.floor(Math.random() * NUMBER_POKEMON) + 1;
        uniqueIds.add(randomId);
    }

    const pokemonIds = Array.from(uniqueIds);

    const promises = pokemonIds.map((id) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then((res) =>
            res.json(),
        ),
    );

    const responses = await Promise.all(promises);

    const pokemonData: PokemonCard[] = responses.map((data: any) => ({
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
    }));

    return pokemonData;
};