import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


function HomeRepair() {
    return (
        <>
            <div className="py-64 text-center max-w-screen-2xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                <h1 class="flex justify-center gap-5 text-5xl md:text-8xl font-bold tracking-widest text-white uppercase font-quicksand rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">
                    <FontAwesomeIcon icon={faBicycle} />
                    <p> REPAIR a Bike</p> 
                </h1>
                <p class="mt-9 text-white tracking-widest opacity-75 text-xl md:text-2xl font-quicksand font-normal">Pedal Power and Precision: Join the Rideology Bike Show and Repair Revolution</p>
                <div class="flex justify-center gap-10 mt-5">
                    <a href="https://www.facebook.com/groups/647722357266336/?ref=share" target="_blank" class="mt-5 text-white text-4xl">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://www.instagram.com/rideologyau/" class="mt-5 text-white text-4xl">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://twitter.com/Rideology_MHY" target="_blank" class="mt-5 text-white text-4xl">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </div>
            </div>
        </>
    );
}

export default HomeRepair;

