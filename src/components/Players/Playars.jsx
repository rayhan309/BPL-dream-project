import { use } from "react";
import Player from "./Player";


const Playars = ({ playersDataPromiss, setIsSelected, isSelected, selectedCardHanler, selectedCard }) => {

    const playersData = use(playersDataPromiss);

    return (
        <>
            <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-3">
                {
                    playersData.map(player => <Player
                        key={player.id}
                        player={player}
                        // chooseHandler={chooseHandler}
                        setIsSelected={setIsSelected}
                        isSelected={isSelected}
                        selectedCardHanler={selectedCardHanler}
                        selectedCard={selectedCard}
                    ></Player>)
                }
            </div>
        </>
    );
};

export default Playars;