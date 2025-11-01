import Selected_card from './Selected_card'

const Selected_Players = ({ selectedCard, setSelectedCard, isSelected, setIsSelected }) => {

    return (
        <>
            {
                selectedCard.map(player => <Selected_card isSelected={isSelected} setIsSelected={setIsSelected} selectedCard={selectedCard}  setSelectedCard={setSelectedCard} key={player.id} player={player}></Selected_card>)
            }
        </>
    );
};

export default Selected_Players;