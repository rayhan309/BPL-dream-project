import logo from '../../assets/logo-footer.png'

const Footer_Section = () => {

    return (
        <div className=' bg-gray-900 pt-[150px] pb-15'>
            <div className="max-w-[1240px] container mx-auto">
                <div className="w-full">
                    <div className='w-[120px] mx-auto mb-10'><img src={logo} alt="" /></div>
                    <div className='flex flex-col md:flex-row m-4 md:m-0 justify-between'>
                        <div className='ml-6'>
                            <h4 className='text-[#FFFFFF] font-medium'>About Us</h4>
                            <p className='text-gray-400 text-xs font-normal mt-3'>We are a passionate team <br />dedicated to providing the best <br /> services to our customers.</p>
                        </div>

                        <div className='ml-6'>
                            <h4 className='text-[#FFFFFF] font-medium mt-5 md:mt-0'>Quick Links</h4>
                            <ul className='mt-3 space-y-2'>
                                <li className='text-gray-400 text-xs'>. Home</li>
                                <li className='text-gray-400 text-xs'>. Services</li>
                                <li className='text-gray-400 text-xs'>. About</li>
                                <li className='text-gray-400 text-xs'>. Contact</li>
                            </ul>
                        </div>

                        <div className='ml-6'>
                            <h3 className='text-[#ffffff] mt-5 md:mt-0'>Subscribe</h3>
                            <p className='text-gray-400 text-xs mt-3'>Subscribe to our newsletter for <br /> the latest updates.</p>
                            <div className="join mt-4">
                                <input className="input join-item rounded-l-xl" placeholder="Email" />
                                <button className="btn join-item bg-gradient-to-r from-yellow-300 to-pink-300 hover:opacity-90 rounded-r-xl">Subscribe</button>
                            </div>
                        </div>

                    </div>
{/* @2024 Your Company All Rights Reserved. */}
                </div>

            </div>
        </div>
    );
};

export default Footer_Section;