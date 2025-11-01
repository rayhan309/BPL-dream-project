import logo from '../../assets/logo.png';
import coin from '../../assets/coin.png';

const Navber = ({ isSelected }) => {
    return (
        <div className="navbar bg-base-100 shadow-sm max-w-[1240px] mx-auto">
            <div className="flex-1">
                <a><img className="w-[60px]" src={logo} alt="" /></a>
            </div>
            <div className="flex items-center gap-1.5">
                <span className='font-semibold text-[#131313]'>{isSelected}</span>
                <span className='font-semibold text-[#131313]'>Coin</span>
                <img className="w-[20px]" src={coin} alt="" />
            </div>
        </div>
    );
};

export default Navber;