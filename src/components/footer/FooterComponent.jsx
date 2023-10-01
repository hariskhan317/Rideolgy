import bgimg from '../../assets/images/bg.png';
import FooterForm from './FooterForm';
import FooterContactus from './FooterContactus';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBicycle } from '@fortawesome/free-solid-svg-icons'
  
function Footer(props) {
    return (
        <>
            <section className="bg-[#15182f]">
                <div className="h-auto w-full " style={{ backgroundImage: `url(${bgimg})`}}>
                    <div className='mx-auto max-w-7xl px-5 pt-20 pb-10'>
                        <div className='grid grid-cols-2'>
                            <div className=''>
                                <FooterContactus />
                            </div>
                            <div className=''>
                                <FooterForm />
                            </div>
                        </div>
                        <footer className="flex flex-col md:flex-row justify-between mt-7 pt-5 border-t-2 gap-5">
                            <div className="flex justify-center space-x-6 md:order-2">
                                <a href="https://www.facebook.com/groups/647722357266336/?ref=share" target="_blank" className="text-white text-2xl">
                                    <FontAwesomeIcon icon={faBicycle} />
                                </a>
                                <a href="https://www.instagram.com/rideologyau/" target="_blank" className="text-white text-2xl">
                                    <FontAwesomeIcon icon={faBicycle} />
                                </a>
                                <a href="https://twitter.com/Rideology_MHY" target="_blank" className="text-white text-2xl">
                                    <FontAwesomeIcon icon={faBicycle} />
                                </a>
                            </div>
                            <div className="md:order-1 md:mt-2">
                                <p className="text-center text-base leading-5 text-white font-quicksand">&copy; 2023 Rideology, Inc. All rights reserved.</p>
                            </div>
                        </footer>  
                    </div>
                </div>
            </section>
        </>
    );
}

export default Footer;