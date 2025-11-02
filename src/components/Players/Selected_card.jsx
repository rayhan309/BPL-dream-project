import remove from '../../assets/Vector.png'

const Selected_card = ({ player, selectedCard, setSelectedCard, isSelected, setIsSelected }) => {

    const removeHandler = (ply) => {
        
        const filtered = selectedCard.filter(player => player.id !== ply.id)
        setSelectedCard(filtered)
        
        const remaining = isSelected + ply.price_usd;
        setIsSelected(remaining)
        
    }

    return (
        <div className="max-w-[1240px] mx-auto p-3 mt-3 rounded-xl border-2 border-gray-200 flex items-center justify-between">
            <div className="flex gap-3">
                <img className="w-[76px] h-[66px] rounded-xl object-cover" src={player.img} alt="" />
                <div>
                    <h3 className="text-xl font-bold">{player.name}</h3>
                    <p className="font-medium">{player.batting_style}</p>
                </div>
            </div>
            <div className='cursor-pointer' onClick={() => removeHandler(player)}>
                <img src={remove} alt="" />
            </div>
        </div>
    );
};

export default Selected_card;