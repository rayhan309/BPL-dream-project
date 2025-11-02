import bg from '../../assets/bg-shadow.png'

const Footer_card = () => {
    return (
            <div className='border-3 border-white w-[95%] md:max-w-[1240px] mx-auto m-5 mt16 md:mt-28 rounded-2xl -mb-[90px] md:-mb-[120px] z-10 relative'>
                <div className="max-w-[1200px] md:mx-auto my-4 mx-4 pt-12 pb-8 px-5 md:p-[88px] min-h-[200px] bg-white bg-cover bg-center bg-no-repeat rounded-2xl shadow-2xl"
                    style={{ backgroundImage: `url(${bg})` }}
                >
                    <h2 className="text-xl md:text-2xl font-bold text-center">Subscribe to our Newsletter</h2>
                    <p className='font-medium text-gray-400 text-center mt-3'>Get the latest updates and news right in your inbox!</p>
                    <div className='flex items-center gap-3 mt-4 md:mx-auto w-full md:max-w-[440px]'>
                        <input type="text" placeholder="Type here" className="input" />
                        <button className="btn rounded-lg font-semibold text-black
          bg-gradient-to-r from-pink-300 to-yellow-300 hover:opacity-90">Subscribe</button>
                    </div>
                </div>
            </div>
    );
};

export default Footer_card;