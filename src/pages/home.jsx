import React from 'react'; 
import HomeComponent from '../components/header/HomeComponent';
import Header from '../components/header/HeaderComponent'
import Footer from '../components/footer/FooterComponent'
import Service from '../components/service/serviceComponent'
import WhyChooseRideology from '../components/whySection/WhyChooseRideology';
import AboutUs from '../components/aboutUs/AboutUs'

import bgimg from '../assets/images/bg.png'
function Home() {
    return (
        <>
            {/* header */}
            <section className="bg-[#15182f]">
                <div className="h-auto w-full " style={{ backgroundImage: `url(${bgimg})`}}>
                    <Header />
                    <HomeComponent  />
                </div>
            </section> 
            {/* about us */}
            <div className="max-w-screen-2xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                <AboutUs />
            </div>

            {/* why choose Rideology */}
            <div className="py-24 max-w-screen-2xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                <WhyChooseRideology />
            </div>
            {/* Service */}
            <div className="py-24 max-w-screen-2xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                <Service/>
            </div>
            {/* footer */}
            <Footer />
        </>
    );
}

export default Home;

