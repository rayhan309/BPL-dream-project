import bg from '../../assets/bg-shadow.png'
import banner from '../../assets/banner-main.png'
const Banner = () => {
    return (
        <div className="max-w-[1240px] mx-auto border-2 p-[30px] md:p-[64px] shadow-xl text-center border-amber-100 mt-5 bg-[#1f1a1a] min-h-[250px] bg-cover bg-center bg-no-repeat rounded-2xl"
            style={{ backgroundImage: `url(${bg})` }}>
            <div className='max-w-[250px] mx-auto '>
                <img src={banner} alt="" />
            </div>
            <h2 className='text-xl md:text-[40px] font-bold text-white mt-3'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
            <p className='md:text-[1.5rem] font-medium text-white mt-3'>Beyond Boundaries Beyond Limits</p>
            <div className='border-2 border-[#E7FE29] rounded-xl p-1 w-[160px] md:w-[200px] mx-auto mt-5'>
                <button className='font-bold bg-[#E7FE29] py-[16px] px-[20px] text-xs md:text-[16px] rounded-xl'>Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Banner;