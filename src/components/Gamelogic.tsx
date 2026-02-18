import usePokemon from "../hooks/usePokemon";
import GameBoard from "./Gameboard";
import { useState } from "react";
import { useWindowSize } from 'react-use';
import ReactConfetti from "react-confetti";

export default function GameLogic() {
    /* debugovací nástroj, když napíšu parametr debugCard=True do prohlížeče, tak stačí kliknout na kartu pro výhru */
    const searchParams = new URLSearchParams(window.location.search);
    const isDebug = searchParams.get("debugCard") === "True";
    const WIN_SCORE = isDebug ? 1 : 12; 

    const { width, height } = useWindowSize();

    const { cards, shuffleCards, loading } = usePokemon();
    const [clickedIds, setClickedIds] = useState<number[]>([]);
    const [bestScore, setBestScore] = useState(0);

    if (loading) {
        return(
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        );
    }

    if (clickedIds.length === WIN_SCORE) {
        return(
          <div className="poke-border-1">
            <p>Vyhrál jsi!!</p>
            <ReactConfetti width={width} height={height} />
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
        <div className="background">
            <h1>Pokemon Cards game</h1>

            <div className="score poke-border-1">
                <p>Skore: {clickedIds.length}</p>
                <p>Nejlepší skore: {bestScore}</p>
            </div>

            <GameBoard cards={cards} onCardClick={handleCardClick} />
        </div>
    );
}
