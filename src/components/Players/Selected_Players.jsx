import Selected_card from './Selected_card'

const Selected_Players = ({ selectedCard, setSelectedCard, isSelected, setIsSelected, toggle, setToggle }) => {

    const addBtnHandler = () => {
        setToggle(true)
    }

    return (
        <>
            {
                selectedCard.map(player => <Selected_card isSelected={isSelected} setIsSelected={setIsSelected} selectedCard={selectedCard}  setSelectedCard={setSelectedCard} key={player.id} player={player}></Selected_card>)
            }


            <div onClick={addBtnHandler} className='border p-1 rounded-xl w-[190px] mt-24 hover:opacity-80'>
                <button className={`font-bold ${toggle || 'bg-[#E7FE29]'} py-[16px] px-[21px] rounded-xl`}>Add More Player</button>
            </div>
        </>
    );
};

export default Selected_Players;