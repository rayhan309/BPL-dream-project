import logo from '../../assets/logo-footer.png'

const Footer_Section = () => {
    return (
        <div className="w-full min-h-[500px] bg-[#1f1a1a] relative">
            <div className="border-2 border-amber-200 absolute top-36 w-full">
                <div className='w-[120px] mx-auto'><img src={logo} alt="" /></div>

                <div className='max-w-[1240px] mx-auto border-2 border-amber-200 mt-6'>
                    <div>
                        <h4 className='text-[#FFFFFF] font-medium'>About Us</h4>
                        <p className='text-gray-400 text-xs font-normal'>We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>

                    <div>
                        <h4 className='text-[#FFFFFF] font-medium'>Quick Links</h4>
                        <ul>
                            <li>Home</li>
                            <li>Services</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div></div>

                </div>

            </div>

        </div>
    );
};

export default Footer_Section;