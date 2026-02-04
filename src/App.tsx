import usePokemon from "./assets/hooks/usePokemon";
import GameBoard from "./assets/components/Gameboard";
import { useState } from "react";

export default function App() {
    const { cards, shuffleCards, loading } = usePokemon();
    const [clickedIds, setClickedIds] = useState<number[]>([]);
    const [bestScore, setBestScore] = useState(0);

    if (loading) {
        return <div className="loading">Chytám pokémony</div>;
    }

    if (clickedIds.length === 12) {
        return(
          <div>
            <p>Vyhrál jsi</p>
          </div>
        );
    }

    const handleCardClick = (id: number) => {
        if (clickedIds.includes(id)) {
            setClickedIds([]);
            if (clickedIds.length > bestScore) {
                setBestScore(clickedIds.length);
            }
        } else {
            setClickedIds([...clickedIds, id]);
            shuffleCards();
        }
    };

    console.log(cards);

    return (
        <div>
            <h1>Pokemon Cards game</h1>

            <div className="score">
                <p>Skore: {clickedIds.length}</p>
                <p>Nejlepší skore: {bestScore}</p>
            </div>

            <GameBoard cards={cards} onCardClick={handleCardClick} />
        </div>
    );
}
