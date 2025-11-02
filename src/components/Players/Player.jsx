import userImg from '../../assets/user-name.png'
import flag from '../../assets/flag.png'
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Player = ({ player, selectedCardHanler, isSelected, setIsSelected, selectedCard }) => {

    const [isClick, setIsClick] = useState(false)


    const btnHandler = (ply) => {
        if (isSelected < ply.price_usd) {
            toast("❌ Not Availavel Coins!!")
            return;
        }
        if (selectedCard.length === 6) {
            toast("Not a enafe counts!!")
            return
        }
        setIsClick(true)
        selectedCardHanler(ply)
        setIsSelected(isSelected - ply.price_usd)
    }

    return (
        <div className="card md:max-w-96 shadow-xl p-3">
            <figure>
                <img className="w-full h-[240px] object-cover"
                    src={player.img}
                    alt="Shoes" />
            </figure>
            <div className="">
                <div className="flex items-center gap-2 mt-4">
                    <img src={userImg} alt="" />
                    <h2 className="card-title text-xl font-bold">{player.name}</h2>
                </div>

                <div className="mt-4 pb-2 flex justify-between items-center border-b border-gray-400">
                    <div className="flex items-center gap-2">
                        <img src={flag} alt="" /> <h4 className="text-gray-500">{player.country}</h4>
                    </div>
                    <button className="btn text-[#131313]">{player.role}</button>
                </div>

                <div className="flex justify-between items-center mt-4 font-bold">
                    <h2 className="text-[#131313] ">Rating</h2>
                    <span>{player.rating}</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <h2 className="font-semibold">{player.batting_style}</h2>
                    <h2 className="font-normal text-gray-500">{player.bowling_style}</h2>
                </div>

                <div className="flex justify-between items-center mt-4">
                    <h2 className="font-semibold">Price: ${player.price_usd}</h2>
                    <button disabled={isClick && true} onClick={() => btnHandler(player)} className="btn">{isClick === true ? "Selected" : "Choice player"}</button>
                </div>
            </div>
        </div>
    );
};

export default Player;