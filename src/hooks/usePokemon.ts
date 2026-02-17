// usePokemon.ts
import { useState, useEffect } from "react";
import { fetchPokemonData } from "../api/apiPokemon"; 
import type { PokemonCard } from "../api/apiPokemon"; 

export default function usePokemon() {
    const [cards, setCards] = useState<PokemonCard[]>([]);
    const [loading, setLoading] = useState(true);

    const loadCards = async (amount: number) => {
        setLoading(true);
        try {
            const data = await fetchPokemonData(amount);
            setCards(data);
        } catch (error) {
            console.error("Failed to fetch pokemon", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadCards(12);
    }, []);

    const shuffleCards = () => {
        const shuffle = [...cards];
        shuffle.sort(() => Math.random() - 0.5);
        setCards(shuffle);
    };

    return { cards, shuffleCards, loading };
}