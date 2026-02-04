import Card from "./Card";


interface PokemonCard {
    id: number;
    name: string;
    image: string;
}

interface GameboardProps {
    cards: PokemonCard[];
    onCardClick: (id: number) => void;
}

export default function GameBoard({ cards, onCardClick }: GameboardProps) {
    return (
        <div className="gameboard">
            {cards.map((pokemon) => (
                <Card
                    key={pokemon.id}
                    id={pokemon.id}
                    name={pokemon.name}
                    image={pokemon.image}
                    onClick={onCardClick}
                />
            ))}
        </div>
    );
}
